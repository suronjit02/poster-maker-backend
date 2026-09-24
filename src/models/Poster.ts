import mongoose, { Schema, Document, Types } from "mongoose";

interface IFormData {
  name: string;
  designation: string;
  party: string;
  district?: string;
  headlineText?: string;
}

export interface IPoster extends Document {
  userId: Types.ObjectId;
  templateId: Types.ObjectId;
  formData: IFormData;
  uploadedPhotoUrls: string[];
  generatedImageUrl?: string;
  status: "draft" | "generating" | "completed" | "failed";
  createdAt: Date;
}

const posterSchema = new Schema<IPoster>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  templateId: {
    type: Schema.Types.ObjectId,
    ref: "Template",
    required: true,
  },
  formData: {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    party: { type: String, required: true },
    district: { type: String },
    headlineText: { type: String },
  },
  uploadedPhotoUrls: {
    type: [String],
    default: [],
  },
  generatedImageUrl: {
    type: String,
  },
  status: {
    type: String,
    enum: ["draft", "generating", "completed", "failed"],
    default: "draft",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Poster = mongoose.model<IPoster>("Poster", posterSchema);

export default Poster;
