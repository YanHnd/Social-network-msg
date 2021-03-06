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
  followUser,
  unFollow,
  getfollowingUsers,
} = require("./Handlers/users");
const { NotifLikeData, getUserDetails } = require("./Handlers/data");

const { isAuth } = require("./Util/isAuth");

//BodyParser

app.use(bodyParser.json());
var port = process.env.PORT || 5000;

// API endpoints

app.post("/users/signUp", signUp);
app.post("/users/signIn", signIn);
app.post("/users/followUser", followUser); //en cours
app.post("/users/unFollow", unFollow); //en cours
app.post("/users/getFollowingUsers", getfollowingUsers); //en cours
app.get("/users/NotifLikeData", NotifLikeData);
app.get("/users/getUserDetails/:username", getUserDetails);

exports.app = functions.https.onRequest(app);
