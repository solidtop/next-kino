import { NextResponse } from "next/server";
import { User } from "@/types";
import { cookies } from "next/headers";

export async function GET() {
  const jwt = cookies().get("u-session")?.value;

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
