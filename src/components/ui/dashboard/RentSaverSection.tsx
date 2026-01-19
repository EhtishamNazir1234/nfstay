"use client";

export function RentSaverSection() {
  return (
    <div className="flex justify-between w-[684px]">
      <div className="overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center w-[312.94px] h-[350px] rounded-lg">
        <img
          src="/assets/icons/garageImg.png"
          alt="Garage"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between w-[350px] h-[350px]">
        <div className="flex items-center gap-4">
          <h1 className="text-gray-900 dark:text-white font-bold text-3xl">
            Rent Saver
          </h1>
          <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500">
            <div className="px-4 py-2 bg-white dark:bg-[#1a1f2e] rounded-lg font-semibold text-sm text-slate-900 dark:text-white">
              Current APR: 25%
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-4">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 dark:text-gray-500 text-sm">Stake ROCKS</span>
              <span className=" px-3 py-1 rounded-full text-gray-500 dark:text-gray-400 text-sm font-bold">
                Your Balance: <span className="text-black dark:text-white">4 ROCKS</span>
              </span>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="0"
                className="w-full px-4 py-4 pr-20 rounded-lg bg-[#F1F4F9] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#9945FF]"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
                  <button className="px-4 py-2 rounded-lg bg-white dark:bg-[#0b0f1a] text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors">
                    MAX
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg font-semibold text-sm hover:border-1 border-transparent hover:!bg-white hover:from-transparent hover:to-transparent hover:text-black hover:border-black">
                Unstake ROCKS
              </button>
              <button className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg font-semibold text-sm hover:border-1 border-transparent hover:!bg-white hover:from-transparent hover:to-transparent hover:text-black hover:border-black">
                Stake ROCKS
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-4">
          <h3 className="text-black dark:text-white font-bold text-base mb-1">Upgrade Badge</h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Cras Nisl
            Diam, Egestas Quis Enim Ac
          </p>
          <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg text-sm hover:border-1 border-transparent hover:!bg-white hover:from-transparent hover:to-transparent hover:text-black hover:border-black flex items-center justify-between group">
            <span>Upgrade to Home Strategist</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:stroke-black"
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
