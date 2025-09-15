import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/redux/slice/authSlice.js"; // authSlice.reducer
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
