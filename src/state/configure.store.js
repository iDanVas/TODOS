import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./root.reducer";
import { syncServer } from "../middleware/sync.todos.toserver";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  next(action);
  // console.log("next state", store.getState());
  const test = store.getState();
  // console.log("test state", test.tasks.items);
};

// const saveToLocalStorage = (store) => (next) => (action) => {
//   next(action);
//   window.localStorage.setItem("myAppState", JSON.stringify(store.getState()));
// };

const store = configureStore({
  reducer: rootReducer,//check it!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // middleware: [logger, thunk] // --> set ALL of the middleware functions yourself
  middleware: [...getDefaultMiddleware(), logger ,syncServer ] // --> add middleware functions to the default ones
});
export default store;