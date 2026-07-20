import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export function getMovies() {
  return api.get("/movies");
}

export function addMovie(movie) {
  return api.post("/movies", movie);
}

export function updateMovie(movieId, movie) {
  return api.put(`/movies/${movieId}`, movie);
}

export function deleteMovie(movieId) {
  return api.delete(`/movies/${movieId}`);
}

export default api;