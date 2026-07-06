import { useState } from "react";

function AddMovieForm({ addMovie }) {
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    year: "",
    director: "",
    rating: "",
    synopsis: ""
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !movie.title ||
      !movie.genre ||
      !movie.year ||
      !movie.director ||
      !movie.rating
    ) {
      alert("Please fill all required fields!");
      return;
    }

    // Add new movie
    addMovie({
      id: Date.now(),
      title: movie.title,
      genre: movie.genre,
      year: movie.year,
      director: movie.director,
      rating: Number(movie.rating),
      synopsis: movie.synopsis,
      cast: "Not Available",
      image: `https://picsum.photos/300/400?random=${Date.now()}`
    });

    // Clear form
    setMovie({
      title: "",
      genre: "",
      year: "",
      director: "",
      rating: "",
      synopsis: ""
    });
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <h2>➕ Add New Movie</h2>

      <div className="form-row">
        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          value={movie.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={movie.genre}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={movie.year}
          onChange={handleChange}
        />

        <input
          type="text"
          name="director"
          placeholder="Director"
          value={movie.director}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <input
          type="number"
          name="rating"
          placeholder="Rating (0-10)"
          min="0"
          max="10"
          step="0.1"
          value={movie.rating}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <textarea
          name="synopsis"
          placeholder="Movie Synopsis"
          rows="4"
          value={movie.synopsis}
          onChange={handleChange}
        />
      </div>

      <button type="submit">
        Add Movie
      </button>
    </form>
  );
}

export default AddMovieForm;