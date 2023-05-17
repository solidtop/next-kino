import { NextRequest, NextResponse } from "next/server";
import { isValidCardNumber, isSeatsAvailable } from "@/utils/validation";
import connectDb from "@/utils/connectDb";
import TicketsModel from "@/models/tickets";

/* Code only to get the flow of the site to work */
/* This will be replaced by a real payment api in a real production, like Stripe */

export async function POST(req: NextRequest) {
  const body = await req.json();
  const cardCheck = isValidCardNumber(body.cardNumber);
  const ccvCheck = isValidCardNumber(body.ccv);
  const todaysDate = new Date();
  const cardDate = new Date(body.cardYear, body.cardMonth, 0);

  try {
    connectDb();
    const screeningId = body.bookingDetails.screening.id;

    const screening: Array<any> = await TicketsModel.find({
      screeningId: screeningId,
    });

    const seating: Array<number> = [];

    screening.forEach((s) => {
      s.seats.forEach((num: number) => {
        seating.push(num);
      });
    });

    const availableSeats = await isSeatsAvailable(
      seating,
      body.bookingDetails.seats
    );

    if (
      cardCheck === true &&
      ccvCheck === true &&
      body.cardNumber.length === 12 &&
      body.ccv.length === 3 &&
      cardDate > todaysDate &&
      !availableSeats.includes(false)
    ) {
      return NextResponse.json("Payment valid");
    } else {
      return NextResponse.json("Payment invalid");
    }
  } catch (err) {
    console.log(err);
  }
}
