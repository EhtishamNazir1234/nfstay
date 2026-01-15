"use client";

import AppNav from "../../../public/common/AppNav";
import MintCard from "@/components/ui/dashboard/MintCard";
import FeatureCard from "@/components/ui/dashboard/FeatureCard";
import Incinerator from "@/components/ui/dashboard/Incinerator";
import ReferralSection from "@/components/ui/dashboard/ReferralSection";

const stats = [
  {
    label: "Your Liquidity",
    value: "0.9906",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2V19C2 20.66 3.34 22 5 22H22" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Total STAYked",
    value: "1347",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6L9 3L15 6L21 3V18L15 21L9 18L3 21V6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 3V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 6V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "ROCKS Staked",
    value: "1347",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3H18L22 9L12 22L2 9L6 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 3L8 9L12 22L16 9L13 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 9H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Total Value Locked",
    value: "$12,812.98",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gradient: true,
  },
];

export default function DashboardPage() {
  return (
    <div className="bg-[#f5f6fa] pb-30 dark:bg-[#0b0f1a] text-gray-900 dark:text-gray-100">
      <AppNav />
      
      {/* Header Section */}
      <header className="relative w-full bg-gradient-to-br from-[#2b165a] via-[#1b2a4e] to-[#0f3d3e] pt-40 pb-60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
            <div>
              <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">
                Dashboard
              </h1>
              <p className="text-white/80 text-sm sm:text-base">
                WELCOME
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:w-auto">
              {stats.map(({ label, value, icon, gradient }) => (
                <div
                  key={label}
                  className={`flex items-start gap-3 rounded-xl px-4 py-3 bg-white/10 backdrop-blur-md text-white relative ${
                    gradient ? "overflow-hidden" : "border border-white/20"
                  }`}
                >
                  {gradient && (
                    <>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#9945FF] to-[#20E19F] -z-10"></div>
                      <div className="absolute inset-[1px] rounded-xl bg-white/10 backdrop-blur-md -z-10"></div>
                    </>
                  )}
                  <div className="relative  flex-shrink-0">
                    {icon}
                  </div>
                  <div className="bottom-1  relative ">
                    <div className="font-semibold text-xl">{value}</div>
                    <div className="text-sm text-white">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="relative -mt-50 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
          {/* Top Row: Two Minting Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
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
              title="Mint ROCK with USDC"
              payingLabel="You're Paying"
              payingToken="ROCKS"
              receivingLabel="To Receive"
              receivingToken="USDC"
              buttonText="Mint Now"
            />
          </div>

          {/* Middle Row: Feature Cards */}
          <div className="flex flex-col lg:flex-row mb-8 relative z-10 w-full max-w-[1200px] h-auto lg:h-[509px] justify-between gap-6 lg:gap-[22px]">
            <FeatureCard
              title="Printer"
              badgeText="Unclaimed Rewards: $500"
              buttonText="Go to Printer"
              link="/printer"
              imageAlt="🤖"
              imageSrc="/assets/robotImg.png"
            />
            <FeatureCard
              title="Farm"
              badgeText="Unclaimed Rewards: $500"
              buttonText="Go to Farm"
              link="/farm"
              imageAlt="🌱"
              imageSrc="/assets/robotImg2.png"
            />
            <FeatureCard
              title="Marketplace"
              badgeText="Floor Price: $9.31"
              buttonText="Go to Marketplace"
              link="/marketplace"
              imageAlt="🏙️"
              imageSrc="/assets/robotimg3.png"
            />
          </div>

          {/* Bottom Row: Two More Minting Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <MintCard
              title="Mint STAY with DEBIT CARD"
              payingLabel="You're Paying"
              payingToken="STAY"
              receivingLabel="You're Paying"
              receivingToken="CARD"
              buttonText="Mint Now"
              showCardIcons={true}
            />
            <MintCard
              title="Buy STAY With USDC"
              payingLabel="You're Paying"
              payingToken="USDC"
              receivingLabel="To Receive"
              receivingToken="STAY"
              buttonText="Swap Now"
              isWhiteCard={true}
            />
          </div>

          {/* Incinerator Section */}
          <div className="mb-8">
            <Incinerator />
          </div>

          {/* Referral Section */}
          <ReferralSection />
        </div>
      </div>
    </div>
  );
}
