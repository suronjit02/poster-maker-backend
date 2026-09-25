import type { Request, Response } from "express";
import Template from "../models/Template.js";

export const getTemplates = async (req: Request, res: Response) => {
  try {
    const { occasion } = req.query;

    const filter: Record<string, unknown> = { isActive: true };
    if (occasion) {
      filter.occasionType = occasion;
    }

    const templates = await Template.find(filter);
    res.status(200).json(templates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getTemplateById = async (req: Request, res: Response) => {
  try {
    const template = await Template.findById(req.params.id);

    if (!template) {
      return res.status(404).json({ message: "Template not found" });
    }

    res.status(200).json(template);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
