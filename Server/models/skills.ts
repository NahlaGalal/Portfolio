import { Schema, model, Model, Document } from "mongoose";

interface ISkills {
  name: string;
  image: string;
}

export interface ISkillsDoc extends Document, ISkills {}

interface ISkillsModel extends Model<ISkillsDoc> {}

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

const Skills = model<ISkillsDoc, ISkillsModel>("Skill", skillsSchema);

export default Skills;
