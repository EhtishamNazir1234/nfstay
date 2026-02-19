import mongoose, { Schema, Document, Model } from "mongoose";
import type { PropertyPayload } from "@/types/api";

export interface IProperty extends PropertyPayload, Document {}

const PropertySchema = new Schema<IProperty>(
  {
    image: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Property: Model<IProperty> =
  mongoose.models.Property ?? mongoose.model<IProperty>("Property", PropertySchema);
export default Property;
