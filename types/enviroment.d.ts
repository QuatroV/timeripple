export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEV_URL: string;
      PRODUCTION_URL: string;
      ENV: "testing" | "devevelopment" | "production";
      DB_NAME: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_HOST: string;
      DB_PORT: number;
      SECRET_KEY: string;
    }
  }
}
