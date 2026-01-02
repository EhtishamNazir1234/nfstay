"use client";
import Image from "next/image";
import localImage from "../../public/assets/8d19f22e813cdeceb8a2db88700143efedced336.jpg";
import { CommonGradientBtn } from "./../../public/common/gradient-button";
import { BookingSearchBar } from "./../../public/common/bar";
import { NavigationIcon } from "../../public/assets/icons/icons";
// import image2 from './../../public/assets/image2.jpg'
import {
  Navbar,
  NavBody,
  NavItems,
  // NavbarButton,
  NavbarLogo,
} from "@/components/ui/Resizable-navbar";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { MediaBanner } from "@/components/ui/Media-banner";
import { BlockchainTech } from "@/components/ui/blockChainFeature/BlockChainFeature";

const PROPERTIES = [
  {
    image: "/assets/image2.jpg",
    type: "Entire Home/Apt.",
    location: "Location Here",
    rating: 4.9,
    price: 314,
  },
  {
    image: "/assets/house2.jpg",
    type: "Entire Home/Apt.",
    location: "Location Here",
    rating: 4.9,
    price: 314,
  },
  {
    image: "/assets/house3.jpg",
    type: "Entire Home/Apt.",
    location: "Location Here",
    rating: 4.9,
    price: 314,
  },
];

export function PropertyListing() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
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
    <div className="">
      <div className="">
        <Navbar className="fixed top-15 left-0">
          <NavBody>
            <NavbarLogo />
            <NavItems
              className="text-white"
              items={[
                { name: "Dashboard", link: "#" },
                { name: "Printer", link: "#" },
                { name: "Farm", link: "#" },
                { name: "MarketPlace", link: "#" },
                { name: "Migrate", link: "#" },
                { name: "Portfolio", link: "#" },
              ]}
            />
            <div className="px-15 ">
              <CommonGradientBtn
                label="Launch dApp"
                icon={
                  <g style={{ mixBlendMode: "luminosity", opacity: 0.6 }}>
                    <rect
                      width="179.652"
                      height="71"
                      fill="url(#pattern0_1863_1206)"
                    />
                  </g>
                }
              />
            </div>
          </NavBody>
        </Navbar>
        <div className="relative py-14 overflow-hidden">
          <Image
            src={localImage}
            alt="House Image"
            fill
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-[#2B2828] opacity-50 z-10" />

          <div className="relative z-20 flex flex-col items-center text-center pt-40 space-y-8">
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
          <BlockchainTech/>
        </div>
      </div>
    </div>
  );
}
