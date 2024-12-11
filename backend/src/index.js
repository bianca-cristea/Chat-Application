import express from "express";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import { connectToMongoDB } from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});

export default app;
