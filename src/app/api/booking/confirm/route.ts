import { NextResponse } from "next/server";
import { isValidEmail } from "@/utils/validation";
import {
  RES_SESSION_EXPIRED,
  endBookingSession,
  errorResponse,
  getBookingSession,
  loadBookingSession,
} from "@/utils/bookingSession";
import connectdb from "@/utils/connectDb";
import TicketsModel from "@/models/tickets";

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

  const bookingId = bookingDetails.id;
  const screeningId = bookingDetails.screening.id;
  const movie = bookingDetails.screening.attributes.movie.data.attributes.title;
  const startTime = bookingDetails.screening.attributes.start_time;
  const tickets = bookingDetails.tickets;
  const seats = bookingDetails.seats;
  const email = bookingDetails.email;

  try {
    connectdb();
    const ticketsDb = new TicketsModel({
      bookingId,
      screeningId,
      movie,
      startTime,
      tickets,
      seats,
      email,
    });

    await ticketsDb.save();
  } catch (err) {
    return errorResponse("Det gick inte att bekräfta er bokning", 401);
  }

  const res = NextResponse.json(bookingDetails);
  endBookingSession(res);

  return res;
}
