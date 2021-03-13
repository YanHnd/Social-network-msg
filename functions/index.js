const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//CORS request

app.use(
  cors({
    origin: true,
  })
);

const {
  signUp,
  signIn,
  SendFollowRequest,
  unFollow,
  acceptFollowRequest,
} = require("./Handlers/users");

const { sendMessage } = require("./Handlers/messages");

const {
  NotifLikeData,
  getUserDetails,
  postUserPost,
  suppUserPost,
  commentOnPost,
  getUserPost,
} = require("./Handlers/data");

const { isAuth } = require("./Util/isAuth");

//BodyParser

app.use(bodyParser.json());
var port = process.env.PORT || 5000;

// API endpoints

app.post("/users/signUp", signUp);
app.post("/users/signIn", signIn);
app.post("/users/follow", SendFollowRequest);
app.post("/users/acceptFollowRequest", acceptFollowRequest); //en cours
app.post("/users/unFollow", unFollow); //en cours

app.post("/users/sendMessage", sendMessage);

app.get("/users/NotifLikeData", NotifLikeData);
app.get("/users/getUserDetails/:username", getUserDetails);
app.get("/users/getUserPost/:postId", getUserPost);
app.post("/users/postUserPost", postUserPost);
app.post("/users/commentOnPost/:postId", commentOnPost);
app.post("/users/suppUserPost", suppUserPost);

exports.app = functions.https.onRequest(app);
