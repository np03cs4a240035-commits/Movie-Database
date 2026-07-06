import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Browse from "./Frontend/pages/Browse";
import Watchlist from "./Frontend/pages/Watchlist";

import "./App.css";

function App() {
  // Separate Watchlist State Array
  const [watchlist, setWatchlist] = useState([]);

  return (
    <BrowserRouter>

      {/* Navigation */}
      <nav className="navbar">
        <Link to="/">Browse</Link>
        <Link to="/watchlist">Watchlist </Link>
      </nav>

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

export default App;