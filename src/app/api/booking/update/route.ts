import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import JWT from "jsonwebtoken";
import { BookingDetails, Ticket } from "@/types";
import { isValidBookingDetails } from "@/utils/validation";

export async function POST(req: NextRequest) {
  const cookieList = cookies();
  const session = cookieList.get("b-session")?.value;
  if (!session) {
    return NextResponse.json(
      { error: { message: "Session expired", code: 401 } },
      { status: 401 }
    );
  }

  const secretKey = process.env.SECRET_KEY as string;
  const payload = JWT.verify(session, secretKey);
  const bookingDetails: BookingDetails =
    typeof payload == "object" ? payload.bookingDetails : null;

  const body = await req.json();
  const isValid = isValidBookingDetails(body, bookingDetails);
  if (!isValid) {
    return NextResponse.json(bookingDetails, { status: 400 });
  }

  body.pricing.amountTotal = getAmountTotal(body.tickets);
  const res = NextResponse.json(body);
  const jwt = JWT.sign({ bookingDetails: body }, secretKey);
  res.cookies.set("b-session", jwt, {
    httpOnly: true,
  });

  return res;
}

function getAmountTotal(tickets: Ticket[]): number {
  return tickets.reduce((total, ticket) => {
    return total + ticket.price * ticket.quantity;
  }, 0);
}
