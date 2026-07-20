import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
    trim: true,
  },

  genre: {
    required: true,
    type: String,
    enum: ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi","Animation","Fantasy","Thriller","Documentary"],
  },

  year: {
    required: true,
    type: Number,
  },

  director: {
    required: true,
    type: String,
  },

  rating: {
    required: true,
    type: Number,
  },

  synopsis: {
    required: true, 
    type: String,
  },

  cast: {
    required: true,
    type: String,
  },
{timestamps: true}
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;