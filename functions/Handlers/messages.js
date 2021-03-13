const { admin, db } = require("../Util/admin");

exports.sendMessage = (req, res) => {
  const conv1 = [req.body.accountName2, req.body.accountName1].join(" ");
  const conv2 = [req.body.accountName1, req.body.accountName2].join(" ");
  const message = req.body.message;

  db.collection("Conversations")
    .where("convId", "in", [conv1, conv2])
    .limit(1)
    .get()
    .then((snapshot) => {
      let docId = "";
      if (snapshot.size > 0) {
        snapshot.forEach((doc) => {
          docId = doc.id;
        });
        db.collection("Conversations")
          .doc(docId)
          .collection("messages")
          .add({
            sourceName: req.body.accountName1,
            creatAt: new Date().toISOString(),
            body: message,
          })
          .then(() => {
            db.collection("Conversations")
              .doc(docId)
              .update({
                LastMsg: {
                  sourceName: req.body.accountName1,
                  creatAt: new Date().toISOString(),
                  body: message,
                },
                LastUpdate: new Date().toISOString(),
              });
            res.status(200).json({ success: " message envoyé" });
          });
      } else {
        const ConvInfo = {
          convId: conv1,
          Users: [req.body.accountName1, req.body.accountName2],
          LastMsg: {
            sourceName: req.body.accountName1,
            creatAt: new Date().toISOString(),
            body: message,
          },
          creatAt: new Date().toDateString(),
          LastUpdate: new Date().toISOString(),
        };

        db.collection("Conversations")
          .doc(conv1)
          .set(ConvInfo)
          .then(() => {
            db.collection("Conversations")
              .doc(conv1)
              .collection("messages")
              .add({
                sourceName: req.body.accountName1,
                creatAt: new Date().toISOString(),
                body: message,
              })
              .then(() => {
                res.status(200).json({ success: " message envoyé" });
              });
          })
          .catch((e) => {
            res.status(500).send("something wrong");
          });
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

exports.getConversations = (req, res) => {
  let conversations = [];
  db.collection("Conversations")
    .where("Users", "array-contains", req.body.username)
    .get()
    .then((snap) => {
      if (snap.size > 0) {
        snap.forEach((doc) => {
          conversations.push(doc.data());
        });
        return res.status(200).send(conversations);
      } else {
        return res.status(201).json({ general: "pas de conversations" });
      }
    })
    .catch((e) => {
      res.status(500).send(e);
    });
};
