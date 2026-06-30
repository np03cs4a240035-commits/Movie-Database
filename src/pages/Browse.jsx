import { useState } from "react";
import initialMovies from "../data/movies";
import MovieGrid from "../components/MovieGrid";
import MovieDetail from "../components/MovieDetail";
import AddMovieForm from "../components/AddMovieForm";

function Browse({ watchlist, setWatchlist }) {
  const [movies, setMovies] = useState(initialMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [search, setSearch] = useState("");

  // Add new movie
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  // Add to watchlist
  const addToWatchlist = (movie) => {
    const exists = watchlist.find((m) => m.id === movie.id);

    if (!exists) {
      setWatchlist([...watchlist, movie]);
      alert("Movie added to Watchlist ");
    }
  };

  // Delete movie
  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // Edit movie
  const editMovie = (id) => {
    const newTitle = prompt("Enter new movie title:");

    if (!newTitle) return;

    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, title: newTitle }
          : movie
      )
    );
  };

  // Live Search
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  // Dashboard Stats
  const averageRating =
    movies.length > 0
      ? (
          movies.reduce(
            (sum, movie) => sum + Number(movie.rating),
            0
          ) / movies.length
        ).toFixed(1)
      : 0;

  return (
    <div>
      <h1> Cute Movie Database </h1>

      <div className="stats">
        <h3>Total Movies: {movies.length}</h3>
        <h3>Average Rating: {averageRating}</h3>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search Movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <AddMovieForm addMovie={addMovie} />

      <MovieGrid
        movies={filteredMovies}
        setSelectedMovie={setSelectedMovie}
        addToWatchlist={addToWatchlist}
        deleteMovie={deleteMovie}
        editMovie={editMovie}
      />

      <MovieDetail movie={selectedMovie} />
    </div>
  );
}

export default Browse;