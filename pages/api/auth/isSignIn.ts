import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../db/models/models";
import { CommonServerResponse } from "../../../types/api";
import { generateJwt } from "../../../utils/cipher";
import jwtDecode from "jwt-decode";

type ResponseData = CommonServerResponse & { token?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log(
    req.preview,
    req.headers.authorization && jwtDecode(req.headers.authorization)
  );
  res.status(200).json({ success: true });
}
