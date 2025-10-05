import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('movies/create');
});

movieController.post('/create', (req, res) => {
    const movieData = req.body;

    movieService.create(movieData);

    res.redirect('/');
});

movieController.get('/:movieId/details', (req, res) => {
    const movieId = req.params.movieId;
    const movie = movieService.getById(movieId);

    res.render('movies/details', { movie });
});

export default movieController;