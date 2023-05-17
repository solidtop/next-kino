import { NextRequest, NextResponse } from "next/server";
import JWT from "jsonwebtoken";
import { User } from "@/types";

export async function GET(res: NextRequest) {
  const jwt = res.cookies.get("u-session")?.value;

  const emptyResponse: User = {
    name: "",
    email: "",
  };

  if (!jwt) {
    return NextResponse.json(emptyResponse);
  }

  try {
    const payload = JWT.verify(jwt, process.env.JWT_SECRET as string);
    const userInfo = typeof payload == "object" ? payload.sessionObject : null;

    const response: User = {
      name: userInfo.name,
      email: userInfo.email,
    };

    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
  }
}
