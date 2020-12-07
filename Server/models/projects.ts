import { Schema, Model, Document, model } from "mongoose";
import { ISkillsDoc } from "./skills";

interface IProjects {
  name: string;
  "main-image": string;
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

interface IProjectsDoc extends IProjects, Document {}

interface IProjectModel extends Model<IProjectsDoc> {}

const projectSchema: Schema = new Schema({
  name: String,
  "main-image": String,
  images: [String],
  details: String,
  link: String,
  code: String,
  text: String,
  Languages: [
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
      id: Schema.Types.ObjectId,
      ref: "skill",
    },
  ],
});

const Project = model<IProjectsDoc, IProjectModel>("Project", projectSchema);

export default Project;
