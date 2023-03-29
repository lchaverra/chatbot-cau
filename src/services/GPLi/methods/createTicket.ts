import { PostItemRequest, PostItemResponse } from "../../../models/PostItem";
import { appToken, httpClient, urlGPLi } from "../utilities/constants";
import { getTicketContent } from "../utilities/getTicketContent";
import { getTicketName } from "../utilities/getTicketName";

export async function createTicket(sessionToken: string, problem: string): Promise<PostItemResponse> {
  const postTicketUrl = `${urlGPLi}/apirest.php/Ticket`;
  const headers = { "App-Token": appToken, "Session-Token": sessionToken };
  const ticket: PostItemRequest = {
    input: {
      name: getTicketName(problem),
      content: getTicketContent(problem),
      type: 1,
      urgency: 3
    }
  };
  const response = await httpClient.post<PostItemResponse>(postTicketUrl, ticket, { headers });
  return response.data;
}
