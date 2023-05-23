import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const jwt = cookies().get("u-session")?.value;

  const response = new NextResponse();

  if (!jwt) {
    return NextResponse.json({ error: "No user was found", status: 404 });
  }

  try {
    response.cookies.delete("u-session");

    return response;
  } catch (err) {
    console.log(err);
  }
}
