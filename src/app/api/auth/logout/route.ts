import { NextRequest, NextResponse } from "next/server";
import JWT from "jsonwebtoken";
import { User } from "@/types";
import { cookies } from "next/headers";

export async function GET(res: NextRequest) {
  const jwt = res.cookies.get("u-session")?.value;

  const response = new NextResponse();

  if (!jwt) {
    return null;
  }

  try {
    response.cookies.delete("u-session");
    return response;
  } catch (err) {
    console.log(err);
  }
}
