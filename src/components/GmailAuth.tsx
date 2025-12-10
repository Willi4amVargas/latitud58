import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import type { Form } from "@/types/form";
import { toast } from "react-toastify";

const CLIENT_ID: string = import.meta.env.BUN_PUBLIC_CLIENT_ID;
const DISCOVERY_DOC = import.meta.env.BUN_PUBLIC_DISCOVERY_DOC;
const SCOPES = import.meta.env.BUN_PUBLIC_SCOPES;

export function GmailAuth({
  data,
  onSend,
}: {
  data: Form;
  onSend: () => void;
}) {
  const [buttonDisable, setButtonDisable] = useState(false);
  const [content, setContent] = useState("Waiting for Google service");
  const tokenClient = useRef<TokenClient | null>(null);

  const initializeGapiClient = async () => {
    try {
      await window.gapi.client.init({
        discoveryDocs: [DISCOVERY_DOC],
      });
      initializeTokenClient();
    } catch (error) {
      console.error("Error al inicializar gapi:", error);
      setContent("Error starting Google services");
    }
  };

  const initializeTokenClient = () => {
    if (window.google && window.google.accounts) {
      tokenClient.current = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: (resp: any) => {},
      });
      setContent("Submit Message");
    } else {
      console.warn("GIS library aún no disponible. Reintentando...");
      setTimeout(initializeTokenClient, 200);
    }
  };

  useEffect(() => {
    if (window.gapi) {
      window.gapi.load("client", initializeGapiClient);
    } else {
      console.warn("gapi aún no disponible. Esperando...");
      setTimeout(() => window.gapi.load("client", initializeGapiClient), 500);
    }
  }, []);

  const handleAuthClick = () => {
    setButtonDisable(true);

    if (!data.name || !data.email || !data.message) {
      toast.error(
        "Please fill in Name, Email, and the message for send a message"
      );
      setButtonDisable(false);
      return;
    }

    if (!tokenClient.current) {
      setContent("Client token not available");
      return;
    }

    tokenClient.current.callback = async (resp: any) => {
      if (resp.error) {
        console.error("Error de autorización:", resp);
        setContent(`Authorization error: ${resp.error}`);
        return;
      }
      await sendMessage();

      setButtonDisable(false);
    };

    const token = window.gapi.client.getToken();
    if (token === null) {
      tokenClient.current.requestAccessToken({ prompt: "consent" });
    } else {
      tokenClient.current.requestAccessToken({ prompt: "" });
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken(null);
    }
    setButtonDisable(false);
  };

  //   const signoutClient = () => {
  //     const token = window.gapi.client.getToken();
  //     if (token !== null) {
  //       window.google.accounts.oauth2.revoke(token.access_token);
  //       window.gapi.client.setToken(null);
  //       setContent("Sesión cerrada.");
  //     }
  //   };

  function base64urlEncode(str: string): string {
    // 1. Codificar la cadena UTF-8 en una Uint8Array
    const utf8Bytes = new TextEncoder().encode(str);

    // 2. Convertir la Uint8Array a una cadena binaria (Solución al error de iteración)
    let binaryString = "";
    const len = utf8Bytes.length;
    for (let i = 0; i < len; i++) {
      // Usar String.fromCharCode() para crear una cadena binaria de un byte
      binaryString += String.fromCharCode(utf8Bytes[i]);
    }

    // 3. Aplicar la codificación Base64 estándar
    const base64 = btoa(binaryString);

    // 4. Convertir a Base64 URL-safe (reemplazar y quitar =)
    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  async function sendMessage() {
    const recipient = "info@latitud58.net";
    const name = data.name || "Anonimo";
    const subject = "New Contact Inquiry from " + name;

    const htmlBody = `
   <html>
   <head>
    <style>
     body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
     .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
     h2 { color: #1e88e5; border-bottom: 2px solid #1e88e5; padding-bottom: 5px; }
     .data-point { margin-bottom: 10px; }
     strong { display: inline-block; width: 120px; color: #555; }
     pre { background-color: #f4f4f4; padding: 15px; border-left: 3px solid #ccc; white-space: pre-wrap; word-wrap: break-word; }
    </style>
   </head>
   <body>
    <div class="container">
     <h2>✉️ New Contact Inquiry</h2>
     
     <p>You have received a new message through the contact form:</p>
     
     <div class="data-point"><strong>First Name:</strong> ${data.name}</div>
     <div class="data-point"><strong>Last Name:</strong> ${
       data.lastName || "N/A"
     }</div>
     <div class="data-point"><strong>Mobile Number:</strong> ${
       data.mobileNumber || "N/A"
     }</div>
     <div class="data-point"><strong>Email Address:</strong> <a href="mailto:${
       data.email
     }">${data.email}</a></div>
     
     <h3 style="margin-top: 20px;">Message:</h3>
     <pre>${data.message}</pre>
     
     <p style="font-size: 0.8em; color: #888; margin-top: 30px;">This message was sent via the website contact form.</p>
    </div>
   </body>
   </html>
  `; // 2. Construir el mensaje MIME con el cuerpo HTML

    const emailLines = [];
    emailLines.push("From: me");
    emailLines.push(`To: ${recipient}`); // Es crucial mantener 'Content-type: text/html'
    emailLines.push("Content-type: text/html;charset=utf-8");
    emailLines.push("MIME-Version: 1.0");
    emailLines.push(`Subject: ${subject}`);
    emailLines.push("");
    emailLines.push(htmlBody); // Ahora enviamos la cadena HTML

    const email = emailLines.join("\r\n"); // 3. Codificar el mensaje MIME en Base64 URL-safe

    const base64EncodedEmail = base64urlEncode(email); // 4. Llamar a la API para enviar el mensaje

    try {
      await gapi.client.gmail.users.messages.send({
        userId: "me",
        resource: {
          raw: base64EncodedEmail,
        },
      });
      onSend();
    } catch (err) {
      toast.error("Cant send the email");
      console.error("Error sending email:", err);
      return;
    }
  }

  return (
    <>
      <Button
        type="submit"
        className="w-full text-tertiary"
        disabled={buttonDisable}
        onClick={handleAuthClick}
      >
        {content}
      </Button>
    </>
  );
}
