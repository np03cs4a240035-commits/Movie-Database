import * as AuthController from "../controllers/authController.js";
import {Router} from 'express';

const router =Router();

router.post('/register', AuthController.registerUser);
router.post('/login', AuthController.LoginUser);

export default router;

