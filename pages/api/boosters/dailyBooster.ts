import type { NextApiRequest, NextApiResponse } from "next";
import { CommonServerResponse } from "../../../types/api";
import { getUserFromHeader } from "../../../utils/cipher";

type ResponseData = CommonServerResponse & { boostersCount?: number };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const user = await getUserFromHeader(req, res);
  if (!user) return;

  const newBoostersCount = (user.get("boostersCount") as number) + 1;
  await user.update({ boostersCount: newBoostersCount });
  res.status(200).json({ success: true, boostersCount: newBoostersCount });
}
