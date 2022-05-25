import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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