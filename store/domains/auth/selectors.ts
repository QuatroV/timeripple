import { RootState } from "../..";

export const authSelector = (state: RootState) => state.auth;

export const isUserAuthSelector = (state: RootState) =>
  authSelector(state).nickname;
