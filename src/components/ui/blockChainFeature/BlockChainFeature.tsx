import { Plane, RefreshCw, Waves } from "lucide-react";
import { BlockchainFeatureCard } from "./BlockChainFeatureCard";
import airplane from './../../../../public/assets/airplane.png'
import Image from "next/image";
export function BlockchainTech() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1a1c1e] leading-[1.1]">
              Combining Real Estate &
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
                Blockchain Technology
              </span>
            </h2>
            <div className="space-y-6 max-w-lg">
              <p className="text-gray-600 text-lg leading-relaxed">
                Have You Ever Wondered What Happens To Those
                <br />
                Empty Nights In Short-Term Rentals? They Go To
                <br />
                Waste. Not On NFsTay; We Are Tokenizing The Value Of
                <br />
                Unused Nights.
              </p>

              <p className="text-xl font-semibold text-gray-900">
                Say Hello To The STAY Token!
              </p>
            </div>
          </div>

          <div className="relative mx-4 ">
            <div className="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/2 w-140 h-70  bg-gradient-to-r from-[#9945FF] to-[#20E19F] bg-gradient-to-l from-[#9945FF] to-[#20E19F] blur-[100px] rounded-full" />

            <div className=" w-full max-w-[420px]">
              <Image
                src="/assets/BlockChainCoin.png"
                alt="STAY Token Coin"
                width={450}
                height={450}
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BlockchainFeatureCard
            icon={Plane}
            title="Travel Around the Globe"
            description="Utilize STAY Tokens & Our Booking Platform To Unlock Memorable Stays Across The Globe."
          />
          <BlockchainFeatureCard
            icon={RefreshCw}
            title="Your Tokens, Your Choice"
            description="Not Planning A Trip? Sell Your STAYS With A Click. Never Expires, Always Valuable."
          />
          <BlockchainFeatureCard
            icon={Waves}
            title="Revenue Generation"
            description="Earn Trading Fees and Rewards By Supplying Liquidity To STAY/USDC Liquidity Pool (LP)"
          />
        </div>
      </div>
    </section>
  );
}
