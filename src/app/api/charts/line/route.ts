import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { ChartDataPoint } from "@/models/ChartData";

export async function GET() {
  try {
    await connectDB();
    const data = await ChartDataPoint.find({ chartType: "line" })
      .sort({ date: 1 })
      .lean();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET /api/charts/line:", error);
    return NextResponse.json(
      { error: "Failed to fetch line chart data" },
      { status: 500 }
    );
  }
}
