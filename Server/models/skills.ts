import * as mongoose from "mongoose";

interface ISkills {
  name: string;
  image: string;
}

export interface ISkillsDoc extends mongoose.Document, ISkills {};

interface ISkillsModel extends mongoose.Model<ISkillsDoc> {
  build(attr: ISkills): ISkillsDoc;
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

skillsSchema.statics.build = (attr: ISkills) => new Skills(attr);

const Skills = mongoose.model<ISkillsDoc, ISkillsModel>("Skill", skillsSchema);

export default Skills;