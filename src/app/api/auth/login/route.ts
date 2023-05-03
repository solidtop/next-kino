import connectDb from "../../../../utils/connectDb";
import bcrypt from "bcryptjs";
import userModel from "../../../../models/user.js";
import generateToken from "../../../../utils/token.js";
import { NextApiRequest, NextApiResponse } from "next";

//login a user
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await connectDb();
      const { email, password } = req.body;
      let user = await userModel.findOne({ email });
      if (!user) {
        res.status(404).json({ message: "User not found." });
        return;
      }

      let isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(401).json({ msg: "Invalid user credentials" });
        return;
      }
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } catch (error) {
      console.log(error);
    }
  }
}
