import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import demoRoutes from "./routes/demoRoutes.js"
dotenv.config();

const app = express();
app.use(cors());
app.use("/api/demos", demoRoutes);
app.use(express.json());

connectDB();

app.get("/health", (_, res) => res.send("OK"));

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
