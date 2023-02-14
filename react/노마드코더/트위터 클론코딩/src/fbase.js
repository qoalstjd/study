import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1JbXlkh9Mq1s7xO9qtWyOvhbZSucVrEc",
  authDomain: "twitter-4be02.firebaseapp.com",
  projectId: "twitter-4be02",
  storageBucket: "twitter-4be02.appspot.com",
  messagingSenderId: "744943563502",
  appId: "1:744943563502:web:040ea7c6eb861a887f79ff",
};

// const firebaseConfig = {
//   apiKey: process.env.AIzaSyC1JbXlkh9Mq1s7xO9qtWyOvhbZSucVrEc,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

initializeApp(firebaseConfig);

export const authService = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage();
