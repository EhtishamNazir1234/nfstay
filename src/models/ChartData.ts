import mongoose, { Schema, Document, Model } from "mongoose";
import type { ChartDataPointPayload, RadialChartAssetPayload, RadialChartDataPointPayload } from "@/types/api";

export type ChartType = "portfolio" | "line" | "radial" | "radialAssets";

export interface IChartDataPoint extends ChartDataPointPayload, Document {
  chartType: "portfolio" | "line";
}

export interface IRadialChartDataPoint extends RadialChartDataPointPayload, Document {}

export interface IRadialChartAsset extends RadialChartAssetPayload, Document {}

const ChartDataPointSchema = new Schema<IChartDataPoint>(
  {
    chartType: { type: String, enum: ["portfolio", "line"], required: true },
    date: { type: String, required: true },
    mobile: { type: Number },
    desktop: { type: Number },
    rocks: { type: Number },
    lpTokens: { type: Number },
    stay: { type: Number },
  },
  { timestamps: true }
);

const RadialChartDataPointSchema = new Schema<IRadialChartDataPoint>(
  {
    rocks: { type: Number, required: true },
    lpTokens: { type: Number, required: true },
    stay: { type: Number, required: true },
  },
  { timestamps: true }
);

const RadialChartAssetSchema = new Schema<IRadialChartAsset>(
  {
    name: { type: String, required: true },
    percentage: { type: Number, required: true },
    color: { type: String, required: true },
  },
  { timestamps: true }
);

export const ChartDataPoint: Model<IChartDataPoint> =
  mongoose.models.ChartDataPoint ??
  mongoose.model<IChartDataPoint>("ChartDataPoint", ChartDataPointSchema);

export const RadialChartDataPoint: Model<IRadialChartDataPoint> =
  mongoose.models.RadialChartDataPoint ??
  mongoose.model<IRadialChartDataPoint>("RadialChartDataPoint", RadialChartDataPointSchema);

export const RadialChartAsset: Model<IRadialChartAsset> =
  mongoose.models.RadialChartAsset ??
  mongoose.model<IRadialChartAsset>("RadialChartAsset", RadialChartAssetSchema);
