import express from "express";
import {
  createDemo,
  listDemos,
  updateDemoStatus,
} from "../controllers/demoController.js";

import { requireAuth, requireRole } from "../middleware/auth.js";

const router = express.Router();

router.use(requireAuth);
router.use(requireRole("ADMIN"));

router.post("/", createDemo);
router.get("/", listDemos);
router.patch("/:demoId", updateDemoStatus);

export default router;
