import { Document } from "mongoose";

export type DestinationCallback = (
  error: Error | null,
  destination: string
) => void;

interface IProjects {
  name: string;
  main_image: string;
  images?: string[];
  details: string;
  link?: string;
  code?: string;
  backcolor?: string;
  text?: string;
  skills: ISkillsDoc["_id"][];
  start_date: string;
  end_data: string;
}

export interface IProjectsDoc extends IProjects, Document {}

interface ISkills {
  name: string;
  image: string;
}

export interface ISkillsDoc extends Document, ISkills {}

interface IExperience {
  name: string;
  sub_name?: string;
  description?: string;
  start_date: string;
  end_date: string;
  certificate?: string;
  type: string;
}

export interface IExperienceDoc extends Document, IExperience {}