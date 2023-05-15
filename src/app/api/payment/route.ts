import { NextRequest, NextResponse } from "next/server";
import { isValidCardNumber } from "@/utils/validation";

/* Code only to get the flow of the site to work */
/* This will be replaced by a real payment api in a real production, like Stripe */

export async function POST(req: NextRequest) {
  const body = await req.json();

  const cardCheck = isValidCardNumber(body.cardNumber);
  const ccvCheck = isValidCardNumber(body.ccv);
  const todaysDate = new Date();
  const cardDate = new Date(body.cardYear, body.cardMonth, 0);

  if (
    cardCheck === true &&
    ccvCheck === true &&
    body.cardNumber.length === 12 &&
    body.ccv.length === 3 &&
    cardDate > todaysDate
  ) {
    return NextResponse.json("Payment valid");
  } else {
    return NextResponse.json("Payment invalid");
  }
}
