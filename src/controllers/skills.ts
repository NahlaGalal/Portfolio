import { Request, Response } from "express";
import Skills from "../models/Skills";

// Add skill
export const addSkill = (req: Request, res: Response) => {
  const { name } = req.body;
  const { main_image } = req.files as {
    [fieldname: string]: Express.Multer.File[];
  };

  new Skills({
    name,
    image: `data/${main_image[0].filename}`,
  })
    .save()
    .then(() => res.json({ done: true }));
};
