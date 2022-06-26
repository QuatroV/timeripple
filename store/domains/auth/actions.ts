import { createAction } from "@reduxjs/toolkit";

export const commitRegisterCredentials = createAction<{
  nickname: string;
  password: string;
}>("commitRegisterCredentials");
