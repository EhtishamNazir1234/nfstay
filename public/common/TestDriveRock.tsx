"use client";

import { useState, useMemo, useId } from "react";

interface ValueSliderProps {
  label: string;
  minLabel: string;
  maxLabel: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  prefix?: string;
}

function ValueSlider({
  label,
  minLabel,
  maxLabel,
  value,
  onChange,
  min = 0,
  max = 10000,
  prefix = "",
}: ValueSliderProps) {
  const caretId = `caret-${useId().replace(/:/g, "")}`;
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0;

  return (
    <div className="w-full min-h-[80px] md:min-h-[99px] opacity-100 flex flex-col space-y-4 md:space-y-6 lg:space-y-10">
      <label className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative top-3">
        <div className="absolute -top-8 md:-top-9 left-0 right-0 flex justify-between text-xs md:text-sm font-semibold text-gray-400 dark:text-gray-400 pointer-events-none">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-thumb]:h-0 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-0 [&::-moz-range-thumb]:h-0"
          style={{
            background: `linear-gradient(to right, #1f2937 0%, #1f2937 ${pct}%, #e5e7eb ${pct}%, #e5e7eb 100%)`,
          }}
        />
        <div
          className="absolute -translate-x-1/2 -top-0 pointer-events-none"
          style={{ left: `${pct}%` }}
        >
          <SliderHandle />
        </div>
        <div
          className="absolute -top-6 md:-top-10 transform -translate-x-1/2"
          style={{ left: `${pct}%` }}
        >
          <div className="relative">
            <div className="px-2 md:px-3 py-1 md:py-1.5 rounded-sm bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white text-xs md:text-sm font-semibold whitespace-nowrap shadow-lg">
              {prefix}
              {value.toLocaleString()}
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-[1px]">
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0L6 6L12 0H0Z"
                  fill={`url(#${caretId})`}
                />
                <defs>
                  <linearGradient
                    id={caretId}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#9945FF" />
                    <stop offset="100%" stopColor="#20E19F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ROIIndicatorProps {
  amount: string;
  title: string;
  apr: string;
  monthlyReturns: string;
  description: string;
  progressPercentage?: number;
}

function ROIIndicator({
  amount,
  apr,
  monthlyReturns,
  description,
  progressPercentage = 5,
}: ROIIndicatorProps) {
  const circumference = 2 * Math.PI * 105;
  const strokeDashoffset =
    circumference - (progressPercentage / 100) * circumference;
  const uniqueId = `progressGradient-${Math.random().toString(6).substr(2, 9)}`;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
        <svg className="absolute w-full h-full" viewBox="0 0 220 220">
          <circle
            cx="110"
            cy="110"
            r="95"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <defs>
            <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#20E19F" />
              <stop offset="100%" stopColor="#9945FF" />
            </linearGradient>
          </defs>
          <circle
            cx="110"
            cy="110"
            r="95"
            fill="none"
            stroke={`url(#${uniqueId})`}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="butt"
            className="transition-all duration-1000"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "110px 110px",
            }}
          />
        </svg>

        <div className="absolute flex flex-col items-center justify-center">
          <div className="mt-3 md:mt-0 mb-2 md:mb-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-10 md:h-10"
            >
              <path
                d="M9.99967 5H29.9997L36.6663 15L19.9997 36.6667L3.33301 15L9.99967 5Z"
                fill="#20E19F"
                stroke="#20E19F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.25 4L13 14.7368L20 38L27 14.7368L21.75 4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 15H38"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-600 mb-2 text-center">
            {amount}
          </div>

          <div className="text-[9px] md:text-xs text-gray-500 font-semibold dark:text-gray-400 text-center mb-0.5 md:mb-1">
            Total ROI Based On Staking
          </div>
          <div className="text-[9px] md:text-xs text-gray-500 dark:text-gray-400 text-center font-semibold mb-2 md:mb-6">
            Period + Rock Value
          </div>

          <div className="flex gap-2 md:gap-6 mb-2 md:mb-6 text-center">
            <div className="flex-shrink-0">
              <div className="text-xs md:text-lg font-semibold text-gray-900 dark:text-white">{apr}</div>
              <p className="text-[9px] md:text-xs text-gray-500 dark:text-gray-400 mt-0.5 md:mt-1">APR</p>
            </div>
            <div className="flex-shrink-0 min-w-0">
              <div className="text-xs md:text-lg font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                {monthlyReturns}
              </div>
              <p className="text-[9px] md:text-xs text-gray-500 dark:text-gray-400 mt-0.5 md:mt-1 whitespace-nowrap">
                Monthly Returns
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 text-center mt-2 md:mt-3 max-w-sm leading-relaxed px-2">
        {description}
      </p>
    </div>
  );
}

const SliderHandle = () => (
  <svg
    width="28"
    height="22"
    viewBox="0 0 28 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="25.5"
      height="20"
      rx="10"
      fill="#01060F"
      stroke="white"
      strokeWidth="2"
    />
    <g transform="translate(8.5, 5.5)">
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        <path
          d="M9.625 1.83322L9.625 9.16656"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 1.83328L5.5 9.16661"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.375 1.83322L1.375 9.16656"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </g>
  </svg>
);

const BoostedAPRIcon = () => {
  const uniqueId = `boosted-apr-gradient-${Math.random()
    .toString(36)
    .substr(2, 9)}`;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2235 2.86864C14.651 2.08355 16.2314 1.62513 17.8509 1.52224C17.6994 3.92025 16.7531 7.49147 12.7211 10.2015C12.7174 10.2039 12.7138 10.2062 12.7101 10.2086C11.735 10.8241 10.708 11.3528 9.64102 11.7887L7.58844 9.73617C8.02622 8.67986 8.55658 7.66398 9.17347 6.70046L9.1735 6.70049L9.17771 6.69376C10.1779 5.09448 11.5707 3.77769 13.2235 2.86864ZM12.6424 11.9967C11.8571 12.4414 11.0442 12.8358 10.2085 13.1773V16.2904C10.3637 16.2437 10.5307 16.1893 10.7027 16.1269C11.4961 15.8391 12.2022 15.4473 12.5015 15.0004C12.6538 14.7716 12.7559 14.4368 12.796 14.0049C12.8356 13.5791 12.8102 13.1116 12.7526 12.6642C12.722 12.4268 12.683 12.2007 12.6424 11.9967ZM8.7085 12.9776L6.39786 10.6669H2.12501C1.90265 10.6669 1.69176 10.5682 1.54926 10.3976C1.40676 10.2269 1.34735 10.0017 1.38707 9.78296L2.12501 9.91691C1.38707 9.78296 1.38709 9.7828 1.38712 9.78263L1.3872 9.78224L1.38737 9.78127L1.38787 9.77857L1.38944 9.77015L1.39491 9.74168C1.3996 9.71767 1.40641 9.68375 1.41541 9.64107C1.43339 9.55579 1.46023 9.43515 1.49661 9.28847C1.56909 8.99624 1.68086 8.595 1.83819 8.16127C2.13465 7.34395 2.65931 6.21691 3.54132 5.62687L3.54231 5.6262C4.05606 5.28371 4.66524 5.13844 5.23156 5.0858C5.80435 5.03257 6.38993 5.06905 6.90275 5.13514C7.41854 5.20162 7.88116 5.30078 8.21391 5.38283L8.24154 5.38968C9.345 3.80224 10.8019 2.48864 12.5006 1.55432C14.3777 0.521942 16.4876 -0.0130451 18.6298 0.000241637C19.0422 0.00279945 19.3752 0.337829 19.3752 0.750227C19.3752 3.31118 18.654 7.78061 13.9889 11.1463C13.9901 11.1513 13.9913 11.1563 13.9926 11.1613C14.0746 11.4941 14.1738 11.9567 14.2403 12.4725C14.3064 12.9853 14.3428 13.5709 14.2896 14.1437C14.237 14.71 14.0917 15.3192 13.7492 15.8329L13.7485 15.8339C13.1585 16.7159 12.0315 17.2406 11.2141 17.537C10.7804 17.6944 10.3792 17.8061 10.0869 17.8786C9.94026 17.915 9.81962 17.9418 9.73434 17.9598C9.69166 17.9688 9.65774 17.9756 9.63373 17.9803L9.60526 17.9858L9.59684 17.9874L9.59414 17.9879L9.59317 17.988L9.59278 17.9881C9.59261 17.9881 9.59245 17.9882 9.4585 17.2502L9.59245 17.9882C9.37367 18.0279 9.14855 17.9685 8.97786 17.826C8.80717 17.6835 8.7085 17.4726 8.7085 17.2502V12.9776ZM6.71102 6.62284C6.95556 6.65436 7.1881 6.69471 7.39689 6.73674C6.94614 7.51995 6.54654 8.3317 6.20065 9.16691H3.08488C3.13157 9.0117 3.18592 8.84469 3.24829 8.67276C3.53609 7.87933 3.92792 7.17327 4.37486 6.87395C4.6036 6.72163 4.93842 6.61951 5.37038 6.57937C5.79618 6.53979 6.26363 6.56518 6.71102 6.62284ZM3.95607 12.8229C3.27918 12.802 2.61841 13.0317 2.10049 13.468C1.6429 13.8525 1.30073 14.3883 1.0429 14.9161C0.78079 15.4527 0.580404 16.0345 0.429968 16.5604C0.278847 17.0887 0.173689 17.5765 0.10627 17.9316C0.0724624 18.1096 0.0479004 18.2556 0.0316359 18.3582C0.0234989 18.4096 0.0174246 18.4501 0.0132968 18.4785L0.00854623 18.5118L0.00723588 18.5213L0.00684208 18.5242L0.00670987 18.5252L0.00665987 18.5255C0.00663936 18.5257 0.00662059 18.5258 0.750007 18.6252L0.00662059 18.5258C-0.0243466 18.7575 0.0544292 18.9903 0.219677 19.1556C0.384924 19.3208 0.617756 19.3996 0.84939 19.3686L0.750007 18.6252C0.84939 19.3686 0.84953 19.3686 0.849683 19.3686L0.850056 19.3685L0.851037 19.3684L0.853936 19.368L0.863426 19.3667L0.896724 19.3619C0.925109 19.3578 0.965669 19.3517 1.017 19.3436C1.1196 19.3273 1.26558 19.3028 1.44364 19.269C1.79871 19.2015 2.28649 19.0964 2.81481 18.9453C3.34073 18.7948 3.92249 18.5944 4.4591 18.3323C4.98675 18.0746 5.52231 17.7326 5.90682 17.2752C6.79099 16.2283 6.80079 14.6007 5.77778 13.5907L5.77786 13.5906L5.76867 13.5818C5.27864 13.1141 4.63315 12.8439 3.95607 12.8229ZM1.68979 17.6854C1.73996 17.4653 1.80044 17.2236 1.87213 16.9729C2.00815 16.4974 2.18016 16.0055 2.39071 15.5745C2.60545 15.1348 2.83605 14.8091 3.06573 14.6162L3.06665 14.6154C3.30193 14.4171 3.60215 14.3127 3.9097 14.3222C4.21509 14.3317 4.50633 14.4528 4.72833 14.6625C5.14916 15.0829 5.17591 15.8163 4.76054 16.3077L4.75906 16.3095C4.56613 16.5392 4.2404 16.7698 3.80076 16.9845C3.36971 17.1951 2.87782 17.3671 2.40229 17.5031C2.15165 17.5748 1.90989 17.6353 1.68979 17.6854Z"
        fill={`url(#${uniqueId})`}
      />
      <defs>
        <linearGradient
          id={uniqueId}
          x1="8.47216e-07"
          y1="-4.03656"
          x2="19.6552"
          y2="-3.79906"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9945FF" />
          <stop offset="1" stopColor="#20E19F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default function TestDriveRock() {
  const [numberOfRocks, setNumberOfRocks] = useState(293);
  const [priceOfRocks, setPriceOfRocks] = useState(1212);
  const [priceOfStay, setPriceOfStay] = useState(1212);
  const [stakingPeriod, setStakingPeriod] = useState(12);
  const [boostedApr, setBoostedApr] = useState(true);

  const calculations = useMemo(() => {
    const baseApr = boostedApr ? 36.4 : 25.0;
    const annualRate = baseApr / 100;
    const totalMonths = stakingPeriod;

    const rockValue = numberOfRocks * priceOfRocks;

    const monthlyRate = annualRate / 12;
    const totalReturns = rockValue * monthlyRate * totalMonths;
    const totalRoi = rockValue + totalReturns;

    const monthlyReturns = rockValue * monthlyRate;

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
    <div className="bg-white dark:bg-[#1a1f2e] w-full min-h-[492px] opacity-100 rounded-[11px] border border-gray-200 dark:border-gray-700 pt-4 md:pt-[29px] pr-4 md:pr-10 pb-4 md:pb-[29px] pl-4 md:pl-10 overflow-hidden">
      <div className="w-full h-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
            Test Drive Your ROCK
          </h2>
          <div className="flex items-center pl-0 lg:pl-4 w-full sm:w-auto h-[22px]">
            <BoostedAPRIcon />
            <span className="text-sm font-medium bg-gradient-to-r from-[#9945FF] to-[#20E19F] bg-clip-text text-transparent">
              Boost
            </span>
            <button
              onClick={() => setBoostedApr(!boostedApr)}
              className={`relative inline-flex w-8 h-5 items-center rounded-full transition-colors ml-2 md:ml-[12px] ${
                boostedApr
                  ? "bg-gradient-to-r from-[#9945FF] to-[#20E19F]"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                  boostedApr ? "translate-x-[18px]" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-[40px]">
          <div className="space-y-4 md:space-y-6 w-full">
            <ValueSlider
              label="Number of ROCKS"
              minLabel="0"
              maxLabel="10,000"
              value={numberOfRocks}
              onChange={setNumberOfRocks}
            />
            <ValueSlider
              label="Price of ROCKS"
              minLabel="$0"
              maxLabel="$10,000"
              value={priceOfRocks}
              onChange={setPriceOfRocks}
              prefix="$"
            />
            <ValueSlider
              label="Price of STAY"
              minLabel="$0"
              maxLabel="$10,000"
              value={priceOfStay}
              onChange={setPriceOfStay}
              prefix="$"
            />

            <div className="flex flex-col gap-3 md:gap-[15px]">
              <label className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300">
                Staking Period
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  (Months)
                </span>
              </label>
              <div className="w-full max-w-[248px] h-[38px] opacity-100 rounded-[10px] p-1 bg-gray-100 dark:bg-[#0b0f1a] flex gap-1">
                {[12, 24, 36].map((period) => (
                  <button
                    key={period}
                    onClick={() => setStakingPeriod(period)}
                    className={`flex-1 rounded-lg text-sm md:text-base font-semibold transition-all ${
                      stakingPeriod === period
                        ? "bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white"
                        : "text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#1a1f2e]"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[279px] min-h-[300px] md:min-h-[372px] opacity-100 flex flex-col items-center justify-center lg:ml-0 mx-auto lg:mx-0 mt-4 md:mt-0">
            <ROIIndicator
              amount={`$${Math.round(calculations.totalRoi).toLocaleString()}`}
              title="Total ROI Based On Staking Period + Rock Value"
              apr={`${calculations.apr.toFixed(1)}%`}
              monthlyReturns={`$${Math.round(
                calculations.monthlyReturns
              ).toLocaleString()}`}
              description="The number of STAYS to be received is fixed. However, the dollar value and APR will vary and depend on the price of STAY."
              progressPercentage={calculations.progressPercent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
