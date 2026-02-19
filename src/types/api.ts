/**
 * API-facing types (no React nodes). Used by MongoDB models and API responses.
 */

export type ClaimStatus = "Claimed" | "Pending" | "Rejected" | "Burned";

export interface StatItemPayload {
  label: string;
  value: string;
  sub?: string;
  gradient?: boolean;
  iconKey: string; // maps to icon component on frontend
}

export interface FAQItemPayload {
  question: string;
  answer: string;
}

export interface ClaimPayload {
  source: string;
  date: string;
  time: string;
  amount: string;
  status: ClaimStatus;
}

export interface PropertyPayload {
  image: string;
  type: string;
  location: string;
  rating: number;
  price: number;
}

export interface ChartDataPointPayload {
  date: string;
  mobile?: number;
  desktop?: number;
  rocks?: number;
  lpTokens?: number;
  stay?: number;
}

export interface RadialChartAssetPayload {
  name: string;
  percentage: number;
  color: string;
}

export interface RadialChartDataPointPayload {
  rocks: number;
  lpTokens: number;
  stay: number;
}

export interface TeamMemberPayload {
  name: string;
  role: string;
  image: string;
  linkedinUrl?: string;
}

export interface NFTListingPayload {
  tokenId: string;
  creator: string;
  price: string;
  image?: string;
  title?: string;
}

export interface MarketplaceStatsPayload {
  rocksListed: number;
  totalSalesVolume: string;
}
