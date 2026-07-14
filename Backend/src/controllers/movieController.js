import * as MovieModel from '../models/movieModel.js';

export async function getMovies(req,res){
    const movies = await MovieModel.getAll();
    return res.status(200).json(movies);
}

export async function addMovie(req,res){
    const movie = req.body;
    const newMovie = await MovieModel.add(movie);
    return res.status(201).json({message: "Movie added successfully", "data": newMovie});
}

export async function updateMovie(req,res){
    const value =  await MovieModel.update(req.params.id, req.body);
    if(value.error) {
        return res.status(404).json(value);
    }
    return res.status(200).json(value);
}