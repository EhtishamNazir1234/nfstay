import mongoose, { Schema, Document, Model } from "mongoose";
import type { ClaimPayload } from "@/types/api";

export interface IClaim extends ClaimPayload, Document {}

const claimStatuses = ["Claimed", "Pending", "Rejected", "Burned"] as const;

const ClaimSchema = new Schema<IClaim>(
  {
    source: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    amount: { type: String, required: true },
    status: { type: String, enum: claimStatuses, required: true },
  },
  { timestamps: true }
);

const Claim: Model<IClaim> =
  mongoose.models.Claim ?? mongoose.model<IClaim>("Claim", ClaimSchema);
export default Claim;
