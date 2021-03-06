const { admin, db } = require("../Util/admin");
const { auth } = require("../Util/init");

exports.NotifLikeData = (req, res) => {
  let userData = {};
  db.doc(`/users/${req.user.username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.credentials = doc.data();
        return db
          .collection("likes")
          .where("username", "==", req.user.username)
          .get();
      }
    })
    /*.then((data) => {
        userData.likes = [];
        data.forEach((doc) => {
          userData.likes.push(doc.data());
        });
        return db
          .collection("notifications")
          .where("recipient", "==", req.user.handle)
          .orderBy("createdAt", "desc")
          .limit(10)
          .get();
      })
      .then((data) => {
        userData.notifications = [];
        data.forEach((doc) => {
          userData.notifications.push({
            recipient: doc.data().recipient,
            sender: doc.data().sender,
            createdAt: doc.data().createdAt,
            screamId: doc.data().screamId,
            type: doc.data().type,
            read: doc.data().read,
            notificationId: doc.id,
          });
        });
        return res.json(userData);
      })*/
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
exports.getUserDetails = (req, res) => {
  let userData = {};
  console.log(req.params.username);

  db.collection("Users")
    .doc(req.params.username)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.user = {
          uid: doc.data().uid,
          email: doc.data().email,
          firstname: doc.data().FirstName,
          lastname: doc.data().LastName,
          username: doc.data().username,
          creatdAt: doc.data().creatAt,
        };
        return db
          .collection("posts")
          .where("username", "==", req.params.username)
          .orderBy("createdAt")
          .get()
          .then((data) => {
            userData.posts = [];
            data.forEach((doc) => {
              userData.posts.push({
                body: doc.data().body,
                createdAt: doc.data().createdAt,
                username: doc.data().username,
                //userImage: doc.data().userImage,
                likeCount: doc.data().likeCount,
                commentCount: doc.data().commentCount,
                postId: doc.id,
              });
            });
            return res.json(userData);
          });
      } else {
        return res.status(404).json({ errror: "User not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
