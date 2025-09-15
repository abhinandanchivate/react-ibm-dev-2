// state : data declaration.==> store.

import { createSlice } from "@reduxjs/toolkit";

const authState = {
  isAuthenticated: false,
  loading: true,
  user: null,
  token: localStorage.getItem("token"),
};
const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {}, // it will hold only synchronous stuff
  extraReducers: (builder) => {
    builder // register : one of the case.

      .addCase() // pending
      .addCase() // success

      .addCase(); // failure
  },
  //   extraReducers: {
  //     // we will include register
  //   }, // it will hold async stuff like thunk actions rest calls. // register
});
export default authSlice.reducer;
// createSlice:
// name, initialState, reducers
// why slice : to create action and reducer at one place
// 1. simplifies the redux setup: less boilerplate code(no separte action types, reducer + constants)
// 2. auto generates actions : no need to manually create the action creators.
// 3. keeps features isolated : each slice manages its own state and logic.
