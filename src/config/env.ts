import { config } from "dotenv";

config();

const env = {
  HOST: process.env.HOST as string,
  PORT: process.env.PORT as string,

  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY as string,
  GOOGLE_MAPS_API_URL: process.env.GOOGLE_MAPS_API_URL as string,
};

export { env };
