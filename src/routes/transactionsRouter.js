import { Router } from "express";
import {
  addIncome,
  addExpense,
  editIncome,
  editExpense,
  deleteIncome,
  deleteExpense,
} from "../controllers/transactionsController.js";

const transactionsRouter = Router();

transactionsRouter.post("/add-income", addIncome);
transactionsRouter.post("/add-expense", addExpense);
transactionsRouter.post("/edit-income", editIncome);
transactionsRouter.post("/edit-expense", editExpense);
transactionsRouter.post("/delete-income", deleteIncome);
transactionsRouter.post("/delete-expense", deleteExpense);

export default transactionsRouter;
