import mongoose, { Schema, Document, Model } from "mongoose";
import type { TeamMemberPayload } from "@/types/api";

export interface ITeamMember extends TeamMemberPayload, Document {}

const TeamMemberSchema = new Schema<ITeamMember>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, required: true },
    linkedinUrl: { type: String },
  },
  { timestamps: true }
);

const TeamMember: Model<ITeamMember> =
  mongoose.models.TeamMember ?? mongoose.model<ITeamMember>("TeamMember", TeamMemberSchema);
export default TeamMember;
