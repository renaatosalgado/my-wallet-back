import express, { json } from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";
import joi from "joi";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect(() => {
  db = mongoClient.db("my-wallet");
});

const server = express();
server.use(json());
server.use(cors());

const signUpSchema = joi.object({
  name: joi.string().min(2).lowercase().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

server.post("/sign-up", async (req, res) => {
  const user = req.body;

  const validation = signUpSchema.validate(user, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);

    return res.status(422).send(errors);
  }

  try {
    const hasEmail = await db
      .collection("users")
      .findOne({ email: user.email });

    if (hasEmail) return res.sendStatus(409);

    const passwordHash = bcrypt.hashSync(user.password, 10);

    await db.collection("users").insertOne({ ...user, password: passwordHash });

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
