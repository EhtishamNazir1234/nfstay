import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import FAQ from "@/models/FAQ";
import type { FAQItemPayload } from "@/types/api";

export async function GET() {
  try {
    await connectDB();
    const faqs = await FAQ.find().sort({ createdAt: 1 }).lean();
    return NextResponse.json(faqs);
  } catch (error) {
    console.error("GET /api/faq:", error);
    return NextResponse.json(
      { error: "Failed to fetch FAQ" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body: FAQItemPayload = await request.json();
    const { question, answer } = body;
    if (!question || !answer) {
      return NextResponse.json(
        { error: "Missing required fields: question, answer" },
        { status: 400 }
      );
    }
    const faq = await FAQ.create({ question, answer });
    return NextResponse.json(faq.toObject());
  } catch (error) {
    console.error("POST /api/faq:", error);
    return NextResponse.json(
      { error: "Failed to create FAQ" },
      { status: 500 }
    );
  }
}
