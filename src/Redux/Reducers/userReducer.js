import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types";

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        loading: false,
      };

    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };

    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
