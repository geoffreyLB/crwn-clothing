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

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
