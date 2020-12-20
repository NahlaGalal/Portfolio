import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import router from "./router";

// const MONGODB_URI = "mongodb://localhost/portfolio";
const MONGODB_URI =
  "mongodb+srv://Nahla:gt-b3410@cluster0.a1cox.mongodb.net/Portfolio?retryWrites=true&w=majority";

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
app.use(cors());
app.use(
  multer({ storage }).fields([
    { name: "main_image", maxCount: 1 },
    { name: "images" },
    { name: "skills_images" },
  ])
);
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(router);

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.listen(4000, () => console.log("Hello"));
