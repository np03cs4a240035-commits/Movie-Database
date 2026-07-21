import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import dbConnection from "./src/config/db.js";
import movieRoutes from "./src/routes/movieRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors(
  {
    origin: 'http://localhost:5173'
  }
));
app.use(express.json());

// Routes
app.use(movieRoutes);
app.use('/auth',authRoutes);

// Database
await dbConnection();

// Server
app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});