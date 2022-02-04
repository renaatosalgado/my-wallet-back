import db from "../db.js";

export async function addIncome(req, res) {
  const user = res.locals.user;
}

export async function addExpense(req, res) {
  const { user } = res.locals;
}

export async function editIncome(req, res) {}

export async function editExpense(req, res) {}

export async function deleteIncome(req, res) {}

export async function deleteExpense(req, res) {}
