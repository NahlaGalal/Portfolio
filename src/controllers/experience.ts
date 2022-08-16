import { Request, Response } from "express";
import Experience from "../models/Experience";

// Get experience
export const getAllExperience = (req: Request, res: Response) => {
  Experience.find()
    .sort({ end_date: -1 })
    .then((doc) => res.json([...doc]));
};

// Add experience / education
export const addExperience = (req: Request, res: Response) => {
  new Experience(req.body).save().then(() => res.json({ done: true }));
};
