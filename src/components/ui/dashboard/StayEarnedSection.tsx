"use client";

import { Rocket } from "lucide-react";

export function StayEarnedSection() {
  return (
    <div className="flex flex-col justify-between w-[377px] h-[350px]">
      <div className="rounded-lg p-4 pt-4 border border-slate-700 relative overflow-hidden bg-[url('/assets/stayEarnedbg.png')] bg-cover bg-center bg-no-repeat h-[175px]">
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60 z-0"></div>

        <div className="relative z-10">
          <h2 className="text-white font-semibold text-2xl mb-4">
            Stay Earned
          </h2>

          <div className="flex items-center pb-2 justify-between">
            <div className="bg-white/10 w-full backdrop-blur-md border border-white/20 px-6 py-2 rounded-lg flex justify-between items-center">
              <span className="text-white font-semibold">2.46</span>
              <span className="text-gray-300 font-semibold">= $1,250</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 px-7 bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white py-2 rounded-lg hover:opacity-90">
              Claim & Reinvest
            </button>
            <button className="flex-1 border-1 border-white text-gray-300 rounded-lg font-semibold hover:bg-white hover:text-slate-900 ">
              Claim Only
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-6 h-[175px]">
        <div className="flex justify-between ">
          <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-lg mb-2">
            Lock STAYS
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold ">
            Your Balance:
            <span className="font-bold text-black dark:text-white">
              25,000 STAYS
            </span>
          </p>
        </div>

        <div className="relative mb-3">
          <input
            type="text"
            placeholder="0"
            className="w-full px-4 py-4 pr-20 rounded-lg bg-[#F1F4F9] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#9945FF]"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
              <button className="px-4 py-2 rounded-lg bg-white dark:bg-[#0b0f1a] text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
                MAX
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg  text-sm border-1 border-transparent hover:!bg-white hover:from-transparent hover:to-transparent hover:text-black hover:border-black">
            Unlock STAYS
          </button>
          <button className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg  text-sm border-1 border-transparent hover:!bg-white hover:from-transparent hover:to-transparent hover:text-black hover:border-black flex items-center justify-center gap-2">
            BOOST APR
            <Rocket className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
