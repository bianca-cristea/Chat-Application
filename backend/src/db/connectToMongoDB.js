import mongoose from "mongoose";
import { configDotenv } from "dotenv";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Cannot connect to MongoDB ", error.message);
  }
};
