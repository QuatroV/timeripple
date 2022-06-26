import { CommonServerResponse } from "../../types/api";
import { api } from "./base";

type PostRegisterRequest = { nickname: string; password: string };
type PostRegisterResponse = CommonServerResponse & { token?: string };

export const postRegister = (
  data: PostRegisterRequest
): Promise<PostRegisterResponse> => api.post("/auth/register", data);
