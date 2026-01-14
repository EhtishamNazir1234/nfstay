"use client";

import Image from "next/image";

const burnData = [
  {
    id: 1,
    source: "Boardroom",
    date: "11 Dec, 2024 - 9:26 PM",
    amount: "8.75 MyUSD",
    status: "Burned",
  },
  {
    id: 2,
    source: "Farm",
    date: "11 Dec, 2024 - 8:15 PM",
    amount: "12.50 MyUSD",
    status: "Burned",
  },
  {
    id: 3,
    source: "STAYking",
    date: "11 Dec, 2024 - 7:45 PM",
    amount: "5.25 MyUSD",
    status: "Burned",
  },
  {
    id: 4,
    source: "Boardroom",
    date: "11 Dec, 2024 - 6:30 PM",
    amount: "10.00 MyUSD",
    status: "Burned",
  },
  {
    id: 5,
    source: "Farm",
    date: "11 Dec, 2024 - 5:20 PM",
    amount: "15.75 MyUSD",
    status: "Burned",
  },
];

export default function Incinerator() {
  return (
    <div className="relative overflow-hidden flex flex-col w-[1200px] h-[687px] rounded-[28px] opacity-100">
    
    

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b165a] via-[#1b2a4e] to-[#0f3d3e] rounded-[28px]" />

      {/* Fire Icons - 6 positions */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[28px]">
        {/* 1st: In the main area, left of numbers (inside glassmorphism card) - handled below */}
        
        {/* 2nd: Half behind the main container of tokens burned */}
        <div className="absolute top-[50%] right-[20%] -translate-y-1/2 z-[5] opacity-50">
          <Image
            src="/assets/fire.png"
            alt="Fire"
            width={80}
            height={130}
            className="object-contain"
          />
        </div>

        {/* 3rd: On the top mid */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 z-[5] opacity-60">
          <Image
            src="/assets/fire.png"
            alt="Fire"
            width={60}
            height={98}
            className="object-contain"
          />
        </div>

        {/* 4th: In the right bottom corner behind it */}
        <div className="absolute bottom-[10%] right-[5%] z-[5] opacity-50">
          <Image
            src="/assets/fire.png"
            alt="Fire"
            width={70}
            height={114}
            className="object-contain"
          />
        </div>

        {/* 5th: Besides the right top corner */}
        <div className="absolute top-[8%] right-[8%] z-[5] opacity-60">
          <Image
            src="/assets/fire.png"
            alt="Fire"
            width={65}
            height={106}
            className="object-contain"
          />
        </div>

        {/* 6th: Beside the right bottom corner */}
        <div className="absolute bottom-[12%] right-[12%] z-[5] opacity-50">
          <Image
            src="/assets/fire.png"
            alt="Fire"
            width={60}
            height={98}
            className="object-contain"
          />
        </div>
      </div>

      {/* Top Section - Content Container */}
      <div className="relative flex-1 flex items-center justify-between px-12 py-8">
        {/* Left Section - Text and Button */}
        <div className="flex flex-col justify-center z-10 max-w-[500px]">
          <h2 className="text-5xl font-bold text-white mb-6">Incinerator</h2>
          <p className="text-white text-base mb-8 leading-relaxed max-w-[400px]">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc At
            Orci Ac Mauris Rutrum Placerat.
          </p>
          <div className="relative w-[139px] h-[47px] rounded-xl p-[2px] bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
            <button className="w-full h-full rounded-[10.5px] py-[18px] px-[30px] transition-opacity hover:opacity-90 bg-[rgba(0,0,0,0.3)] backdrop-blur-[10px] flex items-center justify-center">
              <span className="text-gray-200 whitespace-nowrap text-base">
                CTA Button
              </span>
            </button>
          </div>
        </div>

        {/* Right Section - Glassmorphism Card with 1st Fire Icon */}
        <div className="relative z-10">
          <div className="relative rounded-2xl p-10 bg-white/[0.08] backdrop-blur-[25px] border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 flex-shrink-0 relative">
                <Image
                  src="/assets/fire.png"
                  alt="Fire"
                  width={48}
                  height={78}
                  className="object-contain"
                />
              </div>
              <span className="text-6xl font-bold text-white tracking-tight">
                1,833,234
              </span>
            </div>
            <div className="text-gray-300 text-lg font-medium ml-16">
              Tokens Burned
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Transaction Table */}
      <div className="relative z-10 px-12 pb-8">
        <div className="rounded-xl overflow-hidden bg-white/[0.05] backdrop-blur-[10px] border border-white/10">
          <table className="w-full">
            <thead>
              <tr className="bg-white/[0.08] border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  #
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Source
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {burnData.map((row) => (
                <tr
                  key={row.id}
                  className={`border-b border-white/5 last:border-0 ${
                    row.id % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-white/90">{row.id}</td>
                  <td className="px-6 py-4 text-sm text-white/90">
                    {row.source}
                  </td>
                  <td className="px-6 py-4 text-sm text-white/90">
                    {row.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-white/90">
                    {row.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-semibold bg-[#FF6B35]">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
