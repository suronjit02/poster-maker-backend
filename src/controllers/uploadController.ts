import type { Request, Response } from "express";
import { uploadToCloudinary } from "../config/cloudinary.js";

export const uploadPhoto = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const imageUrl = await uploadToCloudinary(req.file.buffer);

    res.status(200).json({
      message: "Upload successful",
      url: imageUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload failed" });
  }
};