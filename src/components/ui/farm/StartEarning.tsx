"use client";

import { useState } from "react";
import Image from "next/image";

export default function StartEarning() {
  const [liquidityAmount, setLiquidityAmount] = useState("");
  const [stakedRocks, setStakedRocks] = useState("987");

  return (
    <div className="bg-white flex-1 dark:bg-[#1a1f2e] rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/assets/staydollarover.png"
              alt="Start Earning Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Start Earning
          </h2>
        </div>
        <div className="text-right flex flex-col">
          <div className="text-sm font-bold dark:text-gray-400">
            8 Hours EPOCH Duration
          </div>
          <div className="text-xs font-semibold text-gray-600 mt-2 dark:text-gray-400">
            Boardroom Regulation
          </div>
        </div>
      </div>

      {/* Provide Liquidity Section */}
      <div className="space-y-4 mb-6">
        <div className="">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-gray-500 font-semibold dark:text-gray-300">
              Provide Liquidity To STAY/USDC
            </p>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
              Your Balance:
              <span className="font-bold text-sm  text-gray-900 dark:text-white">
                1,987
              </span>
            </p>
          </div>
          <div className="relative">
            <input
              type="text"
              value={liquidityAmount}
              onChange={(e) => setLiquidityAmount(e.target.value)}
              className="w-full px-4 py-4 pr-[280px] rounded-lg bg-[#F1F4F9] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#9945FF]"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2 items-center">
              <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
                <button className="px-4 py-2 rounded-lg bg-white dark:bg-[#0b0f1a] text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
                  MAX
                </button>
              </div>
              <button className="px-6 py-2.5 rounded-lg bg-[#9945FF] hover:bg-white hover:text-black text-white font-semibold transition-colors">
                Add Liquidity
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Staked ROCKS Section */}
      <div className="space-y-4 mb-6">
        <div className="">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-gray-500 font-semibold dark:text-gray-300">
              Staked ROCKS
            </p>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
              Stacked:
              <span className="font-bold text-sm text-gray-900 dark:text-white">
                987
              </span>
            </p>
          </div>
          <div className="relative">
            <input
              type="text"
              value={stakedRocks}
              onChange={(e) => setStakedRocks(e.target.value)}
              className="w-full px-4 py-4 pr-[320px] rounded-lg bg-[#F1F4F9] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#9945FF]"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2 items-center">
              <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
                <button className="px-4 py-2 rounded-lg bg-white dark:bg-[#0b0f1a] text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
                  MAX
                </button>
              </div>
              <button className="px-2 py-2.5 rounded-lg bg-[#9945FF] hover:bg-white hover:text-black text-white font-semibold transition-colors">
                Remove Liquidity
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="pt-4 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
          Note: Deposit / Withdrawals of ROCKS into/from the Boardroom will lock ROCKS for 6 epochs and
          <br />
          MyUSD rewards for 3 epochs. MyUSD rewards claim will lock staked ROCKS for 6 epochs and next
          <br />
          MyUSD rewards can only be claimed 3 epochs later.{" "}
          <a href="#" className="underline font-medium">
            Learn More
          </a>
        </p>
      </div>
    </div>
  );
}
