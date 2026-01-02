import {
  Yahoofinance,
  BussinesInsider,
  Benzinga,
  MarketWatch,
} from "../../../public/assets/icons/icons";

export function MediaBanner() {
  return (
    <div className="w-full mx-auto py-12">
      <div className="bg-[#f9f9f9] w-full py-12 px-8 md:px-16">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-22 opacity-60">
          <Yahoofinance />
          <BussinesInsider />
          <Benzinga />
          <MarketWatch />
        </div>
      </div>
    </div>
  );
}
