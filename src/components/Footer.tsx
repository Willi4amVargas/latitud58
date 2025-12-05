import Logo from "@/logo.png";
// import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <footer className="w-full bg-tertiary">
        <div className="grid grid-cols-1 md:grid-cols-5 mx-[5%] md:mx-[10%] items-center justify-items-center mt-3 py-6 gap-4 md:gap-0">
          <img
            src={Logo}
            alt={"Logo Latitud 58"}
            className="w-24 md:w-30 order-1"
          />

          <p className="col-span-1 md:col-span-3 text-center px-4 order-3 md:order-2 text-sm md:text-base">
            <b>Taste the authentic flavors of Venezuela!</b> We are Latitud 58,
            your favorite food truck for artisan comfort food, blending
            traditional recipes with a gourmet twist. Experience our passion for
            fresh ingredients in every burger, arepa, and grill.{" "}
          </p>
          <p className="flex flex-col items-center order-2 md:order-3">
            <div className="flex justify-center space-x-6 text-4xl text-primary">
              {/* <a href="">
                <FaFacebook />
              </a> */}
              <a
                target="_blank"
                href="https://www.instagram.com/latitud58_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@latitud58?refer=creator_embed"
              >
                <FaTiktok />
              </a>
              <a
                target="_blank"
                href="https://wa.me/18542008599?text=Hello!%20I%20am%20ready%20to%20place%20an%20order."
              >
                <FaWhatsapp />
              </a>
            </div>
            <span className="text-center mt-5 text-xs md:text-sm">
              © 2025 Latitud 58. All rights reserved.
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
