import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAI-o8RGRE9H2-U_zhRksZZP-x7oKyb5vQ",
  authDomain: "monget-c1663.firebaseapp.com",
  databaseURL: "https://monget-c1663.firebaseio.com",
  projectId: "monget-c1663",
  storageBucket: "monget-c1663.appspot.com",
  messagingSenderId: "895070246342",
  appId: "1:895070246342:web:f55448fc63a11f1849cec7",
  measurementId: "G-0VG2E9XT62",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error("Error creating user", err);
    }
  }

  return userRef;
};

export default firebase;
