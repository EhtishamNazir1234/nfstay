"use client";

import AppNav from "../../../public/common/AppNav";
import StartEarning from "@/components/ui/farm/StartEarning";
import StayEarned from "@/components/ui/farm/StayEarned";
import MintCard from "@/components/ui/dashboard/MintCard";

const stats = [
  {
    label: "Your Liquidity",
    value: "0.9906",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2V19C2 20.66 3.34 22 5 22H22"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "APR",
    value: "59.36%",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 7.57999V8.57999C16.5 9.39999 15.83 10.08 15 10.08H9C8.18 10.08 7.5 9.40999 7.5 8.57999V7.57999C7.5 6.75999 8.17 6.07999 9 6.07999H15C15.83 6.07999 16.5 6.74999 16.5 7.57999Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.13612 14H8.14767"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.995 14H12.0066"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8544 14H15.8659"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.13612 17.5H8.14767"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.995 17.5H12.0066"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8544 17.5H15.8659"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Unclaimed Rewards",
    value: "1347",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6V18"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function FarmPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] pb-25 dark:bg-[#0b0f1a] text-gray-900 dark:text-gray-100">
      <AppNav />

      {/* Header Section */}
      <header className="relative w-full bg-gradient-to-br from-[#2b165a] via-[#1b2a4e] to-[#0f3d3e] pt-24 pb-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="w-[1200px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mt-10">
            <div>
              <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">
                EARN STAY
              </h1>
              <p className="text-white/80 text-sm sm:text-base">
                BY PROVIDING LIQUIDITY
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              {stats.map(({ label, value, icon }) => (
                <div
                  key={label}
                  className="relative flex items-center gap-3 rounded-lg border px-2 py-3 bg-white/10 backdrop-blur-md border-white/20 text-white"
                >
                  {/* Icon at top left of each card */}
                  <div className="absolute top-1 -left-0 w-10 h-10 flex items-center justify-center z-10">
                    {icon}
                  </div>
                  <div className="leading-tight pl-8 ">
                    <div className="text-lg font-semibold">{value}</div>
                    <div className="text-xs text-white/80">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative -mt-34 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="w-[1200px] space-y-6">
            {/* Top Row: Start Earning and Stay Earned */}
            <div className="flex gap-7">
              <StartEarning />
              <StayEarned />
            </div>

            {/* Bottom Row: Mint Cards */}
            <div className="flex gap-7">
              <MintCard
                title="Mint ROCK with DEBIT CARD"
                payingLabel="You're Paying"
                payingToken="EURO"
                receivingLabel="You're Buying"
                receivingToken="ROCKS"
                buttonText="Mint Now"
                showCardIcons={true}
              />
              <MintCard
                title="Mint STAY with USDC"
                payingLabel="You're Paying"
                payingToken="ROCKS"
                receivingLabel="To Receive"
                receivingToken="USDC"
                buttonText="Mint Now"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
