import { Router } from "express";
import { getAllProjects, getProject, addProject } from "./controllers/projects";

const router = Router();

router.get("/api/", getAllProjects);

router.get("/api/project", getProject);

router.post("/api/project", addProject);

export default router;
