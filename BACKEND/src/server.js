import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import demoRoutes from "./routes/demoRoutes.js"
import analyticsRoutes from "./routes/analyticsRoutes.js"
import paymentRoutes from "./routes/paymentRoutes.js"


const app = express();

app.use(cors());

 
app.use(express.json());
app.use("/api/payments", paymentRoutes);
app.use("/api/demos", demoRoutes);
app.use("/api/analytics", analyticsRoutes);

connectDB();

app.get("/health", (_, res) => res.send("OK"));

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
