import mongoose, { Schema, Document, Model } from "mongoose";
import type { FAQItemPayload } from "@/types/api";

export interface IFAQ extends FAQItemPayload, Document {}

const FAQSchema = new Schema<IFAQ>(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { timestamps: true }
);

const FAQ: Model<IFAQ> =
  mongoose.models.FAQ ?? mongoose.model<IFAQ>("FAQ", FAQSchema);
export default FAQ;
