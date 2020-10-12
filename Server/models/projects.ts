import * as mongoose from "mongoose";
import { ISkills } from "./skills";

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
  skills: ISkills[];
}

const projectSchema: mongoose.Schema = new mongoose.Schema({
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
      id: mongoose.Schema.Types.ObjectId,
      // ref: "skill",
    },
  ],
});

const Project = mongoose.model("Project", projectSchema); 

const build = (attr: IProjects) => new Project(attr);

export default Project;
