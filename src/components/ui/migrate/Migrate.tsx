"use client";

import { DollarSign } from "lucide-react";
import { Gem } from "lucide-react";
import MintCard from "@/components/ui/dashboard/MintCard";

export default function Migrate() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white  dark:bg-[#1a1f2e] "
      style={{
        width: "1200px",
        height: "377px",
        borderRadius: "11px",
      }}
    >
      <div className="bg-white dark:bg-[#1a1f2e] rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-6 rounded-t-2xl">
          <h2 className="text-3xl font-bold text-white">Migrate</h2>
        </div>

        <div className="p-8">
          <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Swap your MyUSD for STAY at a fixed rate of 1:100 LPs will be
            swapped at the equivalent US dollar value at the time.
          </p>

          <div className="relative flex items-center justify-center py-8">
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

            <div className="relative w-64 h-64 flex items-center justify-center mt-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#9945FF] to-[#20E19F]"></div>

              <div className="relative z-10 w-48 h-48 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 dark:from-gray-500 dark:via-gray-400 dark:to-gray-600 rounded-lg transform rotate-45 shadow-2xl"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-white to-gray-300 dark:from-gray-300 dark:to-gray-500 rounded-lg transform rotate-45 -translate-y-2"></div>

                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-400 rounded-lg transform rotate-45 -translate-x-2"></div>

                  <Gem className="w-20 h-20 text-gray-500 dark:text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 z-10" />
                </div>

                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-lg z-30 border-2 border-white dark:border-gray-800">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>

                <div className="absolute top-6 left-6 w-5 h-5 text-white opacity-80 z-30">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MintCard
        title="Mint ROCK with USDC"
        payingLabel="You're Paying"
        payingToken="ROCKS"
        receivingLabel="To Receive"
        receivingToken="USDC"
        buttonText="Mint Now"
        isWhiteCard={true}
      />
    </div>
  );
}
