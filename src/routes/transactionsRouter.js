import { Router } from "express";
import {
  addIncome,
  addExpense,
  editIncome,
  editExpense,
  deleteIncome,
  deleteExpense,
} from "../controllers/transactionsController.js";
import { validateToken } from "../middleware/validateTokenMiddleware.js";
import { validateTransaction } from "../middleware/validateTransactionMiddleware.js";

const transactionsRouter = Router();

transactionsRouter.use(validateToken);
transactionsRouter.use(validateTransaction);

transactionsRouter.post("/add-income", addIncome);
transactionsRouter.post("/add-expense", addExpense);
transactionsRouter.put("/edit-income", editIncome);
transactionsRouter.put("/edit-expense", editExpense);
transactionsRouter.delete("/delete-income", deleteIncome);
transactionsRouter.delete("/delete-expense", deleteExpense);

export default transactionsRouter;
