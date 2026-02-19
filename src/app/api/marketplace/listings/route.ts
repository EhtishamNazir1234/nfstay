import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import NFTListing from "@/models/NFTListing";
import type { NFTListingPayload } from "@/types/api";

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);
    const creator = searchParams.get("creator");
    const filter = creator ? { creator } : {};
    const listings = await NFTListing.find(filter).sort({ createdAt: -1 }).limit(limit).lean();
    return NextResponse.json(listings);
  } catch (error) {
    console.error("GET /api/marketplace/listings:", error);
    return NextResponse.json(
      { error: "Failed to fetch NFT listings" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body: NFTListingPayload = await request.json();
    const { tokenId, creator, price, image, title } = body;
    if (!tokenId || !creator || !price) {
      return NextResponse.json(
        { error: "Missing required fields: tokenId, creator, price" },
        { status: 400 }
      );
    }
    const listing = await NFTListing.create({ tokenId, creator, price, image, title });
    return NextResponse.json(listing.toObject());
  } catch (error) {
    console.error("POST /api/marketplace/listings:", error);
    return NextResponse.json(
      { error: "Failed to create NFT listing" },
      { status: 500 }
    );
  }
}
