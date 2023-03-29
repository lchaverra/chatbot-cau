import { Router } from "express";
import { processWebhookRequest } from "../controllers/webhook.controller";

const webhookRouter = Router();

webhookRouter.post("/", processWebhookRequest);

export default webhookRouter;
