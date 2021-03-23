import axios from "axios";
import {
  LOAD_MESSAGES,
  LOAD_SUCESS_MESSAGE,
  LOAD_CONVERSATIONS,
  LOAD_CONVERSATIONS_SUCESS,
  MESSAGE_UPDATE,
  CLEAR_ERRORS,
} from "../types";
const { fire } = require("../../init");

export const getRealtimeMessages = (dispatch, userId) => {
  dispatch({ type: LOAD_MESSAGES });
  let convId = userId;
  const unsubscribe = fire
    .firestore()
    .collection("Conversations")
    .doc(convId)
    .collection("messages")
    .orderBy("creatAt", "asc")
    .onSnapshot((snapshot) => {
      let msg = [];
      snapshot.forEach((doc) => {
        if (doc.type != "modified") {
          msg.push(doc.data());
        }
      });
      dispatch({ type: LOAD_SUCESS_MESSAGE, payload: msg });
    });
  return unsubscribe;
};
export const getConversations = (dispatch, userId) => {
  const user = userId;
  console.log(user);
  dispatch({ type: LOAD_CONVERSATIONS });
  fire
    .firestore()
    .collection("Conversations")
    .where("Users", "array-contains", user)
    .orderBy("LastUpdate", "desc")
    .onSnapshot((snap) => {
      console.log("changement");
      let conversations = [];
      snap.docChanges().forEach((doc) => {
        console.log(doc.doc.data());
        conversations.push(doc.doc.data());
      });
      dispatch({ type: LOAD_CONVERSATIONS_SUCESS, payload: conversations });
    });
};

export const MessageUser = (dispatch, Message) => {
  axios
    .post("/users/MessageUser", Message)
    .then((res) => {
      dispatch({ type: MESSAGE_UPDATE });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const ReadMsg = (dispatch, convId) => {
  console.log("yes");
  axios
    .post("/users/ReadMsg", convId)
    .then(() => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((e) => {
      console.log(e);
    });
};
