import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,  GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4vLvW-pVeDUoBE-Ye5GVcNIDUExoCZQQ",
  authDomain: "clone-549a9.firebaseapp.com",
  projectId: "clone-549a9",
  storageBucket: "clone-549a9.appspot.com",
  messagingSenderId: "55889146488",
  appId: "1:55889146488:web:7eaad5a95d91b09c02738d",
  measurementId: "G-HK197RGXK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();