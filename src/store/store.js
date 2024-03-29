import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

//root reducer combination of all our reducers
//the logger allows us to see what the stare looks like before an action is dispatched,
//what the action is, and how the state looks after the action

//middlewares are like little library helpers that run before an action hits the reducer,
//so whenever you dispatch an action before it hits the reducers it hits the middleware first

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("currentState", store.getState());

  next(action);

  console.log("next state:", store.getState());
};

const middleWares = [loggerMiddleware];

//this will pass multiple middlewares by spreading them we ony have 1 now
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
