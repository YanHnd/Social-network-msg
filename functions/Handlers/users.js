const { admin, db } = require("../Util/admin");
const { auth } = require("../../src/init");
const firebase = require("firebase");
require("firebase/firestore");

exports.signUp = (req, res) => {
  let signUpinfo = {
    firstname: req.body.username,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };
  console.log(signUpinfo.email);

  db.collection("Users")
    .doc(signUpinfo.username)
    .get()
    .then((user) => {
      if (user.exists) {
        return res.status(500).json({ general: "username already taken" });
      } else {
        return auth
          .createUserWithEmailAndPassword(signUpinfo.email, signUpinfo.password)
          .then((data) => {
            let userId = data.user.uid;
            let newUser = {
              FirstName: signUpinfo.firstname,
              LastName: signUpinfo.lastname,
              creatAt: new Date().toISOString(),
              Email: signUpinfo.email,
              Password: signUpinfo.password,
              isonline: false,
              uid: userId,
              username: signUpinfo.username,
            };
            db.collection("Users").doc(signUpinfo.username).set(newUser);
            return res
              .status(200)
              .json({ utilisateur: "profile crée avec succés" });
          })
          .catch((e) => {
            console.error(e);
            res.status(500).send(e);
          });
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ error: "error while fetching" });
    });
};

exports.signIn = (req, res) => {
  const userInfo = {
    email: req.body.email,
    password: req.body.password,
  };
  console.log(userInfo);

  auth
    .signInWithEmailAndPassword(userInfo.email, userInfo.password)
    .then((data) => {
      let currentToken = data.user.getIdToken();
      return currentToken;
    })
    .then((Token) => {
      const idToken = Token;
      console.log(idToken);
      return res.status(200).send(idToken);
    })
    .catch((e) => {
      console.error(e);
      return res.status(500).json({ general: "wrong password or email" });
    });
};

exports.SendFollowRequest = (req, res) => {
  let FollowRequest = {
    Owner: req.body.Owner,
    AccountName: req.body.AccountName,
    status: "pending",
    date: new Date().toISOString(),
  };
  db.collection("followRequest")
    .where("Owner", "==", FollowRequest.Owner)
    .get()
    .then((doc) => {
      if (doc.size > 0) {
        res.status(501).json({ error: "rquest already sent" });
      } else {
        db.collection("followRequest")
          .add(FollowRequest)
          .then((doc) => {
            console.log(doc.id);
            return res.status(200).json({ success: " following request sent" });
          })
          .catch((e) => {
            console.error(e);
            return res.status(500).json({ error: "something went wrong" });
          });
      }
    })
    .catch((e) => {
      console.error(e);
      return res.status(500).json({ error: "something went wrong" });
    });
};

exports.acceptFollowRequest = (req, res) => {
  const request = {
    requestId: req.body.requestId,
    Owner: req.body.Owner,
    AccountName: req.body.AccountName,
  };
  db.collection("followRequest")
    .doc(request.requestId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        db.collection("followRequest")
          .doc(request.requestId)
          .delete()
          .then(() => {
            console.log("yessyess");
            db.collection("follows").add({
              follow: request.Owner,
              followed: request.AccountName,
              dateFollow: new Date().toISOString(),
            });
            res.status(200).json({ accepted: "invitation accepted " });
          })
          .catch((e) => {
            res.status(500).json({ error: "something wrong" });
          });
      } else {
        res.status(501).json({ error: "request doesnt exist" });
      }
    })
    .catch((e) => {
      res.status(500).json({ error: "something wrong 1" });
    });
};

exports.unFollow = (req, res) => {
  let follower = req.body.follower;
  let following = req.body.following;

  db.collection("follows")
    .where("follow", "==", follow)
    .where("followed", "in", [followed, followed])
    .get()
    .then((doc) => {
      doc.forEach((element) => {
        element.ref.delete();
      });
      return res.status(200).json({ sucess: "unfollowed succesfuly" });
    })
    .catch((e) => {
      return res.status(500).json({ error: "something wrong happened" });
    });
};
