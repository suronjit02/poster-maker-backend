import { Router } from "express";
import {
  createPoster,
  getPosterById,
  getPostersByUser,
  deletePoster,
  regeneratePoster,
} from "../controllers/posterController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { generationLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.post("/", protect, generationLimiter, createPoster);
router.get("/user/:userId", protect, getPostersByUser);
router.get("/:id", protect, getPosterById);
router.post("/:id/regenerate", protect, generationLimiter, regeneratePoster);
router.delete("/:id", protect, deletePoster);

export default router;
