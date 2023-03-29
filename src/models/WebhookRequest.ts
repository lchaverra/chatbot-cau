import { IntentInfo } from "./IntentInfo";
import { PageInfo } from "./PageInfo";
import { ResponseMessage } from "./ResponseMessage";
import { SessionInfo } from "./SessionInfo";

export interface WebhookRequest {
  detectIntentResponseId: string;
  languageCode: string;
  fulfillmentInfo: FulfillmentInfo;
  intentInfo: IntentInfo;
  pageInfo: PageInfo;
  sessionInfo: SessionInfo;
  messages: ResponseMessage[];
  payload: object;
  sentimentAnalysisResult: SentimentAnalysisResult;
  // Union field query can be only one of the following:
  text?: string;
  triggerIntent?: string;
  transcript?: string;
  triggerEvent?: string;
  // End of list of possible types for union field query.
}

interface FulfillmentInfo {
  tag: string;
}

interface SentimentAnalysisResult {
  score: number;
  magnitude: number;
}
