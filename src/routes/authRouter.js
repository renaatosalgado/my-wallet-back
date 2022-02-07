import { Router } from "express";
import { deleteSession, login, singUp } from "../controllers/authController.js";
import { validateLogin } from "../middleware/validateLoginMiddleware.js";
import { validateSignUp } from "../middleware/validateSignUpMiddleware.js";
import { validateToken } from "../middleware/validateTokenMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSignUp, singUp);
authRouter.post("/login", validateLogin, login);
authRouter.delete("/delete-session/:tokenNumber", deleteSession);

export default authRouter;
