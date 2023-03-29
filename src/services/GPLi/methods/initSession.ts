import { appToken, httpClient, urlGPLi, userToken } from "../utilities/constants";

/**
 * Retrieves a new session token
 * @returns the session token generated
 */
export async function initSession(): Promise<string> {
  const headers = { "App-Token": appToken, Authorization: `user_token ${userToken}` };
  const initSessionUrl = `${urlGPLi}/apirest.php/initSession`;
  const response = await httpClient.post(initSessionUrl, null, { headers });
  return <string>response.data.session_token;
}
