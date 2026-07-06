import { useState, useEffect } from "react";
import initialMovies from "../../data/movies";
import MovieGrid from "../../components/MovieGrid";
import MovieDetail from "../../components/MovieDetail";
import AddMovieForm from "../../components/AddMovieForm";

function Browse({ watchlist, setWatchlist }) {
  const [movies, setMovies] = useState(initialMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [search, setSearch] = useState("");

  // Dashboard states
  const [totalMovies, setTotalMovies] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  // useEffect for dashboard stats
  useEffect(() => {
    setTotalMovies(movies.length);

    const avg =
      movies.reduce(
        (sum, movie) => sum + Number(movie.rating),
        0
      ) / movies.length;

    setAverageRating(avg.toFixed(1));
  }, [movies]);

  // Add Movie
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  // Add to Watchlist
  const addToWatchlist = (movie) => {
    const exists = watchlist.find(
      (m) => m.id === movie.id
    );

    if (!exists) {
      setWatchlist([...watchlist, movie]);
      alert(`${movie.title} added to Watchlist ❤️`);
    }
  };

  // Delete Movie
  const deleteMovie = (id) => {
    setMovies(
      movies.filter((movie) => movie.id !== id)
    );
  };

  // Live Search
  const filteredMovies = movies.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>🎬 Cute Movie Database 🎀</h1>

      {/* Dashboard */}
      <div className="stats">
        <h3>Total Movies: {totalMovies}</h3>
        <h3>Average Rating: {averageRating}</h3>
      </div>

      {/* Search */}
      <input
        className="search"
        type="text"
        placeholder="Search Movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add Form */}
      <AddMovieForm addMovie={addMovie} />

      {/* Movie Grid */}
      <MovieGrid
        movies={filteredMovies}
        setSelectedMovie={setSelectedMovie}
        addToWatchlist={addToWatchlist}
        deleteMovie={deleteMovie}
      />

      {/* Detail View */}
      <MovieDetail movie={selectedMovie} />
    </div>
  );
}

export default Browse;