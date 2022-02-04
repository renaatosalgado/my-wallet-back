import db from "../db.js";
import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";

export async function getTransactions(req, res) {
  const user = res.locals.user;
}

export async function addIncome(req, res) {
  const user = res.locals.user;
  const { value, description } = req.body;

  try {
    await db.collection("transactions").insertOne({
      userId: user._id,
      value: Number(value),
      description,
      type: "income",
      date: `${dayjs().format("DD/MM")}`,
    });

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function addExpense(req, res) {
  const user = res.locals.user;
  const { value, description } = req.body;

  try {
    await db.collection("transactions").insertOne({
      userId: user._id,
      value: Number(value),
      description,
      type: "expense",
      date: `${dayjs().format("DD/MM")}`,
    });

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function editIncome(req, res) {}

export async function editExpense(req, res) {}

export async function deleteIncome(req, res) {}

export async function deleteExpense(req, res) {}
