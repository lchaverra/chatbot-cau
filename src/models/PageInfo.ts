export interface PageInfo {
  currentPage: string;
  displayName: string;
  formInfo: FormInfo;
}

interface FormInfo {
  parameterInfo: ParameterInfo[];
}

interface ParameterInfo {
  displayName: string;
  required: boolean;
  state: ParameterState;
  value: any;
  justCollected: boolean;
}

enum ParameterState {
  PARAMETER_STATE_UNSPECIFIED,
  EMPTY,
  INVALID,
  FILLED
}
