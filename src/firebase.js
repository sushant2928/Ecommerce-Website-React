// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEm1fhtsp3q0CkhYSieRwrWErEuw7iPhk",
  authDomain: "e-commerce-website-react-306a3.firebaseapp.com",
  projectId: "e-commerce-website-react-306a3",
  storageBucket: "e-commerce-website-react-306a3.appspot.com",
  messagingSenderId: "1089818033326",
  appId: "1:1089818033326:web:2a06cae83b415ee85b013f",
  measurementId: "G-177BQS96X7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const logOutAll = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      return true;
    })
    .catch((error) => {
      // An error happened.
      alert(error.message);
    });
};
export const emailPasswordSignUp = (
  userName,
  email,
  password,
  setbuttonsDisabled
) => {
  let userToReturn;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      //   updateProfile(auth.currentUser, {
      updateProfile(auth.currentUser, {
        displayName: userName,
      }).then(() => {
        // Profile updated!
        // ...
        console.log(auth.currentUser);
        setbuttonsDisabled(false);

        userToReturn = auth.currentUser;
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      setbuttonsDisabled(false);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      setbuttonsDisabled(false);

      // ..
    });
  return userToReturn;
};
export const emailPasswordSignIn = (
  email = "a1@gmail.com",
  password = "111111",
  setbuttonsDisabled
) => {
  let userToReturn;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("FIREBASEUSER", user);
      setbuttonsDisabled(false);
      userToReturn = user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      setbuttonsDisabled(false);
    });
  return userToReturn;
};
