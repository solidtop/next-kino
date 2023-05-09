import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_TICKETS_URI || "";

export default async function connectTicketDb() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Ticket database connection successful");
  } catch (error) {
    console.log("Ticket database connection error:", error);
  }
}
