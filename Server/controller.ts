import { Request, Response, NextFunction } from "express";
import Project, { IProjectsDoc } from "./models/projects";
import Skill from "./models/skills";

export const getAllProjects = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Project.find({}, "name main_image backcolor")
    .sort({ _id: -1 })
    .then((doc) => res.json([...doc]));
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
  // console.log(JSON.parse(req.body.languages)[0])
  // console.log(req.files)
  // res.json({ body: req.body });
  const projectData = req.body;
  const projectFiles: any = req.files;
  const skills_images: any[] = projectFiles.skills_images;
  const main_image: any[] = projectFiles.main_image;
  const images: any[] = projectFiles.images;

  (async () => {
    let promises = skills_images.map(async (skill) => {
      const skillName = skill.originalname.slice(0, -4);
      let res = await Skill.findOne({ name: skillName });
      if (res) return res._id;
      else {
        let newSkill = await new Skill({
          name: skillName,
          image: skill.path,
        }).save();
        return newSkill._id;
      }
    });
    const skillsIds = await Promise.all(promises);

    projectData.skills = skillsIds;
    projectData.languages = JSON.parse(projectData.languages);

    await new Project({
      ...projectData,
      main_image: main_image[0].path,
      images: images.map((img) => img.path),
    }).save();
    res.json({ done: true });
  })();
};
