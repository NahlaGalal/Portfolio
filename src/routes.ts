import { Router } from "express";
import { addExperience, getAllExperience } from "./controllers/experience";
import { getAllProjects, getProject, addProject } from "./controllers/projects";
import { addSkill, getSkills } from "./controllers/skills";

const router = Router();

router.get("/api/", getAllProjects);

router.get("/api/project", getProject);

router.post("/api/project", addProject);

router.get("/api/experience", getAllExperience);

router.post("/api/experience", addExperience);

router.get("/api/skill", getSkills);

router.post("/api/skill", addSkill);

export default router;
