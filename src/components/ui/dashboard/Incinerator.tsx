"use client";

const burnData = [
  { source: "Boardroom", date: "Dec. 2024 - 9:26 PM", amount: "8.75 MUSD", status: "Burned" },
  { source: "Farm", date: "Dec. 2024 - 8:15 PM", amount: "12.50 MUSD", status: "Burned" },
  { source: "Staking", date: "Dec. 2024 - 7:45 PM", amount: "5.25 MUSD", status: "Burned" },
  { source: "Boardroom", date: "Dec. 2024 - 6:30 PM", amount: "10.00 MUSD", status: "Burned" },
  { source: "Farm", date: "Dec. 2024 - 5:20 PM", amount: "15.75 MUSD", status: "Burned" },
];

export default function Incinerator() {
  return (
    <div className="bg-gradient-to-br from-[#9945FF] via-[#1a2e4a] to-[#20E19F] rounded-2xl shadow-xl p-8 relative overflow-hidden">
      <h2 className="text-3xl font-bold text-white mb-2">Incinerator</h2>
      <p className="text-white/80 text-sm mb-6">
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Art Onl Ac Mauris Rutrum Placerat.
      </p>

      {/* Tokens Burned Display */}
      <div className="relative mb-8">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="text-2xl text-orange-400 absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                🔥
              </div>
            ))}
          </div>
          <div className="relative z-10 text-center">
            <div className="text-6xl font-bold text-white mb-2">1,833,234</div>
            <div className="text-lg text-white/80">Tokens Burned</div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mb-8 px-6 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors">
        CTA Button
      </button>

      {/* Table */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Source</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {burnData.map((row, idx) => (
                <tr key={idx} className="border-b border-white/10 last:border-0">
                  <td className="px-6 py-4 text-sm text-white/90">{row.source}</td>
                  <td className="px-6 py-4 text-sm text-white/90">{row.date}</td>
                  <td className="px-6 py-4 text-sm text-white/90">{row.amount}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded bg-orange-500/80 text-white text-xs font-semibold">
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
