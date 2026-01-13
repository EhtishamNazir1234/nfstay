"use client";

import { useState } from "react";
import { Gem, Lock, Percent, Receipt, Rocket, ArrowRight } from "lucide-react";
import BuyStay from "@/components/ui/printer/BuyStay";
import TestDriveRock from "@/components/ui/printer/TestDriveRock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    label: "Staked ROCKS",
    value: "100",
    icon: Gem,
  },
  {
    label: "Locked STAYS",
    value: "0.9906",
    icon: Lock,
  },
  {
    label: "Current APR",
    value: "59.36%",
    icon: Percent,
  },
  {
    label: "Claimed Rewards",
    value: "1250",
    sub: "=$1,250",
    icon: Receipt,
    gradient: true,
  },
];

export default function PrinterContent() {
  const [ownedNftsToggle, setOwnedNftsToggle] = useState(true);
  const [stakedNftsToggle, setStakedNftsToggle] = useState(false);
  const [listedNftsToggle, setListedNftsToggle] = useState(true);

  return (
    <>
      <header className="relative w-full bg-gradient-to-br from-[#2b165a] via-[#1b2a4e] to-[#0f3d3e] pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <h1 className="text-white text-3xl sm:text-4xl font-bold">
              Printer
            </h1>
            <p className="text-white/80 text-sm sm:text-base mt-2">
              STAKE ROCKS EARN STAYS
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ label, value, sub, icon: Icon, gradient }) => (
              <div
                key={label}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 bg-white/10 backdrop-blur-md border-white/20 text-white ${
                  gradient ? "bg-gradient-to-r from-[#5a3ac7] to-[#1bc3b1]" : ""
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-lg font-semibold">{value}</div>
                  {sub ? (
                    <div className="text-xs text-white/90">{sub}</div>
                  ) : null}
                  <div className="text-xs text-white/80">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Card */}
      <div className="relative -mt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white dark:bg-[#1a1f2e] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Badge Icons Section */}
            <div className="px-6 pt-6 pb-4">
              <div className="flex items-center gap-3 overflow-x-auto">
                {[
                  { icon: "💰", selected: false },
                  { icon: "🏠", selected: false },
                  { icon: "🏙️", selected: true },
                  { icon: "🏡", selected: false },
                  { icon: "👷", selected: false },
                  { icon: "👔", selected: false },
                  { icon: "🌆", selected: false },
                  { icon: "✨", selected: false },
                  { icon: "💼", selected: false },
                  { icon: "🧠", selected: false },
                ].map((badge, idx) => (
                  <button
                    key={idx}
                    className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all ${
                      badge.selected
                        ? "border-2 border-[#9945FF] bg-purple-500/20 scale-110"
                        : "border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 hover:scale-105"
                    }`}
                  >
                    {badge.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Two Column Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
              {/* Left Section - Rent Saver */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Rent Saver</h2>
                  <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold">
                    Current APR: 25%
                  </span>
                </div>

                {/* Stake ROCKS Section */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Stake ROCKS
                    </label>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      Your Balance: <span className="font-semibold text-gray-900 dark:text-white">4 ROCKS</span>
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="0"
                        className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0b0f1a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#9945FF]"
                      />
                      <button className="px-4 py-2.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                        MAX
                      </button>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button className="flex-1 px-4 py-2.5 rounded-lg bg-white dark:bg-[#0b0f1a] border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
                        Unstake ROCKS
                      </button>
                      <button className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white font-semibold hover:opacity-90 transition-opacity">
                        Stake ROCKS
                      </button>
                    </div>
                  </div>
                </div>

                {/* Upgrade Badge Section */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Upgrade Badge
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Cras Nisl Diam, Egestas Quis Enim Ac
                  </p>
                  <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    Upgrade to Home Strategist
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Section - Stay Earned */}
              <div className="p-6 lg:p-8 bg-gradient-to-br from-[#1a2e4a] to-[#0f3d3e] dark:from-[#0b0f1a] dark:to-[#1a1f2e]">
                {/* Stay Earned Section */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-4">Stay Earned</h2>
                  <div className="relative mb-6">
                    <div className="text-5xl font-bold text-white mb-1">2.46</div>
                    <div className="text-lg text-white/80">= $1,250</div>
                    {/* Floating coin icons background */}
                    <div className="absolute top-0 right-0 opacity-10">
                      <div className="text-6xl">💰</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#20E19F] to-[#9945FF] text-white font-semibold hover:opacity-90 transition-opacity">
                      Claim & Reinvest
                    </button>
                    <button className="flex-1 px-4 py-2.5 rounded-lg bg-white dark:bg-[#0b0f1a] border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
                      Claim Only
                    </button>
                  </div>
                </div>

                {/* Lock STAYS Section */}
                <div className="pt-6 border-t border-gray-500/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Lock STAYS</h3>
                  <p className="text-xs text-white/70 mb-2">
                    Your Balance: <span className="font-semibold text-white">25,000 STAYS</span>
                  </p>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      placeholder="0"
                      className="flex-1 px-4 py-2.5 rounded-lg border border-gray-500/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#9945FF]"
                    />
                    <button className="px-4 py-2.5 rounded-full bg-purple-500/30 text-white font-medium hover:bg-purple-500/40 transition-colors">
                      MAX
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2.5 rounded-lg bg-white dark:bg-[#0b0f1a] border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
                      Unlock STAYS
                    </button>
                    <button className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      BOOST APR
                      <Rocket className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buy STAY and Test Drive Your ROCK Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Buy STAY Card - Smaller */}
          <div className="lg:col-span-1">
            <BuyStay />
          </div>
          
          {/* Test Drive Your ROCK Card - Larger */}
          <div className="lg:col-span-2">
            <TestDriveRock />
          </div>
        </div>

        {/* NFT Sections */}
        <div className="space-y-6 mt-6">
          {/* Owned NFTs */}
          <Card className="bg-white dark:bg-[#1a1f2e] border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Owned NFTs
                </CardTitle>
                <ToggleSwitch
                  checked={ownedNftsToggle}
                  onChange={setOwnedNftsToggle}
                />
              </div>
            </CardHeader>
            {ownedNftsToggle && (
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <NFTCard id="1234" creator="0x8...d..." price="925.0" />
                </div>
              </CardContent>
            )}
          </Card>

          {/* Staked NFTs */}
          <Card className="bg-white dark:bg-[#1a1f2e] border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Staked NFTs
                </CardTitle>
                <ToggleSwitch
                  checked={stakedNftsToggle}
                  onChange={setStakedNftsToggle}
                />
              </div>
            </CardHeader>
            {stakedNftsToggle && (
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <NFTCard id="1234" creator="0x8...d..." price="925.0" />
                  <NFTCard id="1234" creator="0x8...d..." price="925.0" />
                  <NFTCard id="1254" creator="0x8...d..." price="925.0" />
                </div>
              </CardContent>
            )}
          </Card>

          {/* My Listed NFTs */}
          <Card className="bg-white dark:bg-[#1a1f2e] border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  My Listed NFTs
                </CardTitle>
                <ToggleSwitch
                  checked={listedNftsToggle}
                  onChange={setListedNftsToggle}
                />
              </div>
            </CardHeader>
            {listedNftsToggle && (
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <NFTCard id="1034" creator="0x8...d..." price="925.0" />
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}

// Toggle Switch Component
function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? "bg-[#9945FF]" : "bg-gray-300 dark:bg-gray-600"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

// NFT Card Component
function NFTCard({ id, creator, price }: { id: string; creator: string; price: string }) {
  return (
    <div className="bg-white dark:bg-[#0b0f1a] rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative w-full aspect-square bg-gradient-to-br from-[#1a2e4a] to-[#0f3d3e]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 flex items-center justify-center">
            <div className="text-4xl">🏢</div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">SROCKS #{id}</h3>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-300 dark:bg-gray-600"></div>
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400">{creator}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">Creator</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{price}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">Price</p>
          </div>
        </div>
      </div>
    </div>
  );
}
