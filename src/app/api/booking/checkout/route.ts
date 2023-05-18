import { NextRequest, NextResponse } from "next/server";
import { BookingDetails } from "@/types";
import {
  isValidBookingDetails,
  isValidEmail,
  screeningHasStarted,
  getTicketsQuantity,
} from "@/utils/validation";
import {
  RES_INVALID_REQUEST,
  RES_SCREENING_STARTED,
  RES_SESSION_EXPIRED,
  errorResponse,
  getBookingSession,
  loadBookingSession,
  saveBookingSession,
  successResponse,
} from "@/utils/bookingSession";
import JWT from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const session = getBookingSession();
  if (!session) {
    return errorResponse(RES_SESSION_EXPIRED.message, RES_SESSION_EXPIRED.code);
  }

  const bookingDetails = loadBookingSession(session);
  if (screeningHasStarted(bookingDetails.screening)) {
    return errorResponse(
      RES_SCREENING_STARTED.message,
      RES_SCREENING_STARTED.code
    );
  }

  const body: BookingDetails = await req.json();
  if (!isValidBookingDetails(body, bookingDetails)) {
    return errorResponse(RES_INVALID_REQUEST.message, RES_INVALID_REQUEST.code);
  }

  if (!body.tickets.some((ticket) => ticket.quantity > 0)) {
    return errorResponse("Inga biljetter valda", 400);
  }

  /* Checks if there is a user email */
  const uSession = cookies().get("u-session")?.value;
  if (uSession) {
    const key = process.env.JWT_SECRET as string;
    const userDetails: any = JWT.verify(uSession, key);
    body.email = userDetails.sessionObject.email;
  }

  if (!isValidEmail(body.email || "")) {
    return errorResponse("Felaktig e-postadress", 400);
  }

  /* Validate seating */
  if (body.seats.length !== getTicketsQuantity(bookingDetails.tickets)) {
    return errorResponse(
      "Andel biljetter och valda platser överstämmer ej",
      400
    );
  }

  const res = successResponse("Bokningsdetaljer godkänd");
  saveBookingSession(body, res);

  return res;
}

export async function GET() {
  const session = getBookingSession();

  if (!session) {
    return errorResponse(RES_SESSION_EXPIRED.message, RES_SESSION_EXPIRED.code);
  }

  const bookingDetails = loadBookingSession(session);

  const res = NextResponse.json(bookingDetails);

  return res;
}
