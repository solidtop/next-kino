import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

export default function generateToken(sessionObject: object) {
  return jwt.sign({ sessionObject }, secret, {
    expiresIn: "30d",
  });
}
