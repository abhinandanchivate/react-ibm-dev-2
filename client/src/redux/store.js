import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/redux/slice/authSlice.js"; // authSlice.reducer
import { listnerMiddleware } from "./middlewareListener.js";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefault) => getDefault().concat(listnerMiddleware.middleware), // add our middleware listener here.
});

export default store;
