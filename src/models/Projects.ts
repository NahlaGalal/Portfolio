import { Schema, Model, Document, model } from "mongoose";
import { ISkillsDoc } from "./Skills";

interface IProjects {
  name: string;
  main_image: string;
  images?: string[];
  details: string;
  link?: string;
  code?: string;
  backcolor?: string;
  text?: string;
  languages: {
    language: string;
    percent: number;
  }[];
  skills: ISkillsDoc["_id"][];
  start_date: Date;
  end_data: Date;
}

export interface IProjectsDoc extends IProjects, Document {}

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
