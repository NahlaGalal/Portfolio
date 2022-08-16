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
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill",
    },
  ],
  start_date: String,
  end_date: String,
});

const Project = model<IProjectsDoc, Model<IProjectsDoc>>(
  "Project",
  projectSchema
);

export default Project;
