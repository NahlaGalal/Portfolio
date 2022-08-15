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
  start_date: Date;
  end_data: Date;
}

export interface IProjectsDoc extends IProjects, Document {}

interface ISkills {
  name: string;
  image: string;
}

export interface ISkillsDoc extends Document, ISkills {}
