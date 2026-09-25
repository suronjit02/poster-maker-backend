import mongoose, { Schema, Document } from "mongoose";

export interface ITemplate extends Document {
  title: string;
  occasionType: string;
  thumbnailUrl: string;
  layoutConfig: Record<string, any>;
  isActive: boolean;
}

const templateSchema = new Schema<ITemplate>({
  title: {
    type: String,
    required: true,
  },
  occasionType: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  layoutConfig: {
    type: Schema.Types.Mixed,
    default: {},
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Template = mongoose.model<ITemplate>("Template", templateSchema);

export default Template;