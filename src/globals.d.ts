declare module "*.css";
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.webp" {
  const value: string;
  export default value;
}
declare module "*.pdf" {
  const value: string;
  export default value;
}
interface Window {
  gapi: typeof gapi;
  google: {
    accounts: {
      oauth2: {
        initTokenClient: (config: TokenClientConfig) => TokenClient;
        revoke: (accessToken: string) => void;
      };
    };
  };
}

interface TokenClientConfig {
  client_id: string;
  scope: string;
  callback: (resp: any) => void;
  prompt?: string;
}

interface TokenClient {
  requestAccessToken: (options: { prompt: string }) => void;
  callback: (resp: any) => void;
}
