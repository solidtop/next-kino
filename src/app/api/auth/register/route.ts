import connectDb from "../../../../utils/connectDb";
import bcrypt from "bcryptjs";
import userModel from "../../../../models/user";
import generateToken from "../../../../utils/token";
import { NextApiRequest, NextApiResponse } from "next";

//Register a user
async function registerUser(req: NextApiRequest, res: NextApiResponse) {
  await connectDb();
  try {
    const { name, email, password } = req.body;
    await connectDb();
    let user = await userModel.findOne({ email });
    if (user) {
      res.status(404).json({ message: "User already exists" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const harsedPassword = bcrypt.hash(password, salt);
      user = new userModel({
        name,
        email,
        password: harsedPassword,
      });

      await user.save();

      if (user) {
        res.json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await registerUser(req, res);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
