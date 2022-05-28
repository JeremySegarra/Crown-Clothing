// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // useEffect(() => {
  //   async function getResults() {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);

  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   getResults();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
