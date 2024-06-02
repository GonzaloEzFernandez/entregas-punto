import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const GOOGLE_APPLICATION_CREDENTIALS =
  process.env.GOOGLE_APPLICATION_CREDENTIALS;
