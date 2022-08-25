// import { createContext, useState, useEffect, useReducer } from "react";

// import { createAction } from "../utils/reducer/reduce.utils";

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from "../utils/firebase/firebase.utils";

// //as the actual value you want to access
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "SET_CURRENT_USER",
// };

// const userReducer = (state, action) => {
//   console.log("dispatched");
//   console.log(action);
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };

//     default:
//       throw new Error(`Unhandled type ${type} in userReducer`);
//   }
// };

// const INITIAL_STATE = {
//   currentUser: null,
// };

// export const UserProvider = ({ children }) => {
//   //this was previous way to do it without reducer
//   // const [currentUser, setCurrentUser] = useState(null);

//   // const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
//   // const { currentUser } = state;

//   //or we can just do this destructure the state
//   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
//   console.log(currentUser);

//   const setCurrentUser = (user) => {
//     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//   };

//   const value = { currentUser, setCurrentUser };

//   useEffect(() => {
//     const unsubscripeUser = async () => {
//       await onAuthStateChangedListener((user) => {
//         if (user) {
//           createUserDocumentFromAuth(user);
//         }
//         setCurrentUser(user);
//       });
//     };
//     return unsubscripeUser;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
