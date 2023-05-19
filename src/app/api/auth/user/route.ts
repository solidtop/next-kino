import { NextResponse } from "next/server";
import JWT from "jsonwebtoken";
import { User } from "@/types";
import { cookies } from "next/headers";

export async function GET() {
  const allCookies = cookies();
  const jwt = allCookies.get("u-session")?.value;

  const emptyResponse: User = {
    name: null,
    email: null,
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
