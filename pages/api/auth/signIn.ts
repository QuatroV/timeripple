import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../db/models/models";
import { CommonServerResponse } from "../../../types/api";
import { generateJwt } from "../../../utils/cipher";

type ResponseData = CommonServerResponse & { token?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const {
    body: { nickname, password },
  } = req;
  const userCandidate = await User.findOne({ where: { nickname } });
  if (userCandidate) {
    const token = generateJwt(nickname);
    const passwordMatch = userCandidate.getDataValue("password") === password;
    if (passwordMatch) {
      res.status(200).json({ success: true, token });
    } else {
      res.status(400).json({
        success: false,
        error: "Wrong password",
      });
    }
  } else {
    res.status(400).json({
      success: false,
      error: "User with such nickname was not found",
    });
  }
}
