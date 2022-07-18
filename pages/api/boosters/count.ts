import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../db/models/models";
import { CommonServerResponse } from "../../../types/api";
import { decodeJwt } from "jose";
import { getUserFromHeader } from "../../../utils/cipher";

type ResponseData = CommonServerResponse & { boostersCount?: number };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const user = await getUserFromHeader(req, res);
  if (!user) return;

  const boostersCount = user.get("boostersCount") as number;
  res.status(200).json({ success: true, boostersCount });
}
