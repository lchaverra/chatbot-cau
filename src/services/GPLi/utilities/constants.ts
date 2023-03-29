import axios from "axios";
import dotenv from "dotenv";
import https from "https";

dotenv.config();

export const urlGPLi = process.env.GPLI_URL;
export const appToken = process.env.GPLI_APP_TOKEN;
export const userToken = process.env.GPLI_USER_TOKEN;

export const httpClient = axios.create({
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
});
