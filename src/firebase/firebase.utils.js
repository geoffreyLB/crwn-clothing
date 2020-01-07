import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC06UXCX0ngRkHRLb5cpL0e0EXY_tidYgo",
  authDomain: "crwn-db-53839.firebaseapp.com",
  databaseURL: "https://crwn-db-53839.firebaseio.com",
  projectId: "crwn-db-53839",
  storageBucket: "crwn-db-53839.appspot.com",
  messagingSenderId: "355522979948",
  appId: "1:355522979948:web:1efc8df82829d2cc7c1049"
};

firebase.initializeApp(config);

// Enregistrer sur Firebase les données utilisateurs via Google Auth
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
