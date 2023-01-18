import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./root.reducer";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  next(action);
  console.log("next state", store.getState());
};

// const saveToLocalStorage = (store) => (next) => (action) => {
//   next(action);
//   window.localStorage.setItem("myAppState", JSON.stringify(store.getState()));
// };

const store = configureStore({
  reducer: rootReducer,
  // middleware: [logger, thunk] // --> set ALL of the middleware functions yourself
  middleware: [...getDefaultMiddleware(), logger] // --> add middleware functions to the default ones
});
export default store;