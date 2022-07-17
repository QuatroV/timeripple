import { createSlice, createAction } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../..";

interface AuthState {
  nickname: string;
}

const initialState: AuthState = {
  nickname: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (
      state,
      action: PayloadAction<{ nickname: string; token: string }>
    ) => {
      state.nickname = action.payload.nickname;
    },
    signOut: (state) => {
      state.nickname = initialState.nickname;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export const commitRegisterCredentials = createAction<{
  nickname: string;
  password: string;
}>("commitRegisterCredentials");

export const commitSignInCredentials = createAction<{
  nickname: string;
  password: string;
}>("commitSignInCredentials");

export default authSlice.reducer;
