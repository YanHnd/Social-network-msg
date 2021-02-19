var serviceAccount = require("./permission.json");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://studup-dc5db-default-rtdb.europe-west1.firebasedatabase.app"
});
//initialisationd e la bd 

const db = admin.firestore();

//endpoint
app.use(cors({ origin: true }));

app.get('/', (req, res) => {
  return res.status(200).send('yes');
});

// deuxieme endpoint par exemple

app.post('/api/post', (req, res) => {
    (async () => {
        try {
          await db.collection('posts').doc('/' + req.body.id + '/')
              .create({user: req.body.item});
          return res.status(200).send();
        } catch (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      })();
  });

exports.app = functions.https.onRequest(app);