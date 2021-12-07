import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebaseConfig";

export const handleSignIn = (data) => {
  return signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      return error.message;
    });
};
