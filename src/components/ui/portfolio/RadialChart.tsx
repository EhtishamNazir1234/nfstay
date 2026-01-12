"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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
interface Asset {
  name: string;
  percentage: number;
  color: string;
}

const assets: Asset[] = [
  { name: "Rocks", percentage: 53, color: "#9945FF" },
  { name: "LP Tokens", percentage: 25, color: "#20E19F" },
  { name: "Stay", percentage: 22, color: "#00A3FF" },
];
export const description = "A radial chart with stacked sections";

const chartData = [{ month: "january", desktop: 10, mobile: 15,phone:30 }];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  phone: {
    label: "phone",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function ChartRadialStacked() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  return (
    <div className="w-[400px] max-w-lg">
      <Card className="flex">
        <CardHeader className=" ">
          <CardTitle> PORTFOLIO VALUE $</CardTitle>
        </CardHeader>
        <CardContent className="p-0 m-0">
          <ChartContainer
            config={chartConfig}
            className=""
          >
            <RadialBarChart
              data={chartData}
              endAngle={180}
              innerRadius={90}
              outerRadius={130}
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
                            y={(viewBox.cy || 0) - 16}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 4}
                            className="fill-muted-foreground"
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
                dataKey="desktop"
                stackId="a"
                cornerRadius={10}
                fill="#00A3FF"
                className=""
              />
              <RadialBar
                dataKey="mobile"
                stackId="a"
                cornerRadius={10}
                fill="#20E19F"
                className=""
              />
              <RadialBar
                dataKey="phone"
                fill="#9945FF"
                stackId="a"
                cornerRadius={10}
                className=""
              />
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="space-y-4 w-full">
            {assets.map((asset) => (
              <div
                key={asset.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3 ">
                  <div
                    className="w-1 h-8 rounded-full"
                    style={{ backgroundColor: asset.color }}
                  ></div>
                  <span className="text-slate-600 dark:text-gray-300 font-medium">
                    {asset.name}
                  </span>
                </div>
                <span className="text-slate-900 dark:text-gray-100 font-bold">
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
