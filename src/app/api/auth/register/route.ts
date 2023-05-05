import connectDb from "../../../../utils/connectDb";
import bcrypt from "bcryptjs";
import userModel from "../../../../models/user";
import generateToken from "../../../../utils/token";
import { NextRequest, NextResponse } from "next/server";

//Register a user

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const { name, email, password } = await req.json();

    let user = await userModel.findOne({ email });
    if (user) {
      return new NextResponse("User with that email already exists.", {
        status: 401,
      });
    }
    const salt = await bcrypt.genSalt(10);

    const harsedPassword = await bcrypt.hash(password, salt);

    user = new userModel({
      name,
      email,
      password: harsedPassword,
    });

    await user.save();

    let updatedUsser = {
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    };

    return NextResponse.json(updatedUsser);
  } catch (error) {
    console.error(error);
    return new NextResponse("An error occurred while processing the request.", {
      status: 500,
    });
  }
}
