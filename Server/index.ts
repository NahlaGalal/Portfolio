import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const http = require("http");

const MONGODB_URI = "mongodb://localhost/portfolio";

const app = express();

app.use(cors());

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(http.createServer(app.listen(4000, () => console.log("Hello"))))
  .catch((err) => console.log(err));
