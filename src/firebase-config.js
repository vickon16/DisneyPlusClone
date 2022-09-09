import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwV4rrfN0mIZuyP0LCuW_JkMEo0apYQb8",
  authDomain: "disney-plus-clone-eacd2.firebaseapp.com",
  projectId: "disney-plus-clone-eacd2",
  storageBucket: "disney-plus-clone-eacd2.appspot.com",
  messagingSenderId: "385026014784",
  appId: "1:385026014784:web:fc5f42f40a047238e529a5",
  measurementId: "G-D98ZKMSTLN",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesCollection = collection(db, "movies");
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


