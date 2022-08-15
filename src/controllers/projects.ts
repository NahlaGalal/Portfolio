import { Request, Response } from "express";
import Project, { IProjectsDoc } from "../models/Projects";
import Skill, { ISkillsDoc } from "../models/Skills";

export const getAllProjects = (req: Request, res: Response) => {
  Project.find({}, "name main_image backcolor")
    .sort({ end_date: -1 })
    .then((doc) => res.json([...doc]));
};

export const getProject = (req: Request, res: Response) => {
  const { id } = req.query;
  let project: IProjectsDoc;

  Project.findById(id).then((doc) => {
    if (!doc) return res.json({ error: "No project" });
    project = doc;

    return Skill.find({ _id: { $in: [...doc.skills] } }).then((skills) => {
      project.skills = skills;
      return res.json({ project });
    });
  });
};
