import { Router } from "express";
import upload from "../middlewares/multerMiddleware.js";
import { uploadPhoto } from "../controllers/uploadController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", protect, upload.single("photo"), uploadPhoto);

export default router;
