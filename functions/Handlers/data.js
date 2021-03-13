const { admin, db } = require("../Util/admin");
const { auth } = require("../../src/init");

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
          .where("recipient", "==", req.user.name)
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
            postId: doc.data().postId,
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
          .collection("userPosts")
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

exports.getUserPost = (req, res) => {
  let postData = {};
  db.doc(`/userPosts/${req.params.postId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "post not found" });
      }
      postData = doc.data();
      postData.postId = doc.id;
      return doc.ref.collection("comments").get();
    })
    .then((data) => {
      postData.comments = [];
      data.forEach((doc) => {
        postData.comments.push(doc.data());
      });
      return res.json(postData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

/*exports.getUserPosts = (req, res) => {
  let UserId = req.body.username;
  let userPosts = [];
  db.collection("userPosts")
    .where("username", "==", UserId)
    .get()
    .then((snapshot) => {
      if (snapshot.size > 0) {
        snapshot.forEach((doc) => {
          userPosts.push(doc.data());
        });
        return res.status(200).send(userPosts);
      } else {
        return res.status(200).json({ vide: "pas de posts" });
      }
    });
};*/

exports.postUserPost = (req, res) => {
  const newPost = {
    username: req.body.username,
    body: req.body.body,
    createdAt: new Date().toISOString(),
    likeCount: "0",
    commentCount: "0",
  };
  db.collection("userPosts")
    .add(newPost)
    .then((doc) => {
      newPost.postId = doc.id;
      res.status(200).send(newPost);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
};

exports.suppUserPost = (req, res) => {
  const postId = req.body.postId;
  db.collection("userPosts")
    .doc(postId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        doc.ref
          .delete()
          .then(() => {
            console.log("supprimé");
            res.status(200);
          })
          .catch((e) => {
            res.status(500);
          });
      } else {
        res.status(500).json({ erreur: "le post n'existe plus" });
      }
    })
    .catch((e) => {
      res.status(500).send(e);
    });
};

exports.commentOnPost = (req, res) => {
  const newComment = {
    body: req.body.body,
    creatAt: new Date().toISOString(),
    postId: req.params.postId,
    username: req.body.username,
    userImage: req.body.userImage,
  };
  console.log(newComment);

  db.doc(`/userPosts/${req.params.postId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "post inexistant" });
      }
      return doc.ref.update({ commentCount: doc.data().commentCount + 1 });
    })
    .then(() => {
      return db
        .doc(`/userPosts/${req.params.postId}`)
        .collection("comments")
        .add(newComment);
    })
    .then(() => {
      res.json(newComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
};

exports.likePostUser = (req, res) => {
  const newlike = db
    .collection("likesPostsUser")
    .where("username", "==", req.user.username)
    .where("postId", "==", req.params.postId)
    .limit(1);

  const post = db.doc(`/userPosts/${req.params.postId}`);

  let postData;

  post
    .get()
    .then((doc) => {
      if (doc.exists) {
        postData = doc.data();
        postData.postId = doc.id;
        return newLike.get();
      } else {
        return res.status(404).json({ error: "post not found" });
      }
    })
    .then((data) => {
      if (data.empty) {
        return db
          .collection("likesPostsUser")
          .add({
            postId: req.params.postId,
            username: req.user.name,
            creatAt: new Date().toISOString(),
          })
          .then(() => {
            postData.likeCount++;
            return post.update({ likeCount: postData.likeCount });
          })
          .then(() => {
            return res.json(postData);
          });
      } else {
        return res.status(400).json({ error: "post already liked" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};
