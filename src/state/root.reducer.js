import { combineReducers } from "redux";
import taskReducer from "./task.slice.js";


const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;