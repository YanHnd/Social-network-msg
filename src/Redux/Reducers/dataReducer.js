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
      if (action.payload.length > 0) {
        if (state.conversations.length > 0) {
          let payload = action.payload;
          for (let i = 0; i < payload.length; i++) {
            const index = state.conversations.findIndex(
              (conv) => conv.convId === payload[i].convId
              // console.log(conv.convId);
              // console.log(payload[i].convId);
            );

            if (index != -1) {
              state.conversations.splice(index, 1);
              state.conversations.unshift(payload[i]);
            } else {
              state.conversations.unshift(payload[i]);
            }
          }
        } else {
          console.log("yess");
          state.conversations = action.payload;
        }
      }
      return {
        ...state,
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
