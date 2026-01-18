import express from "express";
import {
  funnelStats,
  coachStats,
  adminStats,
} from "../controllers/analyticsController.js";

import { requireAuth, requireRole } from "../middleware/auth.js";

const router = express.Router();

router.use(requireAuth);
router.use(requireRole("ADMIN"));

router.get("/funnel", funnelStats);
router.get("/coach", coachStats);
router.get("/admin", adminStats);

export default router;
