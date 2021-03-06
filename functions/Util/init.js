const firebase = require("firebase");
const config = require("./config");
firebase.initializeApp(config);
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
module.exports = { auth, provider };
