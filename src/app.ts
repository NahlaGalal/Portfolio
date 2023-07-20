import express, { Request } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { DestinationCallback } from "./types";
import router from "./routes";

require("dotenv").config();

const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.a1cox.mongodb.net/Portfolio?retryWrites=true&w=majority`;

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallback
  ) => {
    cb(null, "src/data");
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallback
  ) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  multer({ storage }).fields([
    { name: "main_image", maxCount: 1 },
    { name: "images" },
  ])
);
app.use("/data", express.static(path.join(__dirname, "data")));
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(router);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Listening"));
