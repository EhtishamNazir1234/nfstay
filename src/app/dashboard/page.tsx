"use client";

import AppNav from "../../../public/common/AppNav";
import MintCard from "@/components/ui/dashboard/MintCard";
import FeatureCard from "@/components/ui/dashboard/FeatureCard";
import Incinerator from "@/components/ui/dashboard/Incinerator";
import ReferralSection from "@/components/ui/dashboard/ReferralSection";
import { dashboardStats as stats } from "@/data/dummy";

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
          <div className="mb-8 mt-30">
            <Incinerator />
          </div>

          {/* Referral Section */}
          <ReferralSection />
        </div>
      </div>
    </div>
  );
}
