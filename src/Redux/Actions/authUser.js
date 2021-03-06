import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types";
import axios from "axios";

const facebook = require("./Facebook");

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/signIn", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
/*
export const loginFacebook = (history) => (dispatch) => {
  try {
    dispatch({ type: LOADING_UI });
    const token = facebook(history, setAuthorizationHeader);
    setAuthorizationHeader(token);
    dispatch({ type: CLEAR_ERRORS });
    history.push("/");
    dispatch({
      type: SET_USER,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SET_ERRORS,
      payload: error.data,
    });
  }
};*/
/*export const getUserData = (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios
    .get('/users/getUserDetails/')
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};*/

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
