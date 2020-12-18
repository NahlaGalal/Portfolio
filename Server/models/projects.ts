import { Schema, Model, Document, model } from "mongoose";
import { ISkillsDoc } from "./skills";

interface IProjects {
  name: string;
  main_image: string;
  images?: string[];
  details: string;
  link?: string;
  code?: string;
  text: string;
  languages: {
    language: string;
    percent: number;
  }[];
  skills: ISkillsDoc["_id"][];
}

export interface IProjectsDoc extends IProjects, Document {}

interface IProjectModel extends Model<IProjectsDoc> {}

const projectSchema: Schema = new Schema({
  name: String,
  main_image: String,
  images: [String],
  details: String,
  link: String,
  code: String,
  text: String,
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
});

const Project = model<IProjectsDoc, IProjectModel>("Project", projectSchema);

export default Project;
