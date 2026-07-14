import {Router} from 'express';
import * as movieController from '../controllers/movieController.js';
import {movieRules, handleMovieValidation} from '../validators/movieValidator.js';

const router =Router();

router.get('/movies', movieController.getMovies);
router.post('/movies',movieRules,handleMovieValidation, movieController.addMovie);
router.put('/movies/:id', movieController.updateMovie);


export default router;

