import express, {json} from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";
import joi from "joi";
import dotenv from "dotenv";

dotenv.config();

const server = express();
server.use(json);
server.use(cors);

server.listen(5000, () => {
    console.log("Server running on port 5000")
})

