"use client";

import AppNav from "../../../public/common/AppNav";
import Migrate from "@/components/ui/migrate/Migrate";

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] dark:bg-[#0b0f1a] text-gray-900 dark:text-gray-100">
      <AppNav />
      <header className="relative w-full bg-gradient-to-br from-[#2b165a] via-[#1b2a4e] to-[#0f3d3e] pt-40 pb-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="w-[1200px]">
            <div>
              <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">
                Migrate
              </h1>
              <p className="text-white/80 text-sm sm:text-base">
                WELCOME
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative -mt-40 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="w-[1200px]">
            <Migrate />
          </div>
        </div>
      </div>
    </div>
  );
}
