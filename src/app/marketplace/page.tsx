"use client";

import AppNav from "../../../public/common/AppNav";
import { Gem } from "lucide-react";
import TestDriveRockMarketplace from "@/components/ui/marketplace/TestDriveRockMarketplace";
import ListedNFTsMarketplace from "@/components/ui/marketplace/ListedNFTs";

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] dark:bg-[#0b0f1a] text-gray-900 dark:text-gray-100">
      <AppNav />
      
      {/* Header Section */}
      <header className="relative w-full bg-gradient-to-br from-[#2b165a] via-[#1b2a4e] to-[#0f3d3e] pt-24 pb-32 sm:pb-[12.5rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mt-6 sm:mt-10">
            <div>
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                NFT Marketplace
              </h1>
              <p className="text-white/80 text-xs sm:text-sm uppercase tracking-wide">
                BUY & SELL ROCKS
              </p>
            </div>
            <div className="flex flex-row gap-2 sm:gap-4 w-full lg:w-auto">
              {/* ROCKS Listed Card */}
              <div className="flex flex-1 items-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl border border-white/20 px-2.5 sm:px-5 py-2 sm:py-3 bg-white/10 backdrop-blur-md text-white min-w-0 sm:min-w-[220px] basis-0">
                <div className="w-6 h-6 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0">
                  <Gem className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div className="leading-tight min-w-0 flex-1 overflow-visible">
                  <div className="text-sm sm:text-lg font-semibold whitespace-nowrap">1347</div>
                  <div className="text-[10px] sm:text-xs text-white/80 whitespace-nowrap">ROCKS Listed</div>
                </div>
              </div>
              {/* Total Sales Volume Card */}
              <div className="flex flex-1 items-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl border border-white/20 px-2.5 sm:px-5 py-2 sm:py-3 bg-white/10 backdrop-blur-md text-white min-w-0 sm:min-w-[220px] basis-0">
                <div className="w-6 h-6 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-5 sm:h-5">
                    <path d="M6.99977 19H4.81477C4.49934 19.0009 4.18902 18.9203 3.91394 18.7659C3.63886 18.6116 3.40834 18.3887 3.24477 18.119C3.08768 17.8481 3.00461 17.5407 3.00391 17.2275C3.00321 16.9144 3.08489 16.6066 3.24077 16.335L7.19577 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 19H19.203C19.5169 18.9976 19.8249 18.9144 20.0974 18.7586C20.3699 18.6027 20.5978 18.3793 20.759 18.11C20.9139 17.8399 20.9954 17.5339 20.9954 17.2225C20.9954 16.9111 20.9139 16.6051 20.759 16.335L19.533 14.215" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 16L11 19L14 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.29261 13.596L7.19561 9.5L3.09961 10.598" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.34375 5.811L10.4368 3.919C10.5937 3.6454 10.8187 3.41701 11.0899 3.25599C11.3612 3.09497 11.6694 3.00679 11.9847 3C12.2977 2.99942 12.6053 3.08116 12.8766 3.23703C13.148 3.39289 13.3736 3.6174 13.5308 3.888L17.4738 10.731" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.3779 9.63301L17.4739 10.731L18.5709 6.63501" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="leading-tight min-w-0 flex-1 overflow-visible">
                  <div className="text-sm sm:text-lg font-semibold whitespace-nowrap">$12,812.98</div>
                  <div className="text-[10px] sm:text-xs text-white/80 whitespace-nowrap">Total Sales Volume</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      
      <div className="relative -mt-25 sm:-mt-28 lg:-mt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="w-full max-w-[1200px] space-y-6">
           \
            <TestDriveRockMarketplace />

           
            <ListedNFTsMarketplace />
          </div>
        </div>
      </div>
    </div>
  );
}
