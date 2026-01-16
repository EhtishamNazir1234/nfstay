"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "An interactive line chart";

const chartData = [
  { date: "2024-04-01", mobile: 150 },
  { date: "2024-04-02", mobile: 180 },
  { date: "2024-04-03", mobile: 120 },
  { date: "2024-04-04", mobile: 260 },
  { date: "2024-04-05", mobile: 290 },
  { date: "2024-04-06", mobile: 340 },
  { date: "2024-04-07", mobile: 180 },
  { date: "2024-04-08", mobile: 320 },
  { date: "2024-04-09", mobile: 110 },
  { date: "2024-04-10", mobile: 190 },
  { date: "2024-04-11", mobile: 350 },
  { date: "2024-04-12", mobile: 210 },
  { date: "2024-04-13", mobile: 380 },
  { date: "2024-04-14", mobile: 220 },
  { date: "2024-04-15", mobile: 170 },
  { date: "2024-04-16", mobile: 190 },
  { date: "2024-04-17", mobile: 360 },
  { date: "2024-04-18", mobile: 410 },
  { date: "2024-04-19", mobile: 180 },
  { date: "2024-04-20", mobile: 150 },
  { date: "2024-04-21", mobile: 200 },
  { date: "2024-04-22", mobile: 170 },
  { date: "2024-04-23", mobile: 230 },
  { date: "2024-04-24", mobile: 290 },
  { date: "2024-04-25", mobile: 250 },
  { date: "2024-04-26", mobile: 130 },
  { date: "2024-04-27", mobile: 420 },
  { date: "2024-04-28", mobile: 180 },
  { date: "2024-04-29", mobile: 240 },
  { date: "2024-04-30", mobile: 380 },
  { date: "2024-05-01", mobile: 220 },
  { date: "2024-05-02", mobile: 310 },
  { date: "2024-05-03", mobile: 190 },
  { date: "2024-05-04", mobile: 420 },
  { date: "2024-05-05", mobile: 390 },
  { date: "2024-05-06", mobile: 520 },
  { date: "2024-05-07", mobile: 300 },
  { date: "2024-05-08", mobile: 210 },
  { date: "2024-05-09", mobile: 180 },
  { date: "2024-05-10", mobile: 330 },
  { date: "2024-05-11", mobile: 270 },
  { date: "2024-05-12", mobile: 240 },
  { date: "2024-05-13", mobile: 160 },
  { date: "2024-05-14", mobile: 490 },
  { date: "2024-05-15", mobile: 380 },
  { date: "2024-05-16", mobile: 400 },
  { date: "2024-05-17", mobile: 420 },
  { date: "2024-05-18", mobile: 350 },
  { date: "2024-05-19", mobile: 180 },
  { date: "2024-05-20", mobile: 230 },
  { date: "2024-05-21", mobile: 140 },
  { date: "2024-05-22", mobile: 120 },
  { date: "2024-05-23", mobile: 290 },
  { date: "2024-05-24", mobile: 220 },
  { date: "2024-05-25", mobile: 250 },
  { date: "2024-05-26", mobile: 170 },
  { date: "2024-05-27", mobile: 460 },
  { date: "2024-05-28", mobile: 190 },
  { date: "2024-05-29", mobile: 130 },
  { date: "2024-05-30", mobile: 280 },
  { date: "2024-05-31", mobile: 230 },
  { date: "2024-06-01", mobile: 200 },
  { date: "2024-06-02", mobile: 410 },
  { date: "2024-06-03", mobile: 160 },
  { date: "2024-06-04", mobile: 380 },
  { date: "2024-06-05", mobile: 140 },
  { date: "2024-06-06", mobile: 250 },
  { date: "2024-06-07", mobile: 370 },
  { date: "2024-06-08", mobile: 320 },
  { date: "2024-06-09", mobile: 480 },
  { date: "2024-06-10", mobile: 200 },
  { date: "2024-06-11", mobile: 150 },
  { date: "2024-06-12", mobile: 420 },
  { date: "2024-06-13", mobile: 130 },
  { date: "2024-06-14", mobile: 380 },
  { date: "2024-06-15", mobile: 350 },
  { date: "2024-06-16", mobile: 310 },
  { date: "2024-06-17", mobile: 520 },
  { date: "2024-06-18", mobile: 170 },
  { date: "2024-06-19", mobile: 290 },
  { date: "2024-06-20", mobile: 450 },
  { date: "2024-06-21", mobile: 210 },
  { date: "2024-06-22", mobile: 270 },
  { date: "2024-06-23", mobile: 530 },
  { date: "2024-06-24", mobile: 180 },
  { date: "2024-06-25", mobile: 190 },
  { date: "2024-06-26", mobile: 380 },
  { date: "2024-06-27", mobile: 490 },
  { date: "2024-06-28", mobile: 200 },
  { date: "2024-06-29", mobile: 160 },
  { date: "2024-06-30", mobile: 400 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

export default function PortfolioTracker() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("mobile");

  const total = React.useMemo(
    () => ({
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  );

  const [timePeriod, setTimePeriod] = useState("24H");

  const currentValue = 1989111.68;
  const change = 3745;
  const changePercent = 4.0;

  // Format currency for Y-axis
  const formatYAxisCurrency = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return `$${value}`;
  };

  // Calculate max value for Y-axis domain
  const maxValue = Math.max(...chartData.map(d => d.mobile));
  const yAxisMax = Math.ceil(maxValue / 100) * 100; // Round up to nearest 100

  return (
    <div className="w-full lg:w-[870px] h-auto lg:h-[443px] bg-white dark:bg-[#071022] rounded-[11px] border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-[30px] flex flex-col gap-[10px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start justify-between flex-shrink-0 gap-4">
        {/* Time Period Selector - Top on Mobile, Right on Desktop */}
        <div className="flex gap-1 sm:gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg w-full sm:w-auto order-1 sm:order-2 justify-center sm:justify-start">
          {["24H", "7D", "30D", "1Y", "ALL"].map((period) => (
            <button
              key={period}
              onClick={() => setTimePeriod(period)}
              className={`flex-1 sm:flex-none px-2 sm:px-3 py-1 text-xs sm:text-sm rounded transition-all ${
                timePeriod === period
                  ? "bg-purple-500 text-white"
                  : "text-gray-400 dark:text-gray-300 hover:text-slate-800"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
        
        {/* Value Section - Below on Mobile, Left on Desktop */}
        <div className="order-2 sm:order-1 w-full sm:w-auto">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-gray-300">
              STAY VALUE
            </span>
            <div className="flex items-center py-1 rounded-full gap-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 9.99999C18.3333 5.39762 14.6024 1.66666 10 1.66666C5.39763 1.66666 1.66667 5.39762 1.66667 9.99999C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" fill="#008D00" stroke="#008D00" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.3333 9.99999L10 6.66666L6.66667 9.99999" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 13.3333V6.66666" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-green-700 font-semibold text-sm">
                +${change.toLocaleString()}
              </span>
            </div>
            <span className="text-gray-400 dark:text-white"> •</span>
            <span className="text-purple-700"> {changePercent}%</span>
          </div>
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#A0A3AA]">$</span>
            <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-gray-100">
              {currentValue.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </div>
      <Card className="border-0 shadow-none flex-1 flex flex-col">
        <CardContent className="p-0 flex-1">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[200px] sm:h-[250px] w-full [&_.recharts-xAxis]:hidden sm:[&_.recharts-xAxis]:block"
          >
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={12}
                tick={{ fill: "#6b7280", fontSize: 12 }}
                tickFormatter={formatYAxisCurrency}
                domain={[0, yAxisMax]}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                    }}
                  />
                }
              />
              <Line
                dataKey={activeChart}
                type="monotone"
                stroke={`var(--color-${activeChart})`}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
