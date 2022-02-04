import { Router } from "express";
import { login, singUp } from "../controllers/authController.js";
import { validateLogin } from "../middleware/validateLoginMiddleware.js";
import { validateSignUp } from "../middleware/validateSignUpMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSignUp, singUp);
authRouter.post("/login", validateLogin, login);

export default authRouter;
