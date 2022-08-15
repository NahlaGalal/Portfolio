import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Listening"));
