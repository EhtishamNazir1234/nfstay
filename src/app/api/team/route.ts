import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import TeamMember from "@/models/TeamMember";
import type { TeamMemberPayload } from "@/types/api";

export async function GET() {
  try {
    await connectDB();
    const members = await TeamMember.find().sort({ createdAt: 1 }).lean();
    return NextResponse.json(members);
  } catch (error) {
    console.error("GET /api/team:", error);
    return NextResponse.json(
      { error: "Failed to fetch team members" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body: TeamMemberPayload = await request.json();
    const { name, role, image, linkedinUrl } = body;
    if (!name || !role || !image) {
      return NextResponse.json(
        { error: "Missing required fields: name, role, image" },
        { status: 400 }
      );
    }
    const member = await TeamMember.create({ name, role, image, linkedinUrl });
    return NextResponse.json(member.toObject());
  } catch (error) {
    console.error("POST /api/team:", error);
    return NextResponse.json(
      { error: "Failed to create team member" },
      { status: 500 }
    );
  }
}
