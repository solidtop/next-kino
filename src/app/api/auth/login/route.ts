import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import userModel from "@/models/user";
import generateToken from "@/utils/token";

//login a user
export async function POST(req: NextRequest) {
  try {
    connectDb();
    const { email, password } = await req.json();

    const response = new NextResponse();
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

    const sessionData = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    const jwt = generateToken(sessionData);

    response.cookies.set("u-session", jwt);

    return response;
  } catch (error) {
    console.log(error);
    return new NextResponse("An error occurred while processing the request.", {
      status: 500,
    });
  }
}
