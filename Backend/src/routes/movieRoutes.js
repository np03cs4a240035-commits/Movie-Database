import {Router} from 'express';
import * as movieController from '../controllers/movieController.js';

const router =Router();

router.get('/movies', movieController.getMovies);
router.post('/movies', movieController.addMovie);
router.patch('/movies/:id', movieController.updateMovie);


export default router;

