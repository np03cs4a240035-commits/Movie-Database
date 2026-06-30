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

    addMovie({
      ...movie,
      id: Date.now(),
      cast: "Not Available",
      image: "https://picsum.photos/300/400?random=" + Math.random()
    });

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

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={movie.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={movie.genre}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="year"
        placeholder="Year"
        value={movie.year}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="director"
        placeholder="Director"
        value={movie.director}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        step="0.1"
        name="rating"
        placeholder="Rating"
        value={movie.rating}
        onChange={handleChange}
        required
      />

      <textarea
        name="synopsis"
        placeholder="Synopsis"
        value={movie.synopsis}
        onChange={handleChange}
      />

      <button>Add Movie 💖</button>

    </form>
  );
}

export default AddMovieForm;