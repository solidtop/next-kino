import { isValidEmail } from "@/utils/validation";
import {
  RES_SESSION_EXPIRED,
  endBookingSession,
  errorResponse,
  getBookingSession,
  loadBookingSession,
  successResponse,
} from "@/utils/bookingSession";

export async function POST() {
  const session = getBookingSession();
  if (!session) {
    return errorResponse(RES_SESSION_EXPIRED.message, RES_SESSION_EXPIRED.code);
  }

  const bookingDetails = loadBookingSession(session);
  if (!isValidEmail(bookingDetails.email || "")) {
    return errorResponse("Inkomplett bokningsinformation", 401);
  }

  /* Save to database */

  const res = successResponse("Biljett skapad");
  endBookingSession(res);

  return res;
}
