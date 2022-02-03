import { Router } from "express";
import { addIncome } from "../controllers/transactionsController.js";

const transactionsRouter = Router();

transactionsRouter.post("/add-income", addIncome);

export default transactionsRouter;
