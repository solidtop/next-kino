import connectDb from "../../../../utils/connectDb";
import bcrypt from "bcryptjs";
import userModel from "../../../../models/user";
import generateToken from "../../../../utils/token";
import { NextRequest, NextResponse } from "next/server";

//login a user
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    connectDb();
    const { email, password } = await req.json();
    let user = await userModel.findOne({ email });
    if (!user) {
      return new NextResponse("User not found.", {
        status: 401,
      });
    }

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new NextResponse("Invalid User Credentials", {
        status: 401,
      });
    }
    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("An error occurred while processing the request.", {
      status: 500,
    });
  }
}
