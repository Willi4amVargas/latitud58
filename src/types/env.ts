declare module "bun" {
  interface Env {
    BUN_PUBLIC_CLIENT_ID: string;
    BUN_PUBLIC_API_KEY: string;
    BUN_PUBLIC_DISCOVERY_DOC: string;
    BUN_PUBLIC_SCOPES: string;
  }
}
