import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebaseConfig";

export const handleSignUp = (data) => {
  return createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      return error.message;
    });
};
