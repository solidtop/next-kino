import { NextRequest, NextResponse } from "next/server";
import TicketsModel from "@/models/tickets";
import connectTicketDb from "@/utils/connectTicketDb";

export async function GET(req: NextRequest) {
  try {
    await connectTicketDb();
    const screeningId = req.nextUrl.searchParams.values().next().value;

    const screening: Array<any> = await TicketsModel.find({
      screeningId: screeningId,
    });

    const seating: Array<number> = [];

    screening.forEach((s) => {
      s.seats.forEach((num: number) => {
        seating.push(num);
      });
    });

    return NextResponse.json(seating);
  } catch (err) {
    console.log(err);
  }
}
