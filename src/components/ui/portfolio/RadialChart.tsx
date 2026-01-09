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
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
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

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartRadialStacked() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  return (
    <div>
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle> PORTFOLIO VALUE $</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 items-center pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[250px]"
          >
            <RadialBarChart
              data={chartData}
              endAngle={180}
              innerRadius={80}
              outerRadius={130}
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
                cornerRadius={5}
                fill="var(--color-desktop)"
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="mobile"
                fill="var(--color-mobile)"
                stackId="a"
                cornerRadius={5}
                className="stroke-transparent stroke-2"
              />
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="bor">
         
          <div className="space-y-4 border w-full">
            {assets.map((asset) => (
              <div key={asset.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
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
         
          {/* <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
          </div> */}
        </CardFooter>
      </Card>
    </div>
  );
}
