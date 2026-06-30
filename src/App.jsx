import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Browse from "./pages/Browse";
import Watchlist from "./pages/Watchlist";

import "./App.css";

function App() {

  const [watchlist, setWatchlist] = useState([]);

  return (
    <BrowserRouter>

      <nav className="navbar">
        <Link to="/">Browse</Link>
        <Link to="/watchlist">Watchlist</Link>
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