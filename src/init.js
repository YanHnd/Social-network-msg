const firebase = require("firebase");
const config = {
  apiKey: "AIzaSyAfVUAUGe0KuOV6xQA9ymyALyA8eAnfX5s",
  authDomain: "studup-dc5db.firebaseapp.com",
  databaseURL:
    "https://studup-dc5db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "studup-dc5db",
  storageBucket: "studup-dc5db.appspot.com",
  messagingSenderId: "143387807472",
  appId: "1:143387807472:web:3f94f45e6e6c3105863c35",
  measurementId: "G-WLEWDZX87J",
};
const fire = firebase.default.initializeApp(config);
const auth = firebase.default.auth();

module.exports = { fire, auth };
