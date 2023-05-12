import { NextRequest, NextResponse } from "next/server";
import * as api from "@/utils/api";
import {
  getBookingSession,
  loadBookingSession,
  saveBookingSession,
  initBookingDetails,
  errorResponse,
  RES_SCREENING_STARTED,
  RES_INVALID_REQUEST,
} from "@/utils/bookingSession";
import { screeningHasStarted } from "@/utils/validation";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { screeningId = null } = body;

  const session = getBookingSession();
  if (session) {
    const bookingDetails = loadBookingSession(session);
    if (bookingDetails.screening.id === screeningId) {
      const screening = await api.getScreening(screeningId);
      if (screeningHasStarted(screening)) {
        return errorResponse(
          RES_SCREENING_STARTED.message,
          RES_SCREENING_STARTED.code
        );
      }

      return NextResponse.json(bookingDetails);
    }
  }

  const screening = await api.getScreening(screeningId);
  if (!screening) {
    return errorResponse(RES_INVALID_REQUEST.message, RES_INVALID_REQUEST.code);
  }
  const bookingDetails = initBookingDetails(screening);
  const res = NextResponse.json(bookingDetails);
  saveBookingSession(bookingDetails, res);

  return res;
}
