import { Request, Response, NextFunction } from "express";

export const getAllProjects = (req: Request, res: Response, next: NextFunction) => {
    res.send("Projects");
};

export const getProject = (req: Request, res: Response, next: NextFunction) => {
    res.send("Project");
}