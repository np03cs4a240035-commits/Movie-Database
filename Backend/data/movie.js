import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    genre: {
      type: String,
      required: true,
      enum: [
        "Action",
        "Comedy",
        "Drama",
        "Horror",
        "Romance",
        "Sci-Fi",
        "Animation",
        "Fantasy",
        "Thriller",
        "Documentary",
      ],
    },

    year: {
      type: Number,
      required: true,
    },

    director: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    synopsis: {
      type: String,
      required: true,
    },

    cast: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;