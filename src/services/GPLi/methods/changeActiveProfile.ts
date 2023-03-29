import { appToken, httpClient, urlGPLi } from "../utilities/constants";

/**
 * Cambia el perfil activo a 'Super Admin'
 * @param sessionToken el session token de autenticación
 */
export async function changeActiveProfile(sessionToken: string): Promise<void> {
  const changeActiveProfileUrl = `${urlGPLi}/apirest.php/changeActiveProfile`;
  const headers = { "App-Token": appToken, "Session-Token": sessionToken };
  httpClient.post(changeActiveProfileUrl, { profiles_id: "4" }, { headers }).catch();
}
