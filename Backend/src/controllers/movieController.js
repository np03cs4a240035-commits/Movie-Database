import * as MovieModel from '../models/movieModel.js';

export function getMovies(req,res){
    const movies = MovieModel.getAll();
    return res.status(200).json(movies);
}

export function addMovie(req,res){
    const movie = req.body;
    MovieModel.add(movie);
    return res.status(201).json({message: "Movie added successfully", "data": movie});
}

export function updateMovie(req,res){
    const value =  MovieModel.update(parseInt(req.params.id), req.body);
    if(value.error) {
        return res.status(404).json(value);
    }
    return res.status(200).json(value);
}