import {Router} from 'express';
import * as movieController from '../controllers/movieController.js';
import {movieRules, handleMovieValidation} from '../validators/movieValidator.js';
import authenticate from '../middleware/auth.js'

const router =Router();

router.get('/movies', movieController.getMovies);
router.post('/movies',authenticate,movieRules,handleMovieValidation, movieController.addMovie);
router.put('/movies/:id',authenticate,movieController.updateMovie);


export default router;

