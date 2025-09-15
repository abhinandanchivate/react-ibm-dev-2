import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../../services/auth.service";

export const registerUserAction = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await registerUser(formData);
      return data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
); // rest call
// payload creator : the response data from the api call/ rest call.
