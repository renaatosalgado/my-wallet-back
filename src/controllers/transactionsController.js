import db from "../db.js";
import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";
import { ObjectId } from "mongodb";

export async function getTransactions(req, res) {
  const user = res.locals.user;

  try {
    const transactions = await db
      .collection("transactions")
      .find({ userId: user._id })
      .toArray();

    res.send(transactions);
  } catch (error) {
    res.status(500).send(error);
  }
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

export async function deleteTransaction(req, res) {
  const { transactionId } = req.params;

  try {
    const transaction = await db
      .collection("transactions")
      .findOne({ _id: ObjectId(transactionId) });

    if (!transaction) return res.sendStatus(404);

    await db
      .collection("transactions")
      .deleteOne({ _id: ObjectId(transactionId) });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
}
