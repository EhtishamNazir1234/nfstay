// import { StayValueChart } from "@/components/ui/portfolio/ValueCharts"
import ClaimHistory from "@/components/ui/portfolio/ClaimHistory";
import AppNav from "../../../public/common/AppNav";
import PortfolioTracker from "@/components/ui/portfolio/PortfolioValueChart";
// import PortfolioValueTracker from "@/components/ui/portfolio/PortfolioValues";
import AssetsOverview from "@/components/ui/portfolio/AssetsOverview";
import { ChartRadialStacked } from "@/components/ui/portfolio/RadialChart";
const page = () => {
  return (
    <div className="bg-[#f5f6fa] dark:bg-[#0b0f1a] text-gray-900 dark:text-gray-100">
      <AppNav />
      <div className="relative w-full min-h-[500px] bg-gradient-to-br from-[#2b165a] via-[#1b2a4e] to-[#0f3d3e] pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>
      <div className="relative -mt-84 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="w-full max-w-[1200px]">
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <PortfolioTracker />
              <ChartRadialStacked />
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <ClaimHistory />
              <AssetsOverview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
