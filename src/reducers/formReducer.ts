import {
  ActionFormReducer,
  StateFormReducer,
  ActionFormReducerNames,
} from "@/types";

export const formReducer = (
  state: StateFormReducer,
  action: ActionFormReducer
) => {
  switch (action.type) {
    case ActionFormReducerNames.SET_TITLE:
      return { ...state, title: action.payload };
    case ActionFormReducerNames.SET_DESCRIPTION:
      return { ...state, description: action.payload };
    case ActionFormReducerNames.SET_DATE:
      return { ...state, date: action.payload };
    case ActionFormReducerNames.SET_COMPLETED:
      return { ...state, completed: action.payload };
    case ActionFormReducerNames.SET_IMPORTANT:
      return { ...state, important: action.payload };
    default:
      return state;
  }
};
