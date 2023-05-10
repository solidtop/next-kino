import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

export default function generateToken(id: string) {
  return jwt.sign({ id }, secret, {
    expiresIn: "30d",
  });
}
