import { useState, useEffect } from "react";

import initialMovies from "../data/movies";

import MovieGrid from "../components/MovieGrid";
import MovieDetail from "../components/MovieDetail";
import AddMovieForm from "../components/AddMovieForm";

function Browse({ watchlist, setWatchlist }) {

  const [movies, setMovies] = useState(initialMovies);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [search, setSearch] = useState("");

  const [totalMovies, setTotalMovies] = useState(0);

  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {

    setTotalMovies(movies.length);

    const avg =
      movies.reduce((sum, movie) => sum + Number(movie.rating), 0) /
      movies.length;

    setAverageRating(avg.toFixed(1));

  }, [movies]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const deleteMovie = (id) => {

    setMovies(movies.filter(movie => movie.id !== id));

    if (selectedMovie?.id === id) {
      setSelectedMovie(null);
    }
  };

  const addToWatchlist = (movie) => {

    const exists = watchlist.find(m => m.id === movie.id);

    if (!exists) {

      setWatchlist([...watchlist, movie]);

      alert(`${movie.title} added to Watchlist ❤️`);
    }
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="container">

      <h1>
        🎬 Cute Movie Database 🎀
      </h1>

      <div className="stats">

        <div className="stat-card">
          🎬
          <h2>{totalMovies}</h2>
          <p>Total Movies</p>
        </div>

        <div className="stat-card">
          ⭐
          <h2>{averageRating}</h2>
          <p>Average Rating</p>
        </div>

        <div className="stat-card">
          ❤️
          <h2>{watchlist.length}</h2>
          <p>Watchlist</p>
        </div>

      </div>

      <input
        className="search"
        type="text"
        placeholder="🔍 Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <AddMovieForm addMovie={addMovie} />

      <MovieGrid
        movies={filteredMovies}
        setSelectedMovie={setSelectedMovie}
        addToWatchlist={addToWatchlist}
        deleteMovie={deleteMovie}
      />

      <MovieDetail movie={selectedMovie} />

    </div>
  );
}

export default Browse;