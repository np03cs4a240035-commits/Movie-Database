import Movie from "./movie.js";
import dbConnection from "../src/config/db.js";

const movies = [
  {
    title: "Barbie",
    genre: "Comedy",
    year: 2023,
    director: "Greta Gerwig",
    rating: 7.2,
    synopsis: "Barbie explores the real world.",
    cast: "Margot Robbie, Ryan Gosling"
  },

  {
    title: "Frozen",
    genre: "Animation",
    year: 2013,
    director: "Chris Buck",
    rating: 8.3,
    synopsis: "Two sisters save their kingdom.",
    cast: "Kristen Bell, Idina Menzel"
  },

  {
    title: "Twilight",
    genre: "Romance",
    year: 2008,
    director: "Catherine Hardwicke",
    rating: 5.2,
    synopsis: "A teenage girl falls in love with a vampire.",
    cast: "Kristen Stewart, Robert Pattinson"
  }
];

await dbConnection();

await Movie.deleteMany();

await Movie.insertMany(movies);

console.log("Movies inserted successfully");

process.exit();