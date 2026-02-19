import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { RadialChartDataPoint, RadialChartAsset } from "@/models/ChartData";

export async function GET() {
  try {
    await connectDB();
    const [dataPoints, assets] = await Promise.all([
      RadialChartDataPoint.find().sort({ createdAt: -1 }).limit(1).lean(),
      RadialChartAsset.find().sort({ createdAt: 1 }).lean(),
    ]);
    return NextResponse.json({
      data: dataPoints[0] ?? { rocks: 0, lpTokens: 0, stay: 0 },
      assets,
    });
  } catch (error) {
    console.error("GET /api/charts/radial:", error);
    return NextResponse.json(
      { error: "Failed to fetch radial chart data" },
      { status: 500 }
    );
  }
}
