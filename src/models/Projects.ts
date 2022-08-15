import { Schema, Model, Document, model } from "mongoose";
import { IProjectsDoc } from "../types";

const projectSchema: Schema = new Schema({
  name: String,
  main_image: String,
  images: [String],
  details: String,
  link: String,
  code: String,
  text: String,
  backcolor: String,
  languages: [
    {
      language: String,
      percent: {
        type: Number,
        min: 0,
        max: 100,
      },
    },
  ],
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill",
    },
  ],
  start_date: Date,
  end_date: Date,
});

const Project = model<IProjectsDoc, Model<IProjectsDoc>>(
  "Project",
  projectSchema
);

export default Project;
