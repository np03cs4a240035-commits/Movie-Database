import MovieCard from "./MovieCard";

function MovieGrid({
  movies,
  setSelectedMovie,
  addToWatchlist,
  deleteMovie,
  editMovie,
}) {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          setSelectedMovie={setSelectedMovie}
          addToWatchlist={addToWatchlist}
          deleteMovie={deleteMovie}
          editMovie={editMovie}
        />
      ))}
    </div>
  );
}

export default MovieGrid;