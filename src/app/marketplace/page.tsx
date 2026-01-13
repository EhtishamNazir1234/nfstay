"use client";

import AppNav from "../../../public/common/AppNav";
import { Gem, DollarSign } from "lucide-react";
import TestDriveRockMarketplace from "@/components/ui/marketplace/TestDriveRockMarketplace";
import ListedNFTs from "@/components/ui/marketplace/ListedNFTs";

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] dark:bg-[#0b0f1a] text-gray-900 dark:text-gray-100">
      <AppNav />
      
      {/* Header Section */}
      <header className="relative w-full bg-gradient-to-br from-[#2b165a] via-[#1b2a4e] to-[#0f3d3e] pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
            <div>
              <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">
                NFT Marketplace
              </h1>
              <p className="text-white/80 text-sm sm:text-base">
                BUY & SELL ROCKS
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* ROCKS Listed Card */}
              <div className="flex items-center gap-3 rounded-xl border px-4 py-3 bg-white/10 backdrop-blur-md border-white/20 text-white">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                  <Gem className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-lg font-semibold">1347</div>
                  <div className="text-xs text-white/80">ROCKS Listed</div>
                </div>
              </div>
              
              {/* Total Sales Volume Card */}
              <div className="flex items-center gap-3 rounded-xl border px-4 py-3 bg-white/10 backdrop-blur-md border-white/20 text-white">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-lg font-semibold">$12,812.98</div>
                  <div className="text-xs text-white/80">Total Sales Volume</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative -mt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-6">
            {/* Test Drive Your ROCK Section */}
            <TestDriveRockMarketplace />

            {/* Listed NFTs Section */}
            <ListedNFTs />
          </div>
        </div>
      </div>
    </div>
  );
}
