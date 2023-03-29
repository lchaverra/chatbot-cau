import { PageInfo } from "./PageInfo";
import { ResponseMessage } from "./ResponseMessage";
import { SessionInfo } from "./SessionInfo";

export interface WebhookResponse {
  fulfillmentResponse: FulfillmentResponse;
  pageInfo: PageInfo;
  sessionInfo: SessionInfo;
  payload: object;

  // Union field transition can be only one of the following:
  targetPage?: string;
  targetFlow?: string;
  // End of list of possible types for union field transition.
}

interface FulfillmentResponse {
  messages: ResponseMessage[];
  mergeBehavior: MergeBehavior;
}

enum MergeBehavior {
  MERGE_BEHAVIOR_UNSPECIFIED,
  APPEND,
  REPLACE
}
