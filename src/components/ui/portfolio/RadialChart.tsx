"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/landingPage/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/landingPage/chart";
import { radialChartAssets as assets, radialChartData as chartData } from "@/data/dummy";

export const description = "A radial chart with stacked sections";

const chartConfig = {
  rocks: {
    label: "Rocks",
    color: "#9945FF",
  },
  lpTokens: {
    label: "LP Tokens",
    color: "#20E19F",
  },
  stay: {
    label: "Stay",
    color: "#00A3FF",
  },
} satisfies ChartConfig;

export function ChartRadialStacked() {
  const totalAssets = 3; // Total number of assets

  return (
    <div className="w-full lg:w-[310px] h-auto lg:h-[443px]">
      <Card className="flex flex-col border-0 shadow-none bg-white dark:bg-[#071022] h-full rounded-[11px] border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-[30px] gap-[10px]">
        <CardHeader className="p-0 pb-0 flex-shrink-0">
          <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white uppercase">
            PORTFOLIO VALUE <span className="text-slate-900 dark:text-white">$</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 m-0 flex-1 flex items-center justify-center min-h-0 overflow-visible pt-4">
          <ChartContainer
            config={chartConfig}
            className="h-[150px] sm:h-[180px] lg:h-[200px] w-full"
          >
            <RadialBarChart
              data={chartData}
              endAngle={180}
              innerRadius={60}
              outerRadius={85}
              className=""
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 12}
                            className="fill-slate-900 dark:fill-white text-xl sm:text-2xl font-bold"
                          >
                            {String(totalAssets).padStart(2, '0')}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 4}
                            className="fill-gray-500 dark:fill-gray-400 text-xs sm:text-sm"
                          >
                            Total Assets
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
              <RadialBar
                dataKey="rocks"
                stackId="a"
                cornerRadius={10}
                fill="#9945FF"
                className=""
              />
              <RadialBar
                dataKey="lpTokens"
                stackId="a"
                cornerRadius={10}
                fill="#20E19F"
                className=""
              />
              <RadialBar
                dataKey="stay"
                stackId="a"
                cornerRadius={10}
                fill="#00A3FF"
                className=""
              />
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="p-0 pt-0 flex-shrink-0">
          <div className="space-y-2 w-full">
            {assets.map((asset) => (
              <div
                key={asset.name}
                className="flex items-center justify-between py-1"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-1 h-6 rounded-full"
                    style={{ backgroundColor: asset.color }}
                  ></div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">
                    {asset.name}
                  </span>
                </div>
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  {asset.percentage}%
                </span>
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
