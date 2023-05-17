import { NextRequest, NextResponse } from "next/server";
import { User } from "@/types";

export async function GET(res: NextRequest) {
  const jwt = res.cookies.get("u-session")?.value;

  const response = new NextResponse();

  const emptyResponse: User = {
    name: null,
    email: null,
  };

  if (!jwt) {
    return NextResponse.json(emptyResponse);
  }

  try {
    response.cookies.delete("u-session");

    return response;
  } catch (err) {
    console.log(err);
  }
}
