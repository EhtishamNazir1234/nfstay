"use client";

export function RentSaverSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Image – same width as content on mobile */}
      <div className="flex  justify-center lg:min-w-[313px] h-[200px] sm:h-[280px] lg:h-[350px] rounded-lg">
        <img
          src="/assets/icons/garageImg.png"
          alt="Garage"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col lg:w-[350px] gap-4 lg:gap-3">
        <div className="flex flex-row flex-wrap items-center justify-between">
          <h1 className="text-gray-900 dark:text-white font-bold text-xl sm:text-2xl lg:text-2xl">
            Rent Saver
          </h1>
          <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 ">
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-[#1a1f2e] rounded-lg font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
              Current APR: 25%
            </div>
          </div>
        </div>

        <div className="w-full rounded-2xl py-4 px-0 lg:py-3 lg:px-0 flex-1 min-h-0 flex flex-col">
          <div className="flex flex-col gap-3 lg:gap-2 w-full min-w-0 flex-1">
            <div className="flex flex-row items-center justify-between w-full ">
              <span className="text-slate-400 dark:text-gray-500 text-xs sm:text-sm ">
                Stake ROCKS
              </span>
              <span className="py-1 rounded-full text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-bold">
                Your Balance:{" "}
                <span className="text-black dark:text-white">4 ROCKS</span>
              </span>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                placeholder="0"
                className="w-full min-w-0 px-4 py-3 sm:py-4 lg:py-2.5 pr-20 rounded-lg bg-[#F1F4F9] dark:bg-[#0b0f1a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#9945FF] text-sm sm:text-base box-border"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 lg:py-1.5 rounded-lg bg-white dark:bg-[#0b0f1a] text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors text-xs sm:text-sm">
                    MAX
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <button className="flex-1 w-full px-3 py-2 lg:py-3 bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white rounded-lg font-semibold text-xs sm:text-sm border border-transparent hover:!bg-white hover:from-transparent hover:to-transparent hover:text-black hover:border-black">
                Unstake ROCKS
              </button>
              <button className="flex-1 min-w-0 w-full sm:w-auto px-3 py-2  bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white rounded-lg font-semibold text-xs sm:text-sm border border-transparent hover:!bg-white hover:from-transparent hover:to-transparent hover:text-black hover:border-black">
                Stake ROCKS
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="text-black dark:text-white font-bold lg:text-sm mb-1">
            Upgrade Badge
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 ">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Cras Nisl
            Diam, Egestas Quis Enim Ac
          </p>
          <button className="w-full px-4 py-2 lg:py-3 bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white rounded-lg text-xs sm:text-sm border border-transparent hover:bg-white hover:from-transparent hover:to-transparent hover:text-black hover:border-black flex items-center justify-between gap-2 group box-border transition-colors">
            <span className="truncate">Upgrade to Home Strategist</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:stroke-black flex-shrink-0"
            >
              <rect
                x="0.5"
                y="0.5"
                width="23"
                height="23"
                rx="11.5"
                stroke="white"
                className="group-hover:stroke-black"
              />
              <path
                d="M14.8284 14.8284V9.17157H9.17157"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-black"
              />
              <path
                d="M9.17176 14.8284L14.8286 9.17157"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-black"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
