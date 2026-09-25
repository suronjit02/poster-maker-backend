import { Router } from "express";
import { createPoster } from "../controllers/posterController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", protect, createPoster);

export default router;
