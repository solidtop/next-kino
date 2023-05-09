import { Schema, model, Document } from "mongoose";

interface iTickets extends Document {
  id: Number;
  type: String;
  price: Number;
  quantity: Number;
  maxQuantity: Number;
}

const TicketsSchema: Schema = new Schema({
  bookingId: Number,
  screeningId: Number,
  startTime: String,
  tickets: Array<iTickets>,
  seats: Array<Number>,
  email: String,
});

const TicketsModel = model<iTickets>("Ticket", TicketsSchema);
export default TicketsModel;
