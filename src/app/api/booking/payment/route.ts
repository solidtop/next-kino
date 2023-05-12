import { NextResponse } from "next/server";
import { isValidEmail } from "@/utils/validation";
import {
  RES_SESSION_EXPIRED,
  endBookingSession,
  errorResponse,
  getBookingSession,
  loadBookingSession,
} from "@/utils/bookingSession";

export async function POST() {
  const session = getBookingSession();
  if (!session) {
    return errorResponse(RES_SESSION_EXPIRED.message, RES_SESSION_EXPIRED.code);
  }

  const bookingDetails = loadBookingSession(session);

  /* Save to database */

  const res = NextResponse.json(bookingDetails);
  endBookingSession(res);

  return res;
}
