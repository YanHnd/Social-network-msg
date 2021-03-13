import {
  LOAD_MESSAGES,
  LOAD_SUCESS_MESSAGE,
  LOAD_CONVERSATIONS,
  LOAD_CONVERSATIONS_SUCESS,
} from "../types";

const initialState = {
  conversations: [],
  messages: [],
  users: [],
  loading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CONVERSATIONS:
      return {
        ...state,
        loading: true,
      };

    case LOAD_CONVERSATIONS_SUCESS:
      return {
        ...state,
        conversations: action.payload,
        loading: false,
      };
    case LOAD_MESSAGES:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCESS_MESSAGE:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
