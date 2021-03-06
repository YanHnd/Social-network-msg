const firebase = require("firebase");
const config = require("./config");
const fire = firebase.initializeApp(config);
const auth = firebase.auth();

module.exports = { auth };
