import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  MODE: process.env.MODE,
  MONGO_DB: process.env.MONGO_DB,
  JWT_ALGORITHM: process.env.JWT_ALGORITHM,
  JWT_SECRET: process.env.JWT_SECRET,
}