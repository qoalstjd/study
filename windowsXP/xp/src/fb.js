import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD789gxQwRJmyl_CttTIvpLifFBvuzyZng",
  authDomain: "windowsxp-79b22.firebaseapp.com",
  projectId: "windowsxp-79b22",
  storageBucket: "windowsxp-79b22.appspot.com",
  messagingSenderId: "526509473157",
  appId: "1:526509473157:web:f4a3dd3c753de863e3d8ec",
};

initializeApp(firebaseConfig);

export const authService = getAuth();
export const dbService = getFirestore();
