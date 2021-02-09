import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduserApi";

export default configureStore({
  reducer: {
    data: counterReducer,
  },
});
