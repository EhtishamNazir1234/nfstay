import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Property from "@/models/Property";
import type { PropertyPayload } from "@/types/api";

export async function GET() {
  try {
    await connectDB();
    const properties = await Property.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json(properties);
  } catch (error) {
    console.error("GET /api/properties:", error);
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body: PropertyPayload = await request.json();
    const { image, type, location, rating, price } = body;
    if (!image || !type || !location || rating == null || price == null) {
      return NextResponse.json(
        { error: "Missing required fields: image, type, location, rating, price" },
        { status: 400 }
      );
    }
    const property = await Property.create({
      image,
      type,
      location,
      rating: Number(rating),
      price: Number(price),
    });
    return NextResponse.json(property.toObject());
  } catch (error) {
    console.error("POST /api/properties:", error);
    return NextResponse.json(
      { error: "Failed to create property" },
      { status: 500 }
    );
  }
}
