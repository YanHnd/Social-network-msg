const { provider, auth } = require("../Util/init");
const { admin, db } = require("../Util/admin");

provider.setCustomParameters({
  display: "popup",
});

export const signInFacebook = (history, setAuthorizationHeader) => {
  return auth.signInWithPopup(provider).then((result) => {
    var user = result.user;
    var accessToken = credential.accessToken;
    const name = user.displayName.split("");
    const username = name[0].concat(name[1]);
    db.collection("Users")
      .doc(user.email)
      .get()
      .then((snapshot) => {
        const newuser = {
          userId: user.uid,
          email: user.email,
          firestname: name[0],
          lastname: name[1],
          username: username,
          createdAt: new Date().toISOString(),
          imageUrl: null,
          bio: null,
          website: null,
          location: user.hometown,
        };
        if (snapshot.exists) {
          db.collection("Users").update(newuser);
        } else {
          db.collection("Users").doc(username).set(newuser);
        }
      })
      .then(() => {
        return accessToken;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        return error;
      });
  });
};
