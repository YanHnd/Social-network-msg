import {
  LOAD_MESSAGES,
  LOAD_SUCESS_MESSAGE,
  LOAD_CONVERSATIONS,
  LOAD_CONVERSATIONS_SUCESS,
} from "../types";
const { fire } = require("../../init");

export const getRealtimeMessages = (dispatch, userId) => {
  dispatch({ type: LOAD_MESSAGES });
  let convId = userId;
  fire
    .firestore()
    .collection("Conversations")
    .doc(convId)
    .collection("messages")
    .orderBy("creatAt", "asc")
    .onSnapshot((snapshot) => {
      let msg = [];
      snapshot.forEach((doc) => {
        msg.push(doc.data());
      });

      dispatch({ type: LOAD_SUCESS_MESSAGE, payload: msg });
    });
};
export const getConversations = (dispatch, userId) => {
  let conversations = [];
  const user = userId;
  dispatch({ type: LOAD_CONVERSATIONS });
  fire
    .firestore()
    .collection("Conversations")
    .where("Users", "array-contains", user)
    .orderBy("LastUpdate", "desc")
    .onSnapshot((snap) => {
      snap.docChanges().forEach((doc) => {
        console.log(doc.doc.data());
        conversations.push(doc.doc.data());
      });
      dispatch({ type: LOAD_CONVERSATIONS_SUCESS, payload: conversations });
    });
};
