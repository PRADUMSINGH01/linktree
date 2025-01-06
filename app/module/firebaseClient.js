// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4bjbjnc1gGddQT8lBH9sNS3NWd2dec7k",
  authDomain: "linktree-7edce.firebaseapp.com",
  projectId: "linktree-7edce",
  storageBucket: "linktree-7edce.firebasestorage.app",
  messagingSenderId: "385502362389",
  appId: "1:385502362389:web:ea9ae5d108d9e00bf9471c",
  measurementId: "G-Y43L2LYKG0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
