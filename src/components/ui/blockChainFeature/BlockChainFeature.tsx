import { Plane, RefreshCw, Waves } from "lucide-react";
import { BlockchainFeatureCard } from "./BlockChainFeatureCard";
import arrow from './../../../../public/assets/arrow-swap.png'
import stairs from './../../../../public/assets/stairs.png'
import airplane from "./../../../../public/assets/airplane@2x.png";
import Image from "next/image";
export function BlockchainTech() {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 bg-white dark:bg-[#0b0f1a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-24">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#1a1c1e] dark:text-gray-100 leading-[1.1]">
              Combining Real Estate &
              <span className="ml-0 sm:ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
                Blockchain Technology
              </span>
            </h2>
            <div className="space-y-4 sm:space-y-6 max-w-lg">
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                Have You Ever Wondered What Happens To Those
                <br className="hidden sm:block" />
                Empty Nights In Short-Term Rentals? They Go To
                <br className="hidden sm:block" />
                Waste. Not On NFsTay; We Are Tokenizing The Value Of
                <br className="hidden sm:block" />
                Unused Nights.
              </p>

              <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                Say Hello To The STAY Token!
              </p>
            </div>
          </div>

            <div className="relative mx-0 sm:mx-4 flex justify-center lg:justify-start">
            <div className="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/2 w-32 h-16 sm:w-[35rem] sm:h-[17.5rem] bg-gradient-to-r from-[#9945FF] to-[#20E19F] blur-[80px] sm:blur-[100px] rounded-full" />

            <div className="relative w-full max-w-[280px] sm:max-w-[420px]">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <BlockchainFeatureCard
            icon={
              <Image src={airplane} alt="Airplane"  width={40} height={40} />
            }
            title="Travel Around the Globe"
            description="Utilize STAY Tokens & Our Booking Platform To Unlock Memorable Stays Across The Globe."
          />
          <BlockchainFeatureCard
            icon={
              <Image src={arrow} alt="Airplane" width={40} height={40} />
            }
            title="Your Tokens, Your Choice"
            description="Not Planning A Trip? Sell Your STAYS With A Click. Never Expires, Always Valuable."
          />
          <BlockchainFeatureCard
            icon={
              <Image src={stairs} alt="Airplane" width={40} height={40} />
            }
            title="Revenue Generation"
            description="Earn Trading Fees and Rewards By Supplying Liquidity To STAY/USDC Liquidity Pool (LP)"
          />
        </div>
      </div>
    </section>
  );
}
