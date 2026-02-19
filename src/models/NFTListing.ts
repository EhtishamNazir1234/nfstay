import mongoose, { Schema, Document, Model } from "mongoose";
import type { NFTListingPayload } from "@/types/api";

export interface INFTListing extends NFTListingPayload, Document {}

const NFTListingSchema = new Schema<INFTListing>(
  {
    tokenId: { type: String, required: true, unique: true },
    creator: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String },
    title: { type: String },
  },
  { timestamps: true }
);

const NFTListing: Model<INFTListing> =
  mongoose.models.NFTListing ?? mongoose.model<INFTListing>("NFTListing", NFTListingSchema);
export default NFTListing;
