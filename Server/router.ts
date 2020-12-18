import { Router } from "express";
import {getAllProjects, getProject, addProjects} from "./controller"

const router = Router();

router.get("/", getAllProjects);

router.get("/project", getProject);

// router.post("/project", addProjects)

export default router;
