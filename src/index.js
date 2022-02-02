import express, { json } from "express";
import cors from "cors";
import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";
import { login, singUp } from "./controllers/authControler.js";

const server = express();
server.use(json());
server.use(cors());

server.post("/sign-up", singUp);

server.post("/login", login);

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
