function MovieDetail({ movie }) {

  if (!movie) return null;

  return (
    <div className="detail">

      <h2>{movie.title}</h2>

      <p><strong>Genre:</strong> {movie.genre}</p>

      <p><strong>Director:</strong> {movie.director}</p>

      <p><strong>Year:</strong> {movie.year}</p>

      <p><strong>Rating:</strong> {movie.rating}</p>

      <p><strong>Cast:</strong> {movie.cast}</p>

      <p><strong>Synopsis:</strong> {movie.synopsis}</p>

    </div>
  );
}

export default MovieDetail;