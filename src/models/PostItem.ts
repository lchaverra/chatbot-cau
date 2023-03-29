export interface PostItemRequest {
  input: {
    name: string;
    content: string;
    urgency: number;
    type: number;
  };
}

export interface PostItemResponse {
  id: number;
  message: string;
}

export enum ItemType {
  TICKET = "Ticket",
  COMPUTER = "Computer"
}
