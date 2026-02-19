import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import MarketplaceStats from "@/models/MarketplaceStats";
import NFTListing from "@/models/NFTListing";

export async function GET() {
  try {
    await connectDB();
    let stats = await MarketplaceStats.findOne().lean();
    if (!stats) {
      const count = await NFTListing.countDocuments();
      stats = await MarketplaceStats.create({
        rocksListed: count,
        totalSalesVolume: "0",
      });
      return NextResponse.json(stats.toObject());
    }
    return NextResponse.json(stats);
  } catch (error) {
    console.error("GET /api/marketplace/stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch marketplace stats" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const update: Record<string, number | string> = {};
    if (typeof body.rocksListed === "number") update.rocksListed = body.rocksListed;
    if (typeof body.totalSalesVolume === "string") update.totalSalesVolume = body.totalSalesVolume;
    if (Object.keys(update).length === 0) {
      return NextResponse.json({ error: "Provide rocksListed and/or totalSalesVolume" }, { status: 400 });
    }
    const stats = await MarketplaceStats.findOneAndUpdate(
      {},
      { $set: update },
      { new: true, upsert: true }
    ).lean();
    return NextResponse.json(stats);
  } catch (error) {
    console.error("PUT /api/marketplace/stats:", error);
    return NextResponse.json(
      { error: "Failed to update marketplace stats" },
      { status: 500 }
    );
  }
}
