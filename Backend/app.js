import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import movies from "./data/movies.js";

const app = express();
dotenv.config();

// Middleware
app.use(cors());

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;


// GET all movies
app.get("/api/movies", (req, res) => {
  res.json(movies);
});


// GET single movie
app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find(
    (m) => m.id === Number(req.params.id)
  );

  if (!movie) {
    return res.status(404).json({
      message: "Movie not found"
    });
  }

  res.json(movie);
});


// POST new movie
app.post("/api/movies", (req, res) => {
  const newMovie = {
    id: Date.now(),
    ...req.body
  };

  movies.push(newMovie);

  res.status(201).json({
    message: "Movie added successfully",
    movie: newMovie
  });
});


// DELETE movie
app.delete("/api/movies/:id", (req, res) => {
  const index = movies.findIndex(
    (m) => m.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Movie not found"
    });
  }

  movies.splice(index, 1);

  res.json({
    message: "Movie deleted successfully"
  });
});


app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

app.patch("/api/movies/:id", (req, res) => {
  const movie = movies.find(
    (m) => m.id === Number(req.params.id)
  );

  if (!movie) {
    return res.status(404).json({
      message: "Movie not found"
    });
  }

  Object.assign(movie, req.body);

  res.json({
    message: "Movie updated successfully",
    movie
  });
});