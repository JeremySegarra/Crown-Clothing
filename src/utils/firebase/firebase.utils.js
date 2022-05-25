import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp_bxOoj2sAs3G2E8otD2NzYiKALEvrXw",
  authDomain: "crown-clothing-db-ee812.firebaseapp.com",
  projectId: "crown-clothing-db-ee812",
  storageBucket: "crown-clothing-db-ee812.appspot.com",
  messagingSenderId: "931500822273",
  appId: "1:931500822273:web:f3567c476937992fba1500",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  //inside of this database, under the users collection, with this userAuths uid
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if user data does not exists

  //create / set the document with the dats from userAuth in my collection

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;

  //if user data does exists

  //return userDocRef
};
