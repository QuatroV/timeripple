// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../db/models/models";
import { CommonServerResponse } from "../../../types/api";
import { generateJwt } from "../../../utils/cipher";

type ResponseData = CommonServerResponse & { token: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const {
    body: { nickname, password },
  } = req;
  const userCandidate = await User.findOne({ where: { nickname } });
  if (userCandidate) {
    res.status(400).json({
      success: false,
      error: "User with such nickname already exists",
    });
  } else {
    User.create({ nickname, password });
    const token = generateJwt(nickname);
    res.status(200).json({ success: true, token });
  }
}
