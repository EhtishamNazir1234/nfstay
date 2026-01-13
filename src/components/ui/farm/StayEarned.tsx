"use client";

import { useState } from "react";

export default function StayEarned() {
  const [earnedAmount, setEarnedAmount] = useState("");

  return (
    <div className="bg-white dark:bg-[#1a1f2e] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9945FF] to-[#20E19F] flex items-center justify-center text-white font-bold">
          N
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Stay Earned</h2>
      </div>

      <div className="space-y-4 mb-6">
        <input
          type="text"
          value={earnedAmount}
          onChange={(e) => setEarnedAmount(e.target.value)}
          placeholder="0.00"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0b0f1a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#9945FF]"
        />
        
        <div className="flex gap-2">
          <button className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white font-semibold hover:opacity-90 transition-opacity">
            Claim & Reinvest
          </button>
          <button className="flex-1 px-6 py-3 rounded-lg bg-white dark:bg-[#0b0f1a] border-2 border-[#9945FF] text-[#9945FF] font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            Withdraw
          </button>
        </div>
      </div>

      {/* Placeholder Text */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
    </div>
  );
}
