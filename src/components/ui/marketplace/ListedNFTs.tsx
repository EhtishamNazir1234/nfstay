"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem } from "lucide-react";

interface NFTCardProps {
  id: string;
  creator: string;
  price: string;
}

function NFTCard({ id, creator, price }: NFTCardProps) {
  return (
    <div className="bg-white dark:bg-[#0b0f1a] rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative w-full aspect-square bg-gradient-to-br from-[#1a2e4a] to-[#0f3d3e]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 flex items-center justify-center relative overflow-hidden">
            {/* Futuristic building image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-blue-500/20 to-purple-500/20"></div>
            <div className="text-6xl opacity-30">🏢</div>
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-500/10 to-blue-500/10"></div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">$ROCKS #{id}</h3>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-300 dark:bg-gray-600"></div>
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400">{creator}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">Creator</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Gem className="w-4 h-4 text-purple-600" />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{price}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">Price</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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

export default function ListedNFTs() {
  const [listedNftsToggle, setListedNftsToggle] = useState(true);

  return (
    <Card className="bg-white dark:bg-[#1a1f2e] border border-gray-200 dark:border-gray-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Listed NFTs
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
            <NFTCard id="1234" creator="0xd8...d..." price="925.0" />
            <NFTCard id="1235" creator="0xd8...d..." price="925.0" />
            <NFTCard id="1236" creator="0xd8...d..." price="925.0" />
            <NFTCard id="1237" creator="0xd8...d..." price="925.0" />
          </div>
        </CardContent>
      )}
    </Card>
  );
}
