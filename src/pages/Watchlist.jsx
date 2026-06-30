function Watchlist({
  watchlist,
  setWatchlist
}) {

  const removeMovie = (id) => {

    setWatchlist(
      watchlist.filter(movie => movie.id !== id)
    );
  };

  return (
    <div>

      <h1> My Watchlist</h1>

      {watchlist.map(movie => (

        <div key={movie.id} className="card">

          <h3>{movie.title}</h3>

          <button
            onClick={() => removeMovie(movie.id)}
          >
            Remove
          </button>

        </div>

      ))}

    </div>
  );
}

export default Watchlist;