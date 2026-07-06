import "./MovieCard.css";
 function MovieCard({
  movie,
  setSelectedMovie,
  addToWatchlist,
  deleteMovie,
}) {

  // Determine badge color based on rating
  let badgeClass = "";

  if (movie.rating >= 8) {
    badgeClass = "rating-green";
  } else if (movie.rating >= 5) {
    badgeClass = "rating-amber";
  } else {
    badgeClass = "rating-red";
  }

  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} />

      <h3>{movie.title}</h3>

      <p>{movie.genre}</p>

      <span className={`rating-badge ${badgeClass}`}>
         {movie.rating}
      </span>

      <br /><br />

      <button onClick={() => setSelectedMovie(movie)}>
        Details
      </button>

      <button onClick={() => addToWatchlist(movie)}>
        Watchlist
      </button>

      <button onClick={() => deleteMovie(movie.id)}>
        Delete
      </button>
    </div>
  );
}

export default MovieCard;