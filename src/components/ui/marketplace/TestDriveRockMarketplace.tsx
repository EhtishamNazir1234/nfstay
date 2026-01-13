"use client";

import { useState, useMemo } from "react";
import { Rocket, Gem } from "lucide-react";

export default function TestDriveRockMarketplace() {
  const [numberOfRocks, setNumberOfRocks] = useState(293);
  const [priceOfRocks, setPriceOfRocks] = useState(1212);
  const [priceOfStay, setPriceOfStay] = useState(1212);
  const [stakingPeriod, setStakingPeriod] = useState(12);
  const [boostedApr, setBoostedApr] = useState(true);

  // Calculate values based on inputs
  const calculations = useMemo(() => {
    const baseApr = boostedApr ? 36.4 : 25.0;
    const annualRate = baseApr / 100;
    const totalMonths = stakingPeriod;
    
    // Calculate rock value
    const rockValue = numberOfRocks * priceOfRocks;
    
    // Calculate total returns over staking period
    const monthlyRate = annualRate / 12;
    const totalReturns = rockValue * monthlyRate * totalMonths;
    const totalRoi = rockValue + totalReturns;
    
    // Monthly returns
    const monthlyReturns = rockValue * monthlyRate;
    
    // Progress percentage for radial graph (based on staking period out of 36 months max)
    const progressPercent = Math.min((stakingPeriod / 36) * 100, 100);

    return {
      totalRoi: Math.max(totalRoi, rockValue),
      apr: baseApr,
      monthlyReturns: Math.max(monthlyReturns, 0),
      progressPercent,
      rockValue,
    };
  }, [numberOfRocks, priceOfRocks, stakingPeriod, boostedApr]);

  return (
    <div className="bg-white dark:bg-[#1a1f2e] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Test Drive Your ROCK
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Boosted APR</span>
          <button
            onClick={() => setBoostedApr(!boostedApr)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              boostedApr ? "bg-[#9945FF]" : "bg-gray-300 dark:bg-gray-600"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                boostedApr ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section - Inputs */}
        <div className="space-y-6">
          {/* Number Of ROCKS Slider */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Number of ROCKS
            </label>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="10000"
                value={numberOfRocks}
                onChange={(e) => setNumberOfRocks(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #9945FF 0%, #20E19F ${(numberOfRocks / 10000) * 100}%, #e5e7eb ${(numberOfRocks / 10000) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>0</span>
                <span>10,000</span>
              </div>
              <div
                className="absolute -top-8 transform -translate-x-1/2"
                style={{ left: `${(numberOfRocks / 10000) * 100}%` }}
              >
                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white text-sm font-semibold whitespace-nowrap">
                  {numberOfRocks.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Price Of ROCKS Slider */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Price of ROCKS
            </label>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="10000"
                value={priceOfRocks}
                onChange={(e) => setPriceOfRocks(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #9945FF 0%, #20E19F ${(priceOfRocks / 10000) * 100}%, #e5e7eb ${(priceOfRocks / 10000) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>$0</span>
                <span>$10,000</span>
              </div>
              <div
                className="absolute -top-8 transform -translate-x-1/2"
                style={{ left: `${(priceOfRocks / 10000) * 100}%` }}
              >
                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white text-sm font-semibold whitespace-nowrap">
                  ${priceOfRocks.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Price Of STAY Slider */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Price of STAY
            </label>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="10000"
                value={priceOfStay}
                onChange={(e) => setPriceOfStay(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #9945FF 0%, #20E19F ${(priceOfStay / 10000) * 100}%, #e5e7eb ${(priceOfStay / 10000) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>$0</span>
                <span>$10,000</span>
              </div>
              <div
                className="absolute -top-8 transform -translate-x-1/2"
                style={{ left: `${(priceOfStay / 10000) * 100}%` }}
              >
                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white text-sm font-semibold whitespace-nowrap">
                  ${priceOfStay.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Staking Period */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Staking Period (Months)
            </label>
            <div className="flex gap-2">
              {[12, 24, 36].map((period) => (
                <button
                  key={period}
                  onClick={() => setStakingPeriod(period)}
                  className={`flex-1 px-4 py-3 rounded-full font-semibold transition-all ${
                    stakingPeriod === period
                      ? "bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white"
                      : "bg-gray-100 dark:bg-[#0b0f1a] border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#1a1f2e]"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Radial Graph */}
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* SVG Radial Progress */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
              {/* Background Circle */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="12"
              />
              {/* Progress Circle */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="url(#gradient-marketplace-roi)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 80}`}
                strokeDashoffset={`${2 * Math.PI * 80 * (1 - calculations.progressPercent / 100)}`}
                className="transition-all duration-300"
              />
              <defs>
                <linearGradient id="gradient-marketplace-roi" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9945FF" />
                  <stop offset="100%" stopColor="#20E19F" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-center">
                {/* Diamond Icon */}
                <div className="mb-2">
                  <Gem className="w-6 h-6 mx-auto text-green-500" />
                </div>
                <div className="text-4xl font-bold text-[#9945FF] mb-1">
                  ${Math.round(calculations.totalRoi).toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 px-2">
                  Total ROI Based On Staking Period + Rock Value
                </div>
                <div className="flex items-center justify-center gap-6">
                  <div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {calculations.apr.toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">APR</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      ${Math.round(calculations.monthlyReturns).toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Monthly Returns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          The number of STAYS to be received is fixed. However, the dollar value and APR will vary and depend on the price of STAY.
        </p>
      </div>
    </div>
  );
}
