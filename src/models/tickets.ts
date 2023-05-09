import { Schema, model } from "mongoose";
import { Ticket } from "@/types";

const TicketsSchema: Schema = new Schema({
  bookingId: Number,
  screeningId: Number,
  movie: String,
  startTime: String,
  tickets: Array<Ticket>,
  seats: Array<Number>,
  email: String,
});

const TicketsModel = model<Ticket>("Ticket", TicketsSchema);
export default TicketsModel;
