import { createSlice } from "@reduxjs/toolkit";
import {
  createOrUpdateProfileAction,
  getCurrentProfileAction,
} from "../action/profileAction";

const initialState = {
  profile: null,
  profiles: [], // to hold multiple profiles / all profiles
  loading: false,
  error: null,
  status: "empty", // empty , success, failure,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrUpdateProfileAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "loading";
      })
      .addCase(createOrUpdateProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.data;
        state.status = "success";
        state.error = null;
      })
      .addCase(createOrUpdateProfileAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        state.status = "failure";
      });
    builder
      .addCase(getCurrentProfileAction.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCurrentProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "empty";
        state.profile = action.payload.data;
      })
      .addCase(getCurrentProfileAction.rejected, (state, action) => {
        // we will come across two sitauations
        // there is a failure in my profile rest call
        // there is no profile for the current user.

        if (action.payload?.notFound) {
          state.profile = null;
          state.status = "empty";
          state.error = null;
          state.loading = false;
        } else {
          state.loading = false;
          state.status = "failure";
          state.error = action.payload || action.error.message;
        }
      });
  },
});
export default profileSlice.reducer;
