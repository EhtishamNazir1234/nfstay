"use client";

import AppNav from "../../../public/common/AppNav";
import StartEarning from "@/components/ui/farm/StartEarning";
import StayEarned from "@/components/ui/farm/StayEarned";
import MintCard from "@/components/ui/dashboard/MintCard";
import { farmStats as stats } from "@/data/dummy";

export default function FarmPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] pb-25 dark:bg-[#0b0f1a] text-gray-900 dark:text-gray-100">
      <AppNav />

      {/* Header Section */}
      <header className="relative w-full bg-gradient-to-br from-[#2b165a] via-[#1b2a4e] to-[#0f3d3e] pt-24 pb-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="w-[1200px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mt-10">
            <div>
              <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">
                EARN STAY
              </h1>
              <p className="text-white/80 text-sm sm:text-base">
                BY PROVIDING LIQUIDITY
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              {stats.map(({ label, value, icon }) => (
                <div
                  key={label}
                  className="relative flex items-center gap-3 rounded-lg border px-2 py-3 bg-white/10 backdrop-blur-md border-white/20 text-white"
                >
                  {/* Icon at top left of each card */}
                  <div className="absolute top-1 -left-0 w-10 h-10 flex items-center justify-center z-10">
                    {icon}
                  </div>
                  <div className="leading-tight pl-8 ">
                    <div className="text-lg font-semibold">{value}</div>
                    <div className="text-xs text-white/80">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative -mt-34 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="w-[1200px] space-y-6">
            {/* Top Row: Start Earning and Stay Earned */}
            <div className="flex gap-7">
              <StartEarning />
              <StayEarned />
            </div>

            {/* Bottom Row: Mint Cards */}
            <div className="flex gap-7">
              <MintCard
                title="Mint ROCK with DEBIT CARD"
                payingLabel="You're Paying"
                payingToken="EURO"
                receivingLabel="You're Buying"
                receivingToken="ROCKS"
                buttonText="Mint Now"
                showCardIcons={true}
              />
              <MintCard
                title="Mint STAY with USDC"
                payingLabel="You're Paying"
                payingToken="ROCKS"
                receivingLabel="To Receive"
                receivingToken="USDC"
                buttonText="Mint Now"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
