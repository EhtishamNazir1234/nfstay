"use client";

import AppNav from "../../../public/common/AppNav";
import Migrate from "@/components/ui/migrate/Migrate";

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2e4a] via-[#0f3d3e] to-[#1a1f2e] dark:from-[#0b0f1a] dark:via-[#0f3d3e] dark:to-[#1a1f2e] text-gray-900 dark:text-gray-100">
      <AppNav />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">
              Migrate
            </h1>
            <p className="text-white/80 text-sm sm:text-base">
              WELCOME
            </p>
          </div>
          <Migrate />
        </div>
      </div>
    </div>
  );
}
