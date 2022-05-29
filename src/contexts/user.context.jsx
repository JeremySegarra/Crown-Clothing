import { async } from "@firebase/util";
import { logDOM } from "@testing-library/react";
import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscripeUser = async () => {
      await onAuthStateChangedListener((user) => {
        console.log("user", user);
      });
    };
    return unsubscripeUser;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
