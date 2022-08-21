import { Request, Response } from "express";
import mongoose from "mongoose";
import Project from "../models/Projects";
import Skill from "../models/Skills";
import { IProjectsDoc } from "../types";

// Get all projects
export const getAllProjects = (req: Request, res: Response) => {
  const { page = 1 } = req.query;

  Project.count().then(async (count) => {
    const pages: number = Math.ceil(count / 3);
    const doc = await Project.find({}, "name main_image backcolor")
      .sort({ end_date: -1 })
      .limit(3)
      .skip((+page - 1) * 3);
    return res.json({ data: doc, pages });
  });
};

// Get project
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

// Add a project
export const addProject = (req: Request, res: Response) => {
  const projectData = req.body;
  const { main_image, images } = req.files as {
    [fieldname: string]: Express.Multer.File[];
  };

  (async () => {
    await new Project({
      ...projectData,
      skills: projectData.skills?.map(
        (skill: string) => new mongoose.Types.ObjectId(skill)
      ),
      main_image: `data/${main_image[0].filename}`,
      images: [
        `data/${main_image[0].filename}`,
        ...(images || []).map((img) => `data/${img.filename}`),
      ],
    }).save();
    res.json({ done: true });
  })();
};
