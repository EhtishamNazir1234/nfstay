"use client";

import { Rocket } from "lucide-react";

export function StayEarnedSection() {
  return (
    <div className="flex h-full flex-col justify-between    ">
      {/* Stay Earned */}
      <div className=" rounded-lg relative overflow-hidden bg-[url('/assets/stayEarnedbg.png')] bg-cover bg-center bg-no-repeat min-h-[175px] p-4">
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60 z-0" />
        <div className="relative z-10 flex flex-col gap-3">
          <h2 className="text-white font-semibold text-xl sm:text-2xl">
            Stay Earned
          </h2>
          <div className="bg-white/10 w-full min-w-0 backdrop-blur-md border border-white/20 px-4 sm:px-6 py-2 rounded-lg flex justify-between items-center gap-2">
            <span className="text-white font-semibold text-sm sm:text-base">
              2.46
            </span>
            <span className="text-gray-300 font-semibold text-sm sm:text-base">
              = $1,250
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="flex-1 min-w-0 min-h-11 px-4 sm:px-7 py-2.5 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white hover:opacity-90 text-sm sm:text-base flex items-center justify-center">
              Claim & Reinvest
            </button>
            <button className="flex-1 min-w-0 min-h-11 px-4 sm:px-7 py-2.5 rounded-lg border border-white text-gray-300 font-semibold hover:bg-white hover:text-slate-900 text-sm sm:text-base flex items-center justify-center">
              Claim Only
            </button>
          </div>
        </div>
      </div>

      <div className="w-full rounded-2xl dark:border-gray-700 flex flex-col justify-between">
        <div className="flex flex-row flex-wrap justify-between items-center gap-2 mb-3 lg:mb-2 w-full">
          <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-base sm:text-lg">
            Lock STAYS
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold shrink-0">
            Your Balance:{" "}
            <span className="font-bold text-black dark:text-white">
              25,000 STAYS
            </span>
          </p>
        </div>

        <div className="relative mb-3 lg:mb-2 w-full">
          <input
            type="text"
            placeholder="0"
            className="w-full min-w-0 px-4 py-3 sm:py-4 lg:py-2.5 pr-20 rounded-lg bg-[#F1F4F9] dark:bg-[#0b0f1a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#9945FF] text-sm sm:text-base box-border"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 lg:py-1.5 rounded-lg bg-white dark:bg-[#0b0f1a] text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors text-xs sm:text-sm">
                MAX
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <button className="flex-1 min-w-0 w-full sm:w-auto px-3 py-2 lg:py-3 bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white rounded-lg font-semibold text-xs sm:text-sm border border-transparent hover:!bg-white hover:from-transparent hover:to-transparent hover:text-black hover:border-black">
            Unlock STAYS
          </button>
          <button className="flex-1 min-w-0 w-full sm:w-auto px-3 py-2 lg:py-3 bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white rounded-lg font-semibold text-xs sm:text-sm border border-transparent hover:!bg-white hover:from-transparent hover:to-transparent hover:text-black hover:border-black flex items-center justify-center gap-2">
            BOOST APR
            <Rocket className="w-4 h-4 flex-shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
