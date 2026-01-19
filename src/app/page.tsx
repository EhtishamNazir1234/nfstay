"use client";
import Image from "next/image";
import localImage from "../../public/assets/8d19f22e813cdeceb8a2db88700143efedced336.jpg";
import { CommonGradientBtn } from "./../../public/common/gradient-button";
import { BookingSearchBar } from "./../../public/common/bar";
import { NavigationIcon } from "../../public/assets/icons/icons";
import { JourneySection } from "@/components/ui/landingPage/Journery";
import HomeNav from "../../public/common/page";
import { PropertyCard } from "@/components/ui/landingPage/PropertyCard";
import { MediaBanner } from "@/components/ui/landingPage/Media-banner";
import { BlockchainTech } from "@/components/ui/blockChainFeature/BlockChainFeature";
import { HowItWorks } from "@/components/ui/landingPage/HowItWorks";
import { ImmersiveSection } from "@/components/ui/landingPage/VrIExp";
import Roadmap from "@/components/ui/landingPage/Visionary";
import { Carousel } from "@/components/ui/landingPage/Carousall";
import { AuditedSecurity } from "@/components/ui/landingPage/AuditedSecurity";
import { FAQ } from "@/components/ui/landingPage/FAQ";
import { MarketplaceBlog } from "@/components/ui/landingPage/MarketPlaceBlog";
import { properties as PROPERTIES } from "@/data/dummy";

export function PropertyListing() {
  return (
    <section className="w-full py-16 bg-white dark:bg-[#0b0f1a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Stays In
            <span className=" ml-2 bg-gradient-to-r from-[#9945FF] to-[#20E19F] bg-clip-text text-transparent">
              United Kingdom
            </span>
          </h2>

          <CommonGradientBtn
            className="bg-[#FFF] text-black hover:bg-[#FFFFFF]"
            label="Explore Properties"
            icon=""
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0f1a] text-gray-900 dark:text-gray-100">
      <div className="">
        <HomeNav />
        <div className="relative py-14 overflow-hidden">
          <Image
            src={localImage}
            alt="House Image"
            fill
            className="object-cover scale-105"
          />
        

          <div className="absolute inset-0 bg-[#2B2828] opacity-50 z-10" />

          <div className="relative z-20 mx-auto max-w-7xl flex flex-col items-center text-center pt-40 space-y-8">
              <h1 className="text-white text-5xl md:text-7xl font-semibold max-w-6xl">
                Book Short-Let Accommodations & Pay With Crypto.
              </h1>
              <div>
                <BookingSearchBar />
              </div>
              <div className="">
                <h1 className="text-white font-light text-xl w-130">
                  
                  <span>
                    Tokenizing the Value of Unused Nights, One Token at a Time —
                    Never Expires, Always Valuable .
                  </span>
                </h1>
                <div className="py-10 justify-center gap-x-5 flex">
                  <div className="ml-0">
                    <CommonGradientBtn icon="" label="Document" />
                  </div>
                  <div>
                    <CommonGradientBtn icon="" label="Visit Our dApp" />
                  </div>
                </div>
              </div>
              <button className="py-15 cursor-pointer">
                <NavigationIcon />
              </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <PropertyListing />
        <div className="">
          <MediaBanner />
        </div>
        <div>
          <BlockchainTech />
        </div>
        <div>
          <JourneySection />
        </div>
        <div>
          <HowItWorks />
        </div>
        <div>
          <ImmersiveSection
            description="NFsTay offers VR experiences that allow you to virtually visit properties before booking. No more surprises, only assured quality and transparency. Experience your future stay from the comfort of your home."
            imageSrc="/assets/VrImg.png"
            imageAlt=""
            highlightText="Immerse Yourself Before you Stay"
          />
        </div>
        <div>
          <Roadmap />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <ImmersiveSection
            description="Our whitepaper outlines the strategic fusion of real estate knowledge and blockchain innovation that propels NFsTay forward. Discover how we're paving a new path in travel.  With NFsTay, every journey begins with a promise of more than just travel; it's an invitation to experience the world in new and exciting ways. Start your exploration with us today."
            imageSrc="/assets/whitepaper.png"
            imageAlt=""
            highlightText="Explore the NFsTay Whitepaper"
          />
        </div>
        <div>
          <AuditedSecurity />
        </div>
        <div>
          <FAQ />
        </div>
        <div>
          <MarketplaceBlog />
        </div>
      </div>
    </div>
  );
}
