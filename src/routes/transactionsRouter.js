import { Router } from "express";
import {
  getTransactions,
  addIncome,
  addExpense,
  editIncome,
  editExpense,
  deleteTransaction,
} from "../controllers/transactionsController.js";
import { validateToken } from "../middleware/validateTokenMiddleware.js";
import { validateTransaction } from "../middleware/validateTransactionMiddleware.js";

const transactionsRouter = Router();

transactionsRouter.use(validateToken);

transactionsRouter.get("/get-transactions", getTransactions);
transactionsRouter.post("/add-income", validateTransaction, addIncome);
transactionsRouter.post("/add-expense", validateTransaction, addExpense);
transactionsRouter.put("/edit-income", validateTransaction, editIncome);
transactionsRouter.put("/edit-expense", validateTransaction, editExpense);
transactionsRouter.delete("/delete-transactions/:transactionId", deleteTransaction);

export default transactionsRouter;
