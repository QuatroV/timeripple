import { CommonServerResponse } from "../../types/api";
import { api } from "./base";

type PostRegisterRequest = { nickname: string; password: string };
type PostRegisterResponse = CommonServerResponse & { token?: string };

export const postRegister = (
  data: PostRegisterRequest
): Promise<PostRegisterResponse> =>
  api.post("/auth/register", data).then((res) => res.data);

type PostSignInRequest = { nickname: string; password: string };
type PostSignInResponse = CommonServerResponse & { token?: string };

export const postSignIn = (
  data: PostSignInRequest
): Promise<PostSignInResponse> =>
  api.post("/auth/signIn", data).then((res) => res.data);

type GetIsSignInResponse = CommonServerResponse & { token?: string };

export const getIsSignIn = (): Promise<GetIsSignInResponse> =>
  api.get("/auth/isSignIn", {}).then((res) => res.data);
