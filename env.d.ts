declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
    STRIPE_SECRET_KEY: string;
    STRIPE_WEBHOOK_SECRET_KEY: string;
  }
}
