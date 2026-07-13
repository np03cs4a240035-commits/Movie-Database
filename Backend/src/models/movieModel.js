import movies from "../../data/movies.js";

export function getAllMovies(){
    return movies;
}

export function add(movie){
    movies.push(movie);
}

export function update(id, updatedMovie){

     const index = movies.findIndex(movie => movie.id ==id);

      if (index === -1) {
        return { error: "Movie not found" };
    }

    movies.splice(index, 1, { ...movies[index], ...updatedMovie });

    return { message: "Movie updated successfully" };

}
