"use client";

import { useState } from "react";
import Image from "next/image";

export default function StayEarned() {
  const [earnedAmount, setEarnedAmount] = useState("");

  return (
    <div className="bg-white space-y-8 dark:bg-[#1a1f2e] rounded-lg max-w-sm shadow-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <h2 className="text-2xl py-4 font-bold text-gray-900 dark:text-white">
          Stay Earned
        </h2>
        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/BlockChainCoin.png"
            alt="BlockChain Coin"
            width={40}
            height={40}
            className="object-contain h-12"
          />
        </div>
      </div>

      <div className="space-y-4 pt-8">
        <input
          type="text"
          value={earnedAmount}
          onChange={(e) => setEarnedAmount(e.target.value)}
          className="w-full px-4 py-4 rounded-lg bg-[#F1F4F9] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#9945FF]"
        />

        <div className="flex gap-2">
          <button className="flex-1 px-6 py-2.5 rounded-lg bg-[#9945FF] hover:bg-white hover:text-black text-white font-semibold transition-colors">
            Claim & Reinvest
          </button>
          <div className="group p-[2px] rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F] hover:bg-transparent transition-colors">
            <button className="px-4 py-2 rounded-lg bg-white dark:bg-[#0b0f1a] text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
              Withdraw
            </button>
          </div>
        </div>
      </div>

      {/* Placeholder Text */}
      <div className="pt-4 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at orci
          ac mauris rutrum placerat. Pellentesque a <br/> quam consectetur, fringilla
          diam id, egestas massa. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit
        </p>
      </div>
    </div>
  );
}
