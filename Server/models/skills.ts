import * as mongoose from "mongoose";

export interface ISkills {
  name: string;
  image: string;
}

const skillsSchema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Skills = mongoose.model("Skill", skillsSchema);

export const build = (attr: ISkills) => new Skills(attr);

export default Skills;