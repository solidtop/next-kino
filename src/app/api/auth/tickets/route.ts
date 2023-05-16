import { NextRequest, NextResponse } from "next/server";
import TicketsModel from "@/models/tickets";
import connectDb from "@/utils/connectDb";
import { Ticket } from "@/types";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    connectDb();
    const tickets: Array<Ticket> = await TicketsModel.find({
      email: body.email,
    });

    return NextResponse.json(tickets);
  } catch (err) {}
}
