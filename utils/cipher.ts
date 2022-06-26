import jwt from "jsonwebtoken";

export const generateJwt = (nickname: string) => {
  return jwt.sign({ nickname }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};
