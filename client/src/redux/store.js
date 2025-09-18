import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/redux/slice/authSlice.js"; // authSlice.reducer
import { listnerMiddleware } from "./middlewareListener.js";
import profileReducer from "../profile/redux/reducers/profileSlice.js";
const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
  middleware: (getDefault) => getDefault().concat(listnerMiddleware.middleware), // add our middleware listener here.
});

export default store;
