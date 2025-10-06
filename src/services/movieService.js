import Movie from "../models/Movie.js";

export default {
    getAll(filter) {
        return Movie.find(filter);
    },
    getById(movieId) {
        return Movie.findById(movieId);
    },
    create(movieData) {
        const movie = new Movie(movieData);

        return movie.save();
    }
}