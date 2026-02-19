import mongoose, { Schema, Document, Model } from "mongoose";
import type { MarketplaceStatsPayload } from "@/types/api";

export interface IMarketplaceStats extends MarketplaceStatsPayload, Document {}

const MarketplaceStatsSchema = new Schema<IMarketplaceStats>(
  {
    rocksListed: { type: Number, required: true, default: 0 },
    totalSalesVolume: { type: String, required: true, default: "0" },
  },
  { timestamps: true }
);

// Single document for global marketplace stats (singleton)
MarketplaceStatsSchema.index({ _id: 1 }, { unique: true });

const MarketplaceStats: Model<IMarketplaceStats> =
  mongoose.models.MarketplaceStats ??
  mongoose.model<IMarketplaceStats>("MarketplaceStats", MarketplaceStatsSchema);
export default MarketplaceStats;
