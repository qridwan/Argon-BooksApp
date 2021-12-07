import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-rW8nG4LctSH5H1fNS0yOft2MkiYRnHc",
  authDomain: "rid1-test.firebaseapp.com",
  projectId: "rid1-test",
  storageBucket: "rid1-test.appspot.com",
  messagingSenderId: "520495035179",
  appId: "1:520495035179:web:e897d6af2fca845a1b0b6e",
  measurementId: "G-TYECBBMTQK",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
