// B3 – Named exports + default export
export const API_URL = "https://api.example.com";
export const TIMEOUT = 5000;

export default function createConfig(env) {
  if (env === "dev") {
    return { apiUrl: "http://localhost:3000", timeout: TIMEOUT };
  }

  if (env === "prod") {
    return { apiUrl: API_URL, timeout: TIMEOUT };
  }

  throw new Error(`Unknown environment: ${env}`);
}
