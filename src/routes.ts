import { Router } from "express";
import { addExperience, getAllExperience } from "./controllers/experience";
import { getAllProjects, getProject, addProject } from "./controllers/projects";

const router = Router();

router.get("/api/", getAllProjects);

router.get("/api/project", getProject);

router.post("/api/project", addProject);

router.get("/api/experience", getAllExperience);

router.post("/api/experience", addExperience);

export default router;
