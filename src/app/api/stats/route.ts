import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import StatItem from "@/models/StatItem";
import type { StatsType } from "@/models/StatItem";

const VALID_TYPES: StatsType[] = ["dashboard", "printer", "farm"];

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") as StatsType | null;
    if (!type || !VALID_TYPES.includes(type)) {
      return NextResponse.json(
        { error: "Missing or invalid query: type (dashboard | printer | farm)" },
        { status: 400 }
      );
    }
    const stats = await StatItem.find({ statsType: type }).sort({ createdAt: 1 }).lean();
    return NextResponse.json(stats);
  } catch (error) {
    console.error("GET /api/stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
