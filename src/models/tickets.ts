import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import { Ticket } from "@/types";

interface ITickets extends Document {
  bookingId: string;
  screeningId: number;
  movie: string;
  startTime: string;
  tickets: Array<Ticket>;
  seats: Array<number>;
  email: string;
}

const TicketsSchema: Schema = new Schema({
  bookingId: { type: String, required: true },
  screeningId: { type: Number, required: true },
  movie: { type: String, required: true },
  startTime: { type: String, required: true },
  tickets: { type: Array<Ticket>, required: true },
  seats: { type: Array<Number>, required: true },
  email: { type: String, required: true },
});

const TicketsModel =
  mongoose.models.Ticket || model<ITickets>("Ticket", TicketsSchema);
export default TicketsModel;
