import Movie from "../../data/movie.js";
import { ObjectId } from "mongodb";

export async function getAll() {
  return Movie.find();
}

export async function add(newMovie) {
  return Movie.create(newMovie);
}

export async function update(id, updatedMovie) {
    const updatedId = new ObjectId(id)
  return Movie.findByIdAndUpdate(
    id,
    updatedMovie,
    {
      new: true,
      runValidators: true,
    }
  );
}

export async function remove(id) {
  return Movie.findByIdAndDelete(id);
}

export async function getById(id) {
  return Movie.findById(id);
}