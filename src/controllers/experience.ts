import { Request, Response } from "express";
import { Types } from "mongoose";
import Experience from "../models/Experience";
import Skills from "../models/Skills";
import { IExperienceDoc } from "../types";

// Get experience
export const getAllExperience = (req: Request, res: Response) => {
  let experience: (IExperienceDoc & {
      _id: Types.ObjectId;
    })[],
    education: (IExperienceDoc & {
      _id: Types.ObjectId;
    })[];

  Experience.find()
    .sort({ end_date: -1, start_date: -1 })
    .then((doc) => {
      experience = doc.filter((item) => item.type === "experience");
      education = doc.filter((item) => item.type === "education");

      return Skills.find({}, "name");
    })
    .then((skills) => {
      return res.json({ experience, education, skills });
    });
};

// Add experience / education
export const addExperience = (req: Request, res: Response) => {
  new Experience(req.body).save().then(() => res.json({ done: true }));
};
