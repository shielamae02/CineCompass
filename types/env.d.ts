declare namespace NodeJS {
  interface ProcessEnv {
    API_URL: string;
    API_KEY: string;
    IMAGE_URL: string;
    NODE_ENV: "development" | "production" | "test";
  }
}
