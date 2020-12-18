import { Request, Response, NextFunction } from "express";
import Project, { IProjectsDoc } from "./models/projects";
import Skill from "./models/skills";

export const getAllProjects = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let projects: IProjectsDoc[];
  Project.find().then((doc) => {
    projects = [...doc];
    (async () => {
      let promises = projects.map(async (project) => {
        const projectSkills = await Skill.find({
          _id: { $in: [...project.skills] },
        });
        project.skills = projectSkills;
        return project;
      });

      const response = await Promise.all(promises);
      res.json(response);
    })();
  });
};

export const getProject = (req: Request, res: Response, next: NextFunction) => {
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

export const addProjects = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const project: IProjectsDoc = req.body;
  const { skills } = project;
  (async () => {
    let promises = skills.map(async (skill) => {
      let res = await Skill.findOne({ name: skill.name });
      if (res) return res._id;
      else {
        let newSkill = await new Skill({
          name: skill.name,
          image: skill.image,
        }).save();
        return newSkill._id;
      }
    });
    const skillsIds = await Promise.all(promises);

    project.skills = skillsIds;
    await new Project({ ...project }).save();
    res.json({ done: true });
  })();
};
