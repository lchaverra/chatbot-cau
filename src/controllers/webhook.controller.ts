import { Request, Response } from "express";

import { WebhookRequest } from "../models/WebhookRequest";
import { WebhookResponse } from "../models/WebhookResponse";

import { initSession } from "../services/GPLi/methods/initSession";
import { changeActiveProfile } from "../services/GPLi/methods/changeActiveProfile";
import { createTicket } from "../services/GPLi/methods/createTicket";
import { EmailValidatorResults, isEmailValid } from "../services/emails/emailValidator";
import { sendEmail } from "../services/emails/sendEmail";
import { responseMessages } from "../resources/strings";

async function processWebhookRequest(request: Request, response: Response) {
  const email: string = request.body.email;
  const emailValidatorResults = isEmailValid(email);
  if (emailValidatorResults === EmailValidatorResults.INVALID) {
    response.status(400).json({ message: responseMessages.invalidEmail });
  } else if (emailValidatorResults === EmailValidatorResults.NOT_CORP) {
    response.status(400).json({ message: responseMessages.notCorpEmail });
  } else {
    try {
      const sessionToken = await initSession();
      await changeActiveProfile(sessionToken);
      const results = await createTicket(sessionToken, "VPN");
      const responseMessage = await sendEmail(email, results.message);
      response.json({ message: responseMessage });
    } catch (error) {
      console.log(error);
    }
  }
}

export { processWebhookRequest };
