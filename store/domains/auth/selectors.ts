import { RootState } from "../..";

export const authSelector = (state: RootState) => state.auth;

export const nicknameSelector = (state: RootState) =>
  authSelector(state).nickname;
