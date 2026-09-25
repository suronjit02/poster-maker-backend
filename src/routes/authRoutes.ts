import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { protect, type AuthRequest } from "../middlewares/authMiddleware.js";
import type { Response } from "express";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/me", protect, (req: AuthRequest, res: Response) => {
  res.status(200).json({
    message: "You are authenticated.",
    userId: req.userId,
    role: req.role,
  });
});

export default router;
