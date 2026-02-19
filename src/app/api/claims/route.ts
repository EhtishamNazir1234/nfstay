import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Claim from "@/models/Claim";
import type { ClaimPayload } from "@/types/api";

const VALID_STATUSES = ["Claimed", "Pending", "Rejected", "Burned"] as const;

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const source = searchParams.get("source");
    const limit = Math.min(Number(searchParams.get("limit")) || 50, 100);

    const filter: Record<string, string> = {};
    if (status && VALID_STATUSES.includes(status as (typeof VALID_STATUSES)[number])) {
      filter.status = status;
    }
    if (source) filter.source = source;

    const claims = await Claim.find(filter).sort({ createdAt: -1 }).limit(limit).lean();
    return NextResponse.json(claims);
  } catch (error) {
    console.error("GET /api/claims:", error);
    return NextResponse.json(
      { error: "Failed to fetch claims" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body: ClaimPayload = await request.json();
    const { source, date, time, amount, status } = body;
    if (!source || !date || !time || !amount || !status) {
      return NextResponse.json(
        { error: "Missing required fields: source, date, time, amount, status" },
        { status: 400 }
      );
    }
    if (!VALID_STATUSES.includes(status as (typeof VALID_STATUSES)[number])) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }
    const claim = await Claim.create({ source, date, time, amount, status });
    return NextResponse.json(claim.toObject());
  } catch (error) {
    console.error("POST /api/claims:", error);
    return NextResponse.json(
      { error: "Failed to create claim" },
      { status: 500 }
    );
  }
}
