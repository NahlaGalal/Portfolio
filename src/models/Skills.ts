import { Schema, model, Model, Document } from "mongoose";

interface ISkills {
  name: string;
  image: string;
}

export interface ISkillsDoc extends Document, ISkills {}

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
