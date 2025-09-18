import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createOrUpdateProfile,
  getCurrentProfile,
} from "../../services/profile.service";

export const getCurrentProfileAction = createAsyncThunk(
  "profile/getCurrentProfile",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCurrentProfile();
      return data;
    } catch (err) {
      // Normalize: treat 400 as "no profile yet"
      const status = err?.status || err?.response?.status;
      if (status === 400) return rejectWithValue({ notFound: true });

      return rejectWithValue(
        err?.data || { message: "Failed to load profile" }
      );
    }
  }
);

export const createOrUpdateProfileAction = createAsyncThunk(
  "profile/createOrUpdateProfile",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await createOrUpdateProfile(formData);
      return data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);
// createOrUpdateProfileAction
// 1. pending
// 2. fulfilled
// 3. rejected
