import type { NextApiRequest, NextApiResponse } from "next";
import { CommonServerResponse } from "../../../types/api";
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
