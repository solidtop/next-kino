import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import JWT from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { BookingDetails, Screening } from "@/types";

export function getBookingSession(): string | undefined {
  return cookies().get("b-session")?.value;
}

export function loadBookingSession(session: string): BookingDetails {
  const key = process.env.BOOKING_KEY as string;
  const payload = JWT.verify(session, key);
  const bookingDetails: BookingDetails =
    typeof payload == "object" ? payload.bookingDetails : null;
  return bookingDetails;
}

export function saveBookingSession(
  data: BookingDetails,
  res: NextResponse
): void {
  const key = process.env.BOOKING_KEY as string;
  const jwt = JWT.sign({ bookingDetails: data }, key);
  res.cookies.set("b-session", jwt, {
    maxAge: 3600, // 1 hour
    httpOnly: true,
    sameSite: "strict",
  });
}

export function endBookingSession(res: NextResponse): void {
  res.cookies.delete("b-session");
}

export function errorResponse(message: string, code?: number) {
  return NextResponse.json(
    { error: { message, code } },
    { status: code || 400 }
  );
}

export function successResponse(message: string) {
  return NextResponse.json({ success: { message } });
}

/* Booking API responses */
export const RES_SCREENING_STARTED = {
  message: "Föreställningen har redan börjat",
  code: 401,
};
export const RES_SESSION_EXPIRED = {
  message: "Bokningsessionen har upphört att gälla",
  code: 401,
};
export const RES_INVALID_REQUEST = {
  message: "Ogiltig begäran",
  code: 400,
};

export function initBookingDetails(screening: Screening): BookingDetails {
  return {
    id: uuidv4(),
    screening,
    tickets: [
      {
        id: 0,
        type: "Ordinarie",
        price: 135,
        quantity: 0,
        maxQuantity: 10,
      },
      {
        id: 1,
        type: "Pensionär",
        price: 100,
        quantity: 0,
        maxQuantity: 10,
      },
      {
        id: 2,
        type: "Student",
        price: 100,
        quantity: 0,
        maxQuantity: 10,
      },
    ],
    seats: [],
    pricing: {
      amountTotal: 0,
    },
    email: null,
  };
}
