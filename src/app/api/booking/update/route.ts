import { NextRequest, NextResponse } from "next/server";
import { BookingDetails } from "@/types";
import {
  isValidBookingDetails,
  screeningHasStarted,
  getAmountTotal,
  isEqual,
} from "@/utils/validation";
import {
  RES_INVALID_REQUEST,
  RES_SCREENING_STARTED,
  RES_SESSION_EXPIRED,
  errorResponse,
  getBookingSession,
  loadBookingSession,
  saveBookingSession,
} from "@/utils/bookingSession";

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

  if (!isEqual(body.tickets, bookingDetails.tickets)) {
    /* Reset seats when changing ticket quantity */
    body.seats = [];
  }

  body.pricing.amountTotal = getAmountTotal(body.tickets);
  const res = NextResponse.json(body);
  saveBookingSession(body, res);

  return res;
}
