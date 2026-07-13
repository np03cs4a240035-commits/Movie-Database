import express from "express";
import cors from "cors";
import movies from "./data/movies.js";
import dbConnection from "./src/config/db.js";
import dotenv from "dotenv";

const app = express();
dotenv.config()
const PORT = 3001;

app.use(cors());
app.use(express.json());

await dbConnection();


// GET ALL MOVIES
app.get("/movies", (req, res) => {
  res.json(movies);
});


// GET SINGLE MOVIE
app.get("/movies/:id", (req, res) => {
  const movie = movies.find(
    m => m.id === Number(req.params.id)
  );

  if (!movie) {
    return res.status(404).json({
      message: "Movie not found"
    });
  }

  res.json(movie);
});


// ADD MOVIE
app.post("/movies", (req, res) => {
  const newMovie = req.body;

  movies.push(newMovie);

  res.status(201).json({
    message: "Movie added successfully",
    movie: newMovie
  });
});


// UPDATE MOVIE
app.patch("/movies/:id", (req, res) => {
  const movie = movies.find(
    m => m.id === Number(req.params.id)
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


// DELETE MOVIE
app.delete("/movies/:id", (req, res) => {
  const index = movies.findIndex(
    m => m.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Movie not found"
    });
  }

  const deletedMovie = movies.splice(index, 1);

  res.json({
    message: "Movie deleted successfully",
    deletedMovie
  });
});

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});