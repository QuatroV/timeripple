import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../..";

// Define a type for the slice state
interface AuthState {
  nickname: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  nickname: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
