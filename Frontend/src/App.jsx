import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Browse from "./pages/Browse";
import Watchlist from "./pages/Watchlist";

import { getMovies } from "./api/movieApi";

import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    document.title = "Movie Database";
  }, []);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (err) {
        setError((prev) => [...prev, err.message]);
      } finally {
        setIsLoading(false);
      }
    }

    loadMovies();
  }, []);

  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2 className="logo">🎀 Movie Database</h2>

        <div className="nav-links">
          <Link to="/">Browse</Link>

          <Link to="/watchlist">
            ❤️ Watchlist ({watchlist.length})
          </Link>
        </div>
      </nav>

      {isLoading && <p style={{ textAlign: "center" }}>Loading movies...</p>}

      {error.length > 0 && (
        <div style={{ color: "red", textAlign: "center" }}>
          {error.map((err, index) => (
            <p key={index}>{err}</p>
          ))}
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Browse
              watchlist={watchlist}
              setWatchlist={setWatchlist}
            />
          }
        />

        <Route
          path="/watchlist"
          element={
            <Watchlist
              watchlist={watchlist}
              setWatchlist={setWatchlist}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}