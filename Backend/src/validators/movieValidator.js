
import {body, validationResult} from 'express-validator';

export const movieRules = [
    body('title').notEmpty().withMessage('Title is required'),
    body('genre').notEmpty().withMessage('Genre is required'),
    body('year').isInt({min: 1900, max: new Date().getFullYear()}).withMessage('Year must be a valid integer between 1900 and the current year'),
    body('director').notEmpty().withMessage('Director is required'),
    body('rating').isFloat({min: 0, max: 10}).withMessage('Rating must be a valid float between 0 and 10'),
    body('synopsis').notEmpty().withMessage('Synopsis is required'),
    body('cast').notEmpty().withMessage('Cast is required')

]


export const handleMovieValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()});
        return;
    }
    next();
};

export { movieRules, handleMovieValidation };