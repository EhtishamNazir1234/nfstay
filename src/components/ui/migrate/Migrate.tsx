"use client";

import { useState } from "react";
import { ChevronDown, ArrowUpDown, DollarSign } from "lucide-react";
import { Gem } from "lucide-react";

export default function Migrate() {
  const [payingAmount, setPayingAmount] = useState("0.00");
  const [receivingAmount, setReceivingAmount] = useState("0.00");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Card - Migrate Section */}
      <div className="bg-white dark:bg-[#1a1f2e] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Migrate</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Swap your MyUSD for STAY at a fixed rate of 1:100 LPs will be swapped at the equivalent US dollar value at the time.
        </p>
        
        {/* Graphics Section */}
        <div className="relative flex items-center justify-center py-8">
          {/* Small icons above */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-md">
              <Gem className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-600 flex items-center justify-center shadow-md">
              <span className="text-white text-xs font-bold">N</span>
            </div>
          </div>
          
          {/* Main Diamond Graphic */}
          <div className="relative w-64 h-64 flex items-center justify-center mt-8">
            {/* Circular background with gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#9945FF] to-[#20E19F]"></div>
            
            {/* Main diamond icon - faceted silver diamond */}
            <div className="relative z-10 w-48 h-48 flex items-center justify-center">
              {/* Diamond shape with faceted effect */}
              <div className="relative w-40 h-40">
                {/* Main diamond body */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 dark:from-gray-500 dark:via-gray-400 dark:to-gray-600 rounded-lg transform rotate-45 shadow-2xl"></div>
                {/* Faceted top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-white to-gray-300 dark:from-gray-300 dark:to-gray-500 rounded-lg transform rotate-45 -translate-y-2"></div>
                {/* Faceted left */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-400 rounded-lg transform rotate-45 -translate-x-2"></div>
                {/* Center gem icon */}
                <Gem className="w-20 h-20 text-gray-500 dark:text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 z-10" />
              </div>
              
              {/* Small dollar sign circle in bottom right - overlapping */}
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-lg z-30 border-2 border-white dark:border-gray-800">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              
              {/* Starburst effect - small white star */}
              <div className="absolute top-6 left-6 w-5 h-5 text-white opacity-80 z-30">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card - Mint ROCK with USDC */}
      <div className="bg-white dark:bg-[#1a1f2e] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Mint ROCK with USDC</h2>
        
        <div className="space-y-4">
          {/* You're Paying Section */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">You're Paying</label>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <input
                type="text"
                value={payingAmount}
                onChange={(e) => setPayingAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-transparent text-3xl font-bold text-gray-400 dark:text-gray-500 mb-3 focus:outline-none"
              />
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0b0f1a] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
                <div className="w-5 h-5 rounded-full bg-gray-800 dark:bg-gray-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">N</span>
                </div>
                ROCKS
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Swap Icon */}
          <div className="flex justify-center -my-2 relative z-10">
            <button className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-200 dark:border-purple-700 flex items-center justify-center hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors shadow-md">
              <ArrowUpDown className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </button>
          </div>

          {/* To Receive Section */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">To Receive</label>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
              <input
                type="text"
                value={receivingAmount}
                onChange={(e) => setReceivingAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-transparent text-3xl font-bold text-gray-400 dark:text-gray-500 mb-3 focus:outline-none"
              />
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0b0f1a] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                  <DollarSign className="w-3 h-3 text-white" />
                </div>
                USDC
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mint Now Button */}
          <button className="w-full mt-6 px-6 py-4 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#FF6B9D] text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
            Mint Now
          </button>
        </div>
      </div>
    </div>
  );
}
