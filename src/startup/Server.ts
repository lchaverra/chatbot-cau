import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import webhookRouter from "../routing/webhook.routing";
import { routes } from "../routing/routes";
import https from "https";
import fs from "fs";

dotenv.config();

export class Server {
  private app = express();
  private server = https.createServer({ key: fs.readFileSync("key.pem"), cert: fs.readFileSync("cert.pem") }, this.app);
  private port = process.env.PORT;

  constructor() {}

  configMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  configRoutes() {
    this.app.use(routes.webhook, webhookRouter);
  }

  listen() {
    this.server.listen(this.port, () => console.log(`Servidor corriendo en el puerto ${this.port}`));
  }
}
