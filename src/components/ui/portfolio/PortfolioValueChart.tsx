"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const portfolioData = [
  { time: "10 AM", value: 8000 },
  { time: "11 AM", value: 9200 },
  { time: "12 PM", value: 9800 },
  { time: "1 PM", value: 11200 },
  { time: "2 PM", value: 12500 },
  { time: "3 PM", value: 14300 },
  { time: "4 PM", value: 16800 },
  { time: "5 PM", value: 18200 },
  { time: "6 PM", value: 19500 },
  { time: "7 PM", value: 20300 },
  { time: "8 PM", value: 21800 },
  { time: "9 PM", value: 22100 },
  { time: "10 PM", value: 35745 },
  { time: "11 PM", value: 32200 },
  { time: "12 AM", value: 29500 },
  { time: "1 AM", value: 31200 },
  { time: "2 AM", value: 28900 },
  { time: "3 AM", value: 27100 },
  { time: "4 AM", value: 26800 },
  { time: "5 AM", value: 28900 },
  { time: "6 AM", value: 32100 },
  { time: "7 AM", value: 35200 },
  { time: "8 AM", value: 38900 },
  { time: "9 AM", value: 42100 },
  { time: "10 AM", value: 45300 },
]

export default function PortfolioTracker() {
  const [timePeriod, setTimePeriod] = useState("24H")
  const [hoveredData, setHoveredData] = useState<{ value: number; time: string } | null>(null)

  const currentValue = 1989111.68
  const change = 3745
  const changePercent = 4.0

  return (
    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-[#071022] rounded-2xl p-8 ">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold text-slate-600 dark:text-gray-300">STAY VALUE</span>
            <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
              <span className="text-green-700 font-semibold">●</span>
              <span className="text-green-700 font-semibold text-sm">
                +${change.toLocaleString()} • {changePercent}%
              </span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-slate-900 dark:text-gray-100">
              ${currentValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Time Period Buttons */}
        <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          {["24H", "7D", "30D", "1Y", "ALL"].map((period) => (
            <button
              key={period}
              onClick={() => setTimePeriod(period)}
                className={`px-3 py-1 text-sm font-medium rounded transition-all ${
                timePeriod === period ? "bg-purple-500 text-white" : "text-slate-600 dark:text-gray-300 hover:text-slate-900"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-80 -mx-4 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={portfolioData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="time"
              stroke="#cbd5e1"
              tick={{ fontSize: 12 }}
              interval={Math.floor(portfolioData.length / 6)}
            />
            <YAxis
              stroke="#cbd5e1"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              domain={[0, 50000]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#475569",
                border: "none",
                borderRadius: "8px",
                color: "#f1f5f9",
                padding: "8px 12px",
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, ""]}
              labelFormatter={(label) => label}
              cursor={{ stroke: "#cbd5e1", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#14b8a6"
              strokeWidth={3}
              dot={false}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
