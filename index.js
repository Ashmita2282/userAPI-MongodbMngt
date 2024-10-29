import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import logger from "./middleware/logger.js";

dotenv.config();

const app = express();
app.use(logger); // Middleware for logging
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Use Routes
app.use("/users", userRoutes);

// 404 Middleware - Handles "Route Not Found" errors
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route does not exist",
  });
});

// General Error Handler - For other errors
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).json({
    success: false,
    message: "Something went wrong on the server",
    error: err.message,
  });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
