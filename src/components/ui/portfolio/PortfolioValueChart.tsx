"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { portfolioValueChartData as chartData } from "@/data/dummy";

export const description = "An interactive line chart";

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
      mobile: chartData.reduce((acc, curr) => acc + (curr.mobile || 0), 0),
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
  const maxValue = Math.max(...chartData.map((d) => d.mobile || 0));
  const yAxisMax = Math.ceil(maxValue / 100) * 100; // Round up to nearest 100

  return (
    <div className="w-full lg:w-[870px] h-auto lg:h-[443px] bg-white dark:bg-[#071022] rounded-[11px] border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-[30px] flex flex-col gap-[10px]">
      <div className="flex flex-col sm:flex-row items-start justify-between flex-shrink-0 gap-4">
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

        <div className="order-2 sm:order-1 w-full sm:w-auto">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-gray-300">
              STAY VALUE
            </span>
            <div className="flex items-center py-1 rounded-full gap-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 9.99999C18.3333 5.39762 14.6024 1.66666 10 1.66666C5.39763 1.66666 1.66667 5.39762 1.66667 9.99999C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
                  fill="#008D00"
                  stroke="#008D00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 9.99999L10 6.66666L6.66667 9.99999"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 13.3333V6.66666"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-green-700 font-semibold text-sm">
                +${change.toLocaleString()}
              </span>
            </div>
            <span className="text-gray-400 dark:text-white"> •</span>
            <span className="text-purple-700"> {changePercent}%</span>
          </div>
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#A0A3AA]">
              $
            </span>
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
