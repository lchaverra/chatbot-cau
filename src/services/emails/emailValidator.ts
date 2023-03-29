import validator from "validator";

/**
 * Valida si el string dado es un email, y si es del dominio corporativo
 * @param email el email a validar
 * @returns el resultado de la validación, que puede ser VALID, INVALID, o NOT_EMAIL
 */
export function isEmailValid(email: string): EmailValidatorResults {
  if (!validator.isEmail(email)) return EmailValidatorResults.INVALID;
  if (!email.endsWith("@equitel.com.co")) return EmailValidatorResults.NOT_CORP;
  return EmailValidatorResults.VALID;
}

export enum EmailValidatorResults {
  VALID,
  NOT_CORP,
  INVALID
}
