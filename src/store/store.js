import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducers";

export default configureStore({
  reducer: rootReducer,
});
