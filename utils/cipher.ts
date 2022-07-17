import { decodeJwt } from "jose";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../db/models/models";

export const generateJwt = (nickname: string) => {
  return jwt.sign({ nickname }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

export const getUserFromHeader = async(
  req: NextApiRequest,
  res: NextApiResponse
) => {
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
  return user;
};
