import rateLimit from "express-rate-limit";

export const generationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: "Too many generation requests, please try again later" },
});
