"use client";

import { useState } from "react";
import AppNav from "../../../public/common/AppNav";
import { TrendingUp, Calendar, DollarSign } from "lucide-react";
import StartEarning from "@/components/ui/farm/StartEarning";
import StayEarned from "@/components/ui/farm/StayEarned";
import MintStayCard from "@/components/ui/farm/MintStayCard";

const stats = [
  {
    label: "Your Liquidity",
    value: "0.9906",
    icon: TrendingUp,
  },
  {
    label: "APR",
    value: "59.36%",
    icon: Calendar,
  },
  {
    label: "Unclaimed Rewards",
    value: "1347",
    icon: DollarSign,
  },
];

export default function FarmPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] dark:bg-[#0b0f1a] text-gray-900 dark:text-gray-100">
      <AppNav />
      
      {/* Header Section */}
      <header className="relative w-full bg-gradient-to-br from-[#2b165a] via-[#1b2a4e] to-[#0f3d3e] pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
            <div>
              <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">
                EARN STAY
              </h1>
              <p className="text-white/80 text-sm sm:text-base">
                BY PROVIDING LIQUIDITY
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              {stats.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border px-4 py-3 bg-white/10 backdrop-blur-md border-white/20 text-white"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
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
      <div className="relative -mt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <StartEarning />
              <MintStayCard
                title="Mint STAY with DEBIT CARD"
                payingLabel="You're Buying"
                payingToken="STAY"
                receivingLabel="You're Paying"
                receivingToken="EURO"
                buttonText="Mint Now"
                showCardIcons={true}
                isDarkCard={true}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <StayEarned />
              <MintStayCard
                title="Mint STAY with USDC"
                payingLabel="You're Paying"
                payingToken="STAY"
                receivingLabel="To Receive"
                receivingToken="USDC"
                buttonText="Mint Now"
                isDarkCard={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
