import express from "express";
import movies from "./data/movies.js";

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// GET all movies
app.get("/movies", (req, res) => {
    return res.json(movies);
});

// POST a new movie
app.post("/movies", (req, res) => {
    const newMovie = req.body;

    movies.push(newMovie);

    return res.status(201).json({
        message: "Movie added successfully"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🎬 Backend is running on port ${PORT}`);
});