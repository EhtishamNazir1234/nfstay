// import { StayValueChart } from "@/components/ui/portfolio/ValueCharts"
import ClaimHistory from "@/components/ui/portfolio/ClaimHistory";
import HomeNav from "../../../public/common/page";
import PortfolioTracker from "@/components/ui/portfolio/PortfolioValueChart";
// import PortfolioValueTracker from "@/components/ui/portfolio/PortfolioValues";
import AssetsOverview from "@/components/ui/portfolio/AssetsOverview";
import { ChartRadialStacked } from "@/components/ui/portfolio/RadialChart";
const page = () => {
  return (
    <div className="bg-[#f5f6fa] dark:bg-[#0b0f1a] text-gray-900 dark:text-gray-100">
      <div className="relative w-full min-h-[500px] bg-gradient-to-br from-[#2b165a] via-[#1b2a4e] to-[#0f3d3e]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative z-10">
          <HomeNav />
        </div>
      </div>
      <div className="relative pb-30 -mt-54">
        <div className="flex border border justify-between mx-30 border h-full ">
          <PortfolioTracker />
          <ChartRadialStacked />
        </div>

        <div className="flex border m-10 space-x-15 items-center">
          <ClaimHistory />
          <div className="mt-5">
            <AssetsOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
