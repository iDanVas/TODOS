import { combineReducers } from "redux";
import tasks from "./task.slice.js";

const rootReducer = combineReducers({
  tasks
});

export default rootReducer;