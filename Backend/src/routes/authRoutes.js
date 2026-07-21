import { Router } from "express";

import * as AuthController from "../controllers/authController.js";

import {
  registerRules,
  loginRules,
  handleAuthValidation,
} from "../validators/authValidator.js";

const router = Router();

router.post(
  "/register",
  registerRules,
  handleAuthValidation,
  AuthController.registerUser
);

router.post(
  "/login",
  loginRules,
  handleAuthValidation,
  AuthController.loginUser
);

export default router;