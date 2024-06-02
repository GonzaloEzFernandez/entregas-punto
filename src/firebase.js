import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
});

export const db = getFirestore();
