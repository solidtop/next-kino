import connectDb from "../../../../utils/connectDb";
import bcrypt from "bcryptjs";
import userModel from "../../../../models/user";
import generateToken from "../../../../utils/token";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import bodyParser from "body-parser";

//Register a user

async function registerUser(req: NextRequest, res: NextResponse) {
  await connectDb();

  try {
    const body = req.json();

    const { name, email, password } = body;
    console.log("password", password, name, email);
    let user = await userModel.findOne({ email });
    if (user) {
      res.status(404).json({ message: "User already exists" });
    } else {
      const salt = await bcrypt.genSalt(10);
      console.log("salt", salt);
      const harsedPassword = await bcrypt.hash(password, salt);
      console.log("hash", harsedPassword);

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
