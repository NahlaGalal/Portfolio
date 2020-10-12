import { Router } from "express";
import {getAllProjects, getProject} from "./controller"

const router = Router();

router.get("/", getAllProjects);

router.get("/project", getProject);

export default router;
