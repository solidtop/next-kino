import { NextRequest, NextResponse } from "next/server";
import JWT from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import * as api from "@/utils/api";
import { BookingDetails, Screening } from "@/types";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { screeningId = null } = body;

  const secretKey = process.env.SECRET_KEY as string;
  const session = req.cookies.get("b-session")?.value;
  if (session) {
    const payload = JWT.verify(session, secretKey);
    const bookingDetails =
      typeof payload === "object" ? payload.bookingDetails : null;

    if (bookingDetails.screening.id == screeningId) {
      return NextResponse.json(bookingDetails);
    }
  }

  const screening = await api.getScreening(screeningId);
  const bookingId = uuidv4();
  const bookingDetails = initBooking(bookingId, screening);
  const res = NextResponse.json(bookingDetails);
  const jwt = JWT.sign({ bookingDetails }, secretKey);
  res.cookies.set("b-session", jwt, {
    httpOnly: true,
  });

  return res;
}

function initBooking(bookingId: string, screening: Screening): BookingDetails {
  return {
    id: bookingId,
    screening,
    tickets: [
      {
        id: 0,
        type: "Ordinarie",
        price: 135,
        quantity: 0,
        maxQuantity: 5,
      },
      {
        id: 1,
        type: "Pensionär",
        price: 100,
        quantity: 0,
        maxQuantity: 5,
      },
      {
        id: 2,
        type: "Student",
        price: 100,
        quantity: 0,
        maxQuantity: 5,
      },
    ],
    seats: [],
    pricing: {
      amountTotal: 0,
    },
    email: null,
  };
}
