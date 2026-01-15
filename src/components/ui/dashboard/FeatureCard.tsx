"use client";

import Link from "next/link";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  badgeText: string;
  buttonText: string;
  link: string;
  imageAlt: string;
  imageSrc?: string;
}

export default function FeatureCard({
  title,
  badgeText,
  buttonText,
  link,
  imageAlt,
  imageSrc,
}: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-[#1a1f2e] shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col w-full max-w-[380px] h-auto min-h-[509px] rounded-[11px] p-[25px]">
      <div className="relative flex-1 bg-gradient-to-br from-[#1a2e4a] to-[#0f3d3e] rounded-lg overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">{imageAlt}</div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 relative">
        <div className="flex items-center justify-between py-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <span className="bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white text-xs font-semibold z-10 flex items-center justify-center px-3 py-2 h-8 rounded-[7px]">
            {badgeText}
          </span>
        </div>
        <Link href={link}>
          <button className="w-full px-4 py-2 rounded-lg bg-white dark:bg-[#0b0f1a] border-2 border-[#9945FF] text-[#9945FF] font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}
