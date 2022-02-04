import express, { json } from "express";
import cors from "cors";
import router from "./routes/index.js";

const server = express();
server.use(json());
server.use(cors());

server.use(router);

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
