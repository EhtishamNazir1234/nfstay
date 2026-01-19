"use client";

import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { FireIcon } from "../../../../public/assets/icons/icons";
import { incineratorClaims as SAMPLE_CLAIMS } from "@/data/dummy";
const getStatusColor = (status: string) => {
  switch (status) {
    case "Claimed":
      return "bg-purple-100 text-purple-500";
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "Rejected":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function Incinerator() {
  return (
    <div className="relative overflow-hidden mt-8 lg:mt-[35px] flex flex-col w-full max-w-[1200px] h-auto min-h-[687px] rounded-[28px] opacity-100 mx-auto">
      {/* Top Border Gradient */}

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#1b2a4e] to-[#0f3d3e]" />

      {/* Top Section - Content Container */}
      <div className="relative flex-1 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 py-8 pt-15">
        {/* Left Section - Text and Button */}
        <div className="flex flex-col justify-center z-10 w-full lg:max-w-[500px] mb-6 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">Incinerator</h2>
          <p className="text-white text-sm sm:text-base mb-6 lg:mb-8 leading-relaxed w-full lg:max-w-[400px]">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc At
            Orci Ac Mauris Rutrum Placerat.
          </p>
          <div className="relative w-[139px] h-[47px] rounded-xl p-[2px] bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
            <button className="w-full h-full rounded-[10.5px] py-[18px] px-[30px] transition-opacity hover:opacity-90 bg-[rgba(0,0,0,0.3)] backdrop-blur-[10px] flex items-center justify-center">
              <span className="text-gray-200 whitespace-nowrap text-base">
                CTA Button
              </span>
            </button>
          </div>
        </div>

        {/* Right Section - Glassmorphism Card */}
        <div className="relative z-10 w-full lg:w-auto">
          <div className="relative rounded-2xl p-6 sm:p-8 lg:p-10 bg-white/[0.08] backdrop-blur-[25px] border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex items-center gap-2 sm:gap-4 mb-3">
              {/* 1st: In the main glassmorphism card, to the left of numbers */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0">
                <Image
                  src="/assets/fire.png"
                  alt="fire"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight">
                1,833,234
              </span>
            </div>
            <div className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium ml-8 sm:ml-12 lg:ml-16">
              Tokens Burned
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Transaction Table */}
      <div className="relative px-4 sm:px-6 lg:px-12 pb-8 lg:pb-16 z-10">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <colgroup>
              <col className="w-12" />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-300 bg-white/10 backdrop-blur-[10px] rounded-tl-lg rounded-bl-lg">
                  #
                </th>
                <th className="px-6 py-3 text-left text-sm text-gray-300 bg-white/10 backdrop-blur-[10px]">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-sm text-gray-300 bg-white/10 backdrop-blur-[10px]">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm text-gray-300 bg-white/10 backdrop-blur-[10px]">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-sm text-gray-300 bg-white/10 backdrop-blur-[10px] rounded-tr-lg rounded-br-lg">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_CLAIMS.map((claim, index) => (
                <tr
                  key={claim.id}
                  className="border-b border-white/5 last:border-0 bg-transparent"
                >
                  <td className="px-6 py-2 text-white text-xs">{index + 1}</td>
                  <td className="px-6 py-2 text-sm text-white">
                    {claim.source}
                  </td>
                  <td className="px-6 py-2 text-sm text-white">
                    <span>{claim.date}</span>
                    <span className="text-white/70">{` - ${claim.time}`}</span>
                  </td>
                  <td className="px-6 py-2 text-sm text-white">
                    {claim.amount}
                  </td>
                  <td className="px-6 py-2">
                    <span className="inline-block px-4 py-2 rounded-full text-white text-xs bg-gradient-to-r from-[#FF8C42] to-[#FF6B35]">
                      {claim.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
