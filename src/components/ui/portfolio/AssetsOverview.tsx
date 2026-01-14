"use client";

import type React from "react";
import {
  RocksLogo,
  DollarLogo,
  StayCoinLogo,
  FinalDollarLogo,
} from "../../../../public/assets/icons/icons";
interface Asset {
  id: string;
  name: string;
  stacked: string;
  currentPrice: string;
  totalValue: string;
  amount: string;
  percentage: number;
  logo: React.ReactNode;
}

interface AssetsOverviewProps {
  assets?: Asset[];
  title?: string;
}

const DEFAULT_ASSETS: Asset[] = [
  {
    id: "1",
    name: "Rocks",
    stacked: "4.33 Stacked",
    currentPrice: "Current Price: $501",
    totalValue: "$27,443.87",
    amount: "Amount: 12,236.77",
    percentage: 53,
    logo: <RocksLogo />,
  },
  {
    id: "2",
    name: "LP Token",
    stacked: "0 Stacked",
    currentPrice: "Current Price: $2.18",
    totalValue: "$0",
    amount: "Amount: 0",
    percentage: 0,
    logo: <FinalDollarLogo />,
  },
  {
    id: "3",
    name: "Stay",
    stacked: "0 Stacked",
    currentPrice: "Current Price: $0.0014",
    totalValue: "$0",
    amount: "Amount: 0",
    percentage: 10,
    logo: <StayCoinLogo />,
  },
];

export default function AssetsOverview({
  assets = DEFAULT_ASSETS,
  title = "ASSETS OVERVIEW",
}: AssetsOverviewProps) {
  return (
    <div className="bg-white w-[600px]  mt-7 dark:bg-[#071022] rounded-lg p-8 px-10 shadow-sm">
      <h2 className=" font-bold text-gray-900 dark:text-gray-100 mb-6 ">{title}</h2>
      <div className="space-y-7">
        {assets.map((asset) => (
          <div key={asset.id} className="flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div>{asset.logo}</div>
                <div className="flex flex-col gap-1 ">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {asset.name}
                    </h3>
                    <span className="text-gray-600 dark:text-gray-300">{asset.stacked}</span>
                  </div>
                  <p className="text-purple-600">{asset.currentPrice}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="font-bold text-xl text-gray-900 dark:text-gray-100">
                  {asset.totalValue}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300">{asset.amount}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full ">
                <div
                  className="h-full bg-gray-900 dark:bg-gray-300 rounded-full transition-all duration-300 w-[var(--width)]"
                  style={{ "--width": `${asset.percentage}%` } as React.CSSProperties & { '--width': string }}
                />
              </div>
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 w-10 text-right">
                {asset.percentage}%
              </span>
            </div>
            <div className="border-b border-gray-200 mt-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
