import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";

require("dotenv").config();

const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.a1cox.mongodb.net/Portfolio?retryWrites=true&w=majority`;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "data");
  },
  filename: (req, file, cb) => {
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
    { name: "skills_images" },
  ])
);
app.use("/data", express.static(path.join(__dirname, "data")));

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Listening"));
