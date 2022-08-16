import { Schema, Model, model } from "mongoose";
import { IExperienceDoc } from "../types";

const experienceSchema: Schema = new Schema({
  name: String,
  sub_name: String,
  description: String,
  start_date: String,
  end_date: String,
  certificate: String,
  type: String
});

const Experience = model<IExperienceDoc, Model<IExperienceDoc>>(
  "Experience",
  experienceSchema
);

export default Experience;
