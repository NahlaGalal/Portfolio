import { Router } from "express";
import { getAllProjects, getProject, addProject } from "./controllers/projects";

const router = Router();

router.get("/", getAllProjects);

router.get("/project", getProject);

router.post("/project", addProject);

export default router;
