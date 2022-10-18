import { config } from "dotenv";

config();

const env = {
  PORT: (process.env.PORT || 5000) as number,

  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY as string,
  GOOGLE_MAPS_API_URL: process.env.GOOGLE_MAPS_API_URL as string,
};

export { env };
