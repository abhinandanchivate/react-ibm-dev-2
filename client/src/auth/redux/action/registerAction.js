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
// rest calls ==> async calls => javascript promises
// 1. pending, : warm up stage initial stage
// 2. fulfilled, : success stage
// 3. rejected : failure stage
// your action will create 3 different action types for each stage.
// action types : auth/registerUser/pending
// action types : auth/registerUser/fulfilled
// action types : auth/registerUser/rejected

// after successful registration redirect it to dashboard

// 1. we should use useeffect ==> inside the component.
// 2. we should use useNavigate ==> to redirect the user to the dashboard but decimsion should be taken inside the registerAction
