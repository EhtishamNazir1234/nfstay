"use client";

import Box1 from "./../../../../public/assets/icons/box1.png";
import Box2 from "./../../../../public/assets/icons/box2.png";
import Box3 from "./../../../../public/assets/icons/box3.png";
import Box4 from "./../../../../public/assets/icons/box4.png";
import Image from "next/image";
import auditImg from "./../../../../public/assets/AuditedImg.png";
import React from "react";
export function AuditedSecurity() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white dark:bg-[#0b0f1a]">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-4xl border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b0f2e] via-[#0c1f3c] to-[#063a3a]" />
          <div className="absolute inset-0 flex items-center justify-end opacity-30 pointer-events-none">
            <div className="relative w-48 h-48 sm:w-96 sm:h-96 mr-0 sm:mr-12">
              <div className="absolute inset-0 rounded-full border border-teal-400/20" />
              <div className="absolute inset-4 sm:inset-8 rounded-full border border-teal-400/20" />
              <div className="absolute inset-8 sm:inset-16 rounded-full border border-teal-400/20" />
            </div>
          </div>
          <div className="relative z-10 p-6 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-6 sm:space-y-10">
                <div>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                    Audited Security,
                    <br />
                    Your Peace Of Mind.
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300">
                    Certified Trust With Cyberscope's Audit
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <Stat
                    icon={
                      <img src={Box1.src} alt="box icon" className="w-6 h-6" />
                    }
                    title="Advanced"
                    subtitle="Blockchain Security"
                  />
                  <Stat
                    icon={
                      <img src={Box2.src} alt="box icon" className="w-6 h-6" />
                    }
                    title="Over 1800"
                    subtitle="Smart Contracts Audited"
                  />
                  <Stat
                    icon={
                      <img src={Box3.src} alt="box icon" className="w-6 h-6" />
                    }
                    title="Worth 1 Billion +"
                    subtitle="Safeguarding Assets"
                  />
                  <Stat
                    icon={
                      <img src={Box4.src} alt="box icon" className="w-6 h-6" />
                    }
                    title="800+"
                    subtitle="KYC Verifications Fulfilled"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0 ml-0 lg:ml-40">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[280px] lg:h-[280px]">
                  <Image
                    src={auditImg}
                    alt="Cyberscope Logo"
                    width={280}
                    height={280}
                    className="drop-shadow-2xl object-contain relative z-10 w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-[120%] h-[120%] max-w-[590px] max-h-[590px] rounded-full border border-gray-400 opacity-10" />
                    <div className="absolute w-[100%] h-[100%] max-w-[510px] max-h-[510px] rounded-full border border-gray-400 opacity-45" />
                    <div className="absolute w-[85%] h-[85%] max-w-[430px] max-h-[430px] rounded-full border border-gray-400 opacity-75" />
                    <div className="absolute w-[70%] h-[70%] max-w-[350px] max-h-[350px] rounded-full border border-gray-400 opacity-100" />
                  </div>
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-white font-semibold z-20 text-sm sm:text-base">
                    Cyberscope
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Stat Item */
function Stat({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="space-y-2 sm:space-y-3">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-white text-base sm:text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm sm:text-lg">{subtitle}</p>
      </div>
    </div>
  );
}
