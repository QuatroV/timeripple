import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../db/models/models";
import { CommonServerResponse } from "../../../types/api";
import { decodeJwt } from "jose";

type ResponseData = CommonServerResponse & { boostersCount?: number };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(403)
      .json({ success: false, error: "No authentication header" });
  }
  const { nickname } = decodeJwt(authHeader);
  const user = await User.findOne({ where: { nickname } });
  if (!user) {
    return res.status(404).json({ success: false, error: "User not found" });
  }
  const boostersCount = user.get("boostersCount") as number;
  res.status(200).json({ success: true, boostersCount });
}
