import {
  Yahoofinance,
  BussinesInsider,
  Benzinga,
  MarketWatch,
} from "../../../../public/assets/icons/icons";

export function MediaBanner() {
  return (
    <div className="w-full mx-auto py-8 sm:py-12">
      <div className="bg-[#f9f9f9] dark:bg-[#0b0f1a] w-full py-8 sm:py-12 px-4 sm:px-8 md:px-16">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-22 [&>div]:opacity-60 dark:[&>div]:opacity-90 dark:[&>div]:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.35))_drop-shadow(0_0_24px_rgba(32,225,159,0.25))]">
          <div>
            <Yahoofinance />
          </div>
          <div>
            <BussinesInsider />
          </div>
          <div>
            <Benzinga />
          </div>
          <div>
            <MarketWatch />
          </div>
        </div>
      </div>
    </div>
  );
}
