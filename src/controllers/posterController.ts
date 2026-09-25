import type { Response } from "express";
import Poster from "../models/Poster.js";
import Template from "../models/Template.js";
import { generatePoster } from "../services/posterService.js";
import { uploadToCloudinary } from "../config/cloudinary.js";
import type { AuthRequest } from "../middlewares/authMiddleware.js";

export const createPoster = async (req: AuthRequest, res: Response) => {
  try {
    const {
      templateId,
      name,
      designation,
      party,
      district,
      headlineText,
      photoUrls,
    } = req.body;

    if (!templateId || !name || !designation || !party || !headlineText) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const template = await Template.findById(templateId);
    if (!template) {
      return res.status(404).json({ message: "Template not found" });
    }

    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const poster = await Poster.create({
      userId: req.userId,
      templateId,
      formData: { name, designation, party, district, headlineText },
      uploadedPhotoUrls: photoUrls || [],
      status: "generating",
    });

    try {
      const imageBuffer = await generatePoster({
        occasionType: template.occasionType,
        headlineText,
        name,
        designation,
        photoUrls: photoUrls || [],
      });

      const generatedUrl = await uploadToCloudinary(imageBuffer);

      poster.generatedImageUrl = generatedUrl;
      poster.status = "completed";
      await poster.save();
    } catch (genError) {
      poster.status = "failed";
      await poster.save();
      console.error("Generation failed:", genError);
    }

    res.status(201).json(poster);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
