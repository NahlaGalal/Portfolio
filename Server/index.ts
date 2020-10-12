import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import router from "./router";

const MONGODB_URI = "mongodb://localhost/portfolio";

const app = express();

app.use(cors());
app.use(router);

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.listen(4000, () => console.log("Hello"));
