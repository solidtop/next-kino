import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI || "";

export default function connectdb() {
  if (mongoose.connection.readyState === 0) {
    mongoose
      .connect(MONGODB_URI)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((error) => {
        console.log("Database connection error:", error);
      });
  }
}
