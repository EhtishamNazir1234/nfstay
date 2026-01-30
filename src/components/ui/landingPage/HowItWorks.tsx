"use client";

import { CheckCircle, Star, Zap } from "lucide-react";
import Image from "next/image";
import img from "./../../../../public/assets/HITImg.png";
import { Gem, Crown, shop } from "../../../../public/assets/icons/icons";
export function HowItWorks() {
  const features = [
    {
      icon: Gem,
      title: "Join the Club",
      description:
        "Become a Member Smartly By Opening Our NFT – A Digital Membership. Get Rewarded On Every Day.",
    },
    {
      icon: Crown,
      title: "Premium Experiences",
      description:
        "Benefit from FREE STAYS Around the Globe, Exclusive Airport Lounge Access, Personalized Debit Cards And Much More.",
    },
    {
      icon: shop,
      title: "NFT Marketplace",
      description:
        "Explore Unique Digital Properties, Sell Your NFT With Last A Click On Our Marketplace.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 via-cyan-50 to-white dark:from-[#0b0f1a] dark:via-[#071022] dark:to-[#0b0f1a] py-12 sm:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mt-10 sm:mt-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold ml-0 md:ml-[22.5rem] text-gray-900 dark:text-gray-100">
            How It Works
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <Image alt="img" src={img} className="w-full h-auto max-w-full" />
          <div className="space-y-6 sm:space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex  gap-4">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#9945FF] to-[#20E19F] p-[2px]">
                    <div className="w-full h-full bg-white dark:bg-[#071022] rounded-md flex items-center justify-center">
                      <Icon
                        className="w-6 h-6 text-transparent"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
