const { admin, db } = require("./admin");

module.exports = (req, res, next) => {
  let idToken;
  if (req.headers.auth) {
    idToken = req.headers.auth;
  } else {
    return res.status(500).json({ general: "no auth token found" });
  }
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((data) => {
      req.user = data;

      return db
        .collection("Users")
        .where("uid", "==", req.user.uid)
        .limit(1)
        .get();
    })
    .then((user) => {
      req.user.username = user.docs[0].data().username;
      return next();
    })
    .catch((e) => {
      res.status(500).json({ general: "erreur" });
    });
};
