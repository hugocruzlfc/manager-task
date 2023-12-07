import { ActionFormReducerNames } from "./ActionFormReducerNames";

export interface ActionFormReducer {
  type: ActionFormReducerNames;
  payload: any;
}
