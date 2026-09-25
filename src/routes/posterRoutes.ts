import { Router } from "express";
import {
  createPoster,
  getPosterById,
  getPostersByUser,
  deletePoster,
  regeneratePoster,
} from "../controllers/posterController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", protect, createPoster);
router.get("/user/:userId", protect, getPostersByUser);
router.get("/:id", protect, getPosterById);
router.post("/:id/regenerate", protect, regeneratePoster);
router.delete("/:id", protect, deletePoster);

export default router;
