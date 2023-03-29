export interface ResponseMessage {
  channel: string;
  text: Text;
}

export interface Text {
  text: string[];
  allowPlaybackInterruption: boolean;
}
