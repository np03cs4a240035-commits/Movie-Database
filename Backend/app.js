import express from "express";
import cors from "cors";
import dbConnection from "./src/config/db.js";
import dotenv from "dotenv";
import movieRoutes from "./src/routes/movieRoutes.js";

const app = express();

dotenv.config();

const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(movieRoutes);

// Database Connection
await dbConnection();

// Start Server
app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});