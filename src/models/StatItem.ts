import mongoose, { Schema, Document, Model } from "mongoose";
import type { StatItemPayload } from "@/types/api";

export type StatsType = "dashboard" | "printer" | "farm";

export interface IStatItem extends StatItemPayload, Document {
  statsType: StatsType;
}

const StatItemSchema = new Schema<IStatItem>(
  {
    statsType: { type: String, enum: ["dashboard", "printer", "farm"], required: true },
    label: { type: String, required: true },
    value: { type: String, required: true },
    sub: { type: String },
    gradient: { type: Boolean, default: false },
    iconKey: { type: String, required: true },
  },
  { timestamps: true }
);

const StatItem: Model<IStatItem> =
  mongoose.models.StatItem ?? mongoose.model<IStatItem>("StatItem", StatItemSchema);
export default StatItem;
