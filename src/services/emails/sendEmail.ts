import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { responseMessages } from "../../resources/strings";
dotenv.config();

// la cuenta desde la que se enviaran los correos
const senderEmail = process.env.EMAIL;
const password = process.env.PASS;

// Configuración de credenciales
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: senderEmail, pass: password }
});

/**
 *
 * @param receiverEmail La dirección email a la que se le debe enviar el correo con la información del ticket
 * @param message El mensaje que va contener el correo
 * @returns El mensaje que se le va devolver al usuario por medio del chatbot
 */
export async function sendEmail(receiverEmail: string, message: string): Promise<string> {
  // Definición del correo electrónico a enviar
  const mailOptions = {
    from: senderEmail,
    subject: "Ticket de Soporte Técnico",
    to: receiverEmail,
    text: `${message}`
  };

  // Envío del correo electrónico
  try {
    await transporter.sendMail(mailOptions);
    return responseMessages.ticketCreationSuccessfully;
  } catch (error) {
    return responseMessages.emailSendingFailed;
  }
}
