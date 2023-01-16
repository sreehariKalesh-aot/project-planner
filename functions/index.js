const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.getCompletedProjects = functions.https.onCall((data, context) => {
 
    const userId = data.userId;
    return admin
      .firestore()
      .collection("projects")
      .where("user", "==", userId)
      .where("complete", "==", true)
      .get()
      .then((snapshot) => {
        let data = [];
        data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        return data;
      })
      .catch((err) => {
        throw new functions.https.HttpsError("unknown", err.message, err);
      });
});
