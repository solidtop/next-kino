import { Schema, model } from "mongoose";
import mongoose from "mongoose";
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

const TicketsModel =
  mongoose.models.Ticket || model<Ticket>("Ticket", TicketsSchema);
export default TicketsModel;
