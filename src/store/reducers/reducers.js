import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
