import { Schema, model, Model, Document } from "mongoose";
import { ISkillsDoc } from "../types";

const skillsSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Skills = model<ISkillsDoc, Model<ISkillsDoc>>("Skill", skillsSchema);

export default Skills;
