"use client";

import { useState } from "react";
import Image from "next/image";

interface NFTCardProps {
  id: string;
  creator: string;
  price: string;
}

function NFTCard({ id, creator, price }: NFTCardProps) {
  return (
    <div className="w-full sm:w-[264px] h-[292px] rounded-[15px] bg-white dark:bg-[#0b0f1a] border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow relative flex-shrink-0 shadow-lg">
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
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gray-300 dark:bg-gray-600 flex-shrink-0"></div>
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

export default function ListedNFTs() {
  const [listedNftsToggle, setListedNftsToggle] = useState(true);

  return (
    <div className="w-full max-w-[1200px] h-auto md:h-[412px] opacity-100 rounded-[11px] dark:border-gray-700 bg-white dark:bg-[#1a1f2e] pt-4 md:pt-[35px] pr-4 md:pr-[40px] pb-4 md:pb-[35px] pl-4 md:pl-[40px] flex flex-col gap-4 md:gap-[30px] overflow-hidden relative">
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
          Listed NFTs
        </h2>
        <ToggleSwitch
          checked={listedNftsToggle}
          onChange={setListedNftsToggle}
        />
      </div>
      <div className="flex-1 overflow-x-auto overflow-y-hidden relative p-4 pb-6 -mx-4 sm:mx-0 sm:px-0 sm:pb-4">
        <div className="flex gap-4">
          <NFTCard id="1234" creator="0xd8...d..." price="925.0" />
        </div>
      </div>
      {!listedNftsToggle && (
        <div className="absolute inset-0 backdrop-blur-[1px] bg-white/10 dark:bg-black/10 border border-white/10 dark:border-purple-500/20 rounded-[11px] pointer-events-none z-10" />
      )}
    </div>
  );
}
