import { Request, Response } from "express";
import Project from "../models/Projects";

export const getAllProjects = (req: Request, res: Response) => {
  Project.find({}, "name main_image backcolor")
    .sort({ end_date: -1 })
    .then((doc) => res.json([...doc]));
};
