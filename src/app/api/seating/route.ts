import { NextRequest, NextResponse } from "next/server";
import TicketsModel from "@/models/tickets";
import connectTicketDb from "@/utils/connectTicketDb";

export async function POST(req: NextRequest, res: NextResponse) {
  connectTicketDb();
  const body = await req.json();
  const screening: Array<any> = await TicketsModel.find({
    screeningId: body.screening.id,
  });

  const seating: Array<number> = [];
  screening.forEach((s) => {
    s.seats.forEach((num: number) => {
      seating.push(num);
    });
  });
  return NextResponse.json(seating);
}
