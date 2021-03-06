const admin = require("firebase-admin");
var serviceAccount = require("../permission.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://studup-dc5db-default-rtdb.europe-west1.firebasedatabase.app",
});

const db = admin.firestore();

module.exports = { admin, db };
