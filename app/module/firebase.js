
import admin from "firebase-admin";

// Check if the app has already been initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(require("./User.json")),
  });
  console.log("Firebase Admin SDK initialized");
}else {
    console.log("Firebase Admin SDK already initialized");
  }

export const firestore = admin.firestore();

