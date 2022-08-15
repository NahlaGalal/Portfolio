import { Request, Response } from "express";
import Project from "../models/Projects";
import Skill from "../models/Skills";
import { IProjectsDoc } from "../types";

// Get all projects
export const getAllProjects = (req: Request, res: Response) => {
  Project.find({}, "name main_image backcolor")
    .sort({ end_date: -1 })
    .then((doc) => res.json([...doc]));
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
  const { skills_images, main_image, images } = req.files as {
    [fieldname: string]: Express.Multer.File[];
  };

  (async () => {
    let promises = skills_images.map(async (skill) => {
      const name = skill.originalname.slice(0, -4);
      let res = await Skill.findOne({ name });
      if (res) return res._id;
      else {
        let newSkill = await new Skill({
          name,
          image: skill.path,
        }).save();
        return newSkill._id;
      }
    });
    const skillsIds = await Promise.all(promises);

    await new Project({
      ...projectData,
      skills: skillsIds,
      main_image: main_image[0].path,
      images: images.map((img) => img.path),
    }).save();
    res.json({ done: true });
  })();
};
