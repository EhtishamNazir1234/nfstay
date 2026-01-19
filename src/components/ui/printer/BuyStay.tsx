"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpDown, ChevronDown, DollarSign } from "lucide-react";

export default function BuyStay() {
  const [payingAmount, setPayingAmount] = useState("0.00");
  const [receivingAmount, setReceivingAmount] = useState("0.00");

  return (
    <Card className="bg-white dark:bg-[#1a1f2e] border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Buy STAY
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-600 dark:text-gray-400">
            You're Paying
          </label>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <input
              type="text"
              value={payingAmount}
              onChange={(e) => setPayingAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-transparent text-2xl font-bold text-gray-900 dark:text-white mb-2 focus:outline-none"
            />
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0b0f1a] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
              <DollarSign className="w-4 h-4 text-blue-600" />
              USDC
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex justify-center -my-2">
          <button className="w-10 h-10 rounded-full bg-white dark:bg-[#0b0f1a] border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
            <ArrowUpDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600 dark:text-gray-400">
            To Receive
          </label>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <input
              type="text"
              value={receivingAmount}
              onChange={(e) => setReceivingAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-transparent text-2xl font-bold text-gray-900 dark:text-white mb-2 focus:outline-none"
            />
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0b0f1a] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
              <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#9945FF] to-[#20E19F] flex items-center justify-center text-white text-xs font-bold">
                N
              </span>
              STAY
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <button className="w-full mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white font-semibold hover:opacity-90 transition-opacity">
          Swap Now
        </button>
      </CardContent>
    </Card>
  );
}
