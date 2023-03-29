export interface IntentInfo {
  lastMatchedIntent: string;
  displayName: string;
  parameters: { [key: string]: IntentParameterValue };
  confidence: number;
}

interface IntentParameterValue {
  originalValue: string;
  resolvedValue: any;
}
