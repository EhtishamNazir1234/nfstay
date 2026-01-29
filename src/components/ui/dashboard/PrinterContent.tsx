"use client";

import { useState } from "react";
import { Rocket, ArrowRight } from "lucide-react";
import Image from "next/image";
import MintCard from "@/components/ui/dashboard/MintCard";
import TestDriveRock from "../../../../public/common/TestDriveRock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvatarCarousel } from "./AvatarCarousel";
import { RentSaverSection } from "./RentSaverSection";
import { StayEarnedSection } from "./StayEarnedSection";
import { printerStats as stats } from "@/data/dummy";
import ListedNFTs from "../../../../public/common/ListedNFTs";

export default function PrinterContent() {
  const [ownedNftsToggle, setOwnedNftsToggle] = useState(true);
  const [stakedNftsToggle, setStakedNftsToggle] = useState(false);

  return (
    <>
      <header className="relative w-full bg-gradient-to-br from-[#2b165a] via-[#1b2a4e] to-[#0f3d3e] pt-20 sm:pt-40 pb-25 sm:pb-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="w-full max-w-[1200px]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
              <div>
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Printer
                </h1>
                <p className="text-white/80 text-xs sm:text-sm lg:text-base mt-1 sm:mt-2">
                  STAKE ROCKS EARN STAYS
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full lg:w-auto">
                {stats.map(({ label, value, sub, icon, gradient }) => {
                  if (gradient) {
                    return (
                      <div
                        key={label}
                        className="relative p-[1px] rounded-lg bg-gradient-to-r from-[#5a3ac7] to-[#1bc3b1]"
                      >
                        <div className="relative flex items-center gap-2 sm:gap-3 rounded-lg bg-[#2b165a] backdrop-blur-md px-2 sm:px-3 py-1.5 sm:py-2 text-white w-full h-full">
                          <div className="absolute top-1 -left-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-10">
                            {icon}
                          </div>
                          <div className="leading-tight pl-7 sm:pl-8">
                            <div className="text-sm sm:text-lg font-semibold flex items-baseline gap-1 sm:gap-2">
                              {value}
                              {sub && (
                                <span className="text-[10px] sm:text-xs text-white/90">
                                  {sub}
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] sm:text-xs text-white/80">{label}</div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={label}
                      className="relative flex items-center gap-2 sm:gap-3 rounded-lg border px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border-white/20 text-white"
                    >
                      <div className="absolute top-1 -left-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-10">
                        {icon}
                      </div>
                      <div className="leading-tight pl-7 sm:pl-8">
                        <div className="text-sm sm:text-lg font-semibold">{value}</div>
                        {sub ? (
                          <div className="text-[10px] sm:text-xs text-white/90">{sub}</div>
                        ) : null}
                        <div className="text-[10px] sm:text-xs text-white/80">{label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative -mt-20 sm:-mt-40 pt-4 sm:pt-0 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="w-full max-w-[1200px]">
            <div className="bg-white dark:bg-[#1a1f2e] rounded-2xl shadow-xl dark:border-gray-700 overflow-hidden p-4 sm:p-6 lg:p-10">
              <AvatarCarousel avatarCount={10} />

              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mt-4 sm:mt-6">
                <div className="w-full lg:flex-1">
                  <RentSaverSection />
                </div>

                <div className="w-full lg:flex-1 lg:h-[350px]">
                  <StayEarnedSection />
                </div>
              </div>
            </div>

            {/* Buy STAY + TestDriveRock – same width as upper section on mobile */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 mt-4 sm:mt-6 w-full max-w-full min-w-0 max-sm:overflow-x-hidden">
              <div className="w-full max-w-full min-w-0 lg:flex-[0.85]">
                <MintCard
                  title="Buy STAY"
                  payingLabel="You're Paying"
                  payingToken="USDC"
                  receivingLabel="To Receive"
                  receivingToken="STAY"
                  buttonText="Swap Now"
                  isWhiteCard={true}
                />
              </div>

              <div className="w-full max-w-full min-w-0 lg:flex-[1.15]">
                <TestDriveRock />
              </div>
            </div>

            {/* NFTs – same width as upper section on mobile */}
            <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6 w-full max-w-full min-w-0 max-sm:overflow-x-hidden">
              <Card className="bg-white dark:bg-[#1a1f2e] border border-gray-200 dark:border-gray-700 relative overflow-hidden">
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
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-sm:w-full max-sm:min-w-0">
                    <NFTCard id="1234" creator="0x8...d..." price="925.0" />
                  </div>
                </CardContent>
                {!ownedNftsToggle && (
                  <div className="absolute inset-0 backdrop-blur-[1px] bg-white/10 dark:bg-black/10 border border-white/10 dark:border-purple-500/20 rounded-[11px] pointer-events-none z-10" />
                )}
              </Card>

              <Card className="bg-white dark:bg-[#1a1f2e] border border-gray-200 dark:border-gray-700 relative overflow-hidden">
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
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-sm:w-full max-sm:min-w-0">
                    <NFTCard id="1234" creator="0x8...d..." price="925.0" />
                    <NFTCard id="1234" creator="0x8...d..." price="925.0" />
                    <NFTCard id="1254" creator="0x8...d..." price="925.0" />
                  </div>
                </CardContent>
                {!stakedNftsToggle && (
                  <div className="absolute inset-0 backdrop-blur-[1px] bg-white/10 dark:bg-black/10 border border-white/10 dark:border-purple-500/20 rounded-[11px] pointer-events-none z-10" />
                )}
              </Card>

              <ListedNFTs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked
          ? "bg-gradient-to-r from-[#9945FF] to-[#20E19F]"
          : "bg-gray-300 dark:bg-gray-600"
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

function NFTCard({
  id,
  creator,
  price,
}: {
  id: string;
  creator: string;
  price: string;
}) {
  return (
    <div className="max-sm:w-full max-sm:min-w-0 sm:w-[264px] h-[292px] opacity-100 rounded-[15px] bg-white dark:bg-[#0b0f1a] border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow relative">
      <div className="absolute top-[12px] left-[12px] right-[12px] sm:right-auto sm:w-[240px] h-[160px] opacity-100 rounded-[10px] overflow-hidden">
        <Image
          src="/assets/icons/garageImg.png"
          alt="Garage"
          width={240}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-5 left-0 right-0 p-4 space-y-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          $ROCKS #{id}
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gray-300 dark:bg-gray-600"></div>
          <div>
            <div>
              <p className="text-lg font-bold text-gray-600 dark:text-gray-400">
                {creator}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Creator
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/Dollar.svg"
              alt="Dollar"
              width={22}
              height={22}
              className="w-4 h-4 mb-4"
            />
            <div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {price}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">Price</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
