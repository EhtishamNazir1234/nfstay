"use client";

import { useState } from "react";

export default function StartEarning() {
  const [liquidityAmount, setLiquidityAmount] = useState("");
  const [stakedRocks, setStakedRocks] = useState("987");

  return (
    <div className="bg-white dark:bg-[#1a1f2e] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9945FF] to-[#20E19F] flex items-center justify-center text-white font-bold">
            N
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Start Earning</h2>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-600 dark:text-gray-400">8 Hours EPOCH Duration</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Boardroom Regulation</div>
        </div>
      </div>

      {/* Provide Liquidity Section */}
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            Provide Liquidity To STAY/USDC
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={liquidityAmount}
              onChange={(e) => setLiquidityAmount(e.target.value)}
              placeholder="0"
              className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0b0f1a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#9945FF]"
            />
            <button className="px-4 py-2.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              MAX
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white font-semibold hover:opacity-90 transition-opacity">
              Add Liquidity
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Your Balance: <span className="font-semibold text-gray-900 dark:text-white">1,987</span>
          </p>
        </div>
      </div>

      {/* Staked ROCKS Section */}
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Staked ROCKS</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={stakedRocks}
              onChange={(e) => setStakedRocks(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0b0f1a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#9945FF]"
            />
            <button className="px-4 py-2.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              MAX
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white font-semibold hover:opacity-90 transition-opacity">
              Remove Liquidity
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Stacked: <span className="font-semibold text-gray-900 dark:text-white">987</span>
          </p>
        </div>
      </div>

      {/* Note Section */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
          Note: Deposits and withdrawals are locked for 8 hours (1 EPOCH). ROCKS and MyUSD rewards are distributed every 8 hours.{" "}
          <a href="#" className="text-[#9945FF] hover:underline font-medium">
            Learn More
          </a>
        </p>
      </div>
    </div>
  );
}
