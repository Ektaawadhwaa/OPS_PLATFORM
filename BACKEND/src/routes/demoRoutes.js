import express from "express";
import {
  createDemo,
  listDemos,
  updateDemoStatus,
  getDemoById,
  assignCoachToDemo 
} from "../controllers/demoController.js";

import { requireAuth, requireRole } from "../middleware/auth.js";

const router = express.Router();

router.use(requireAuth);
router.use(requireRole("ADMIN"));

router.post("/", createDemo);
router.get("/", listDemos);
router.get("/:demoId", getDemoById);
router.patch("/:demoId", updateDemoStatus);
router.patch(
  "/:demoId/assign-coach",
  requireAuth,
  requireRole("ADMIN"),
  assignCoachToDemo
);

export default router;
