"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import Image from "next/image";
import img from "./../../../public/assets/VrImg.png";
import { teamMembers } from "@/data/dummy";

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white dark:bg-transparent py-12 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-16 text-center">
          <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-gray-100 sm:text-5xl">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-lg text-base sm:text-lg text-gray-700 dark:text-gray-300">
            We&apos;re committed to fairness, respect, and continuous
            improvement, driving NFsStay forward.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrevious}
            className="absolute left-2 sm:left-8 md:left-30 z-10 flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl"
            aria-label="Previous team member"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
          </button>

          <div className="overflow-x-auto overflow-y-hidden w-full max-w-full min-w-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 sm:gap-7 justify-center min-w-max px-14 sm:px-20">
              {[...Array(5)].map((_, i) => {
                const memberIndex = (currentIndex + i) % teamMembers.length;
                const member = teamMembers[memberIndex];
                const isCenterCard = i === 2;
                return (
                  <div
                    key={`${member.id}-${i}`}
                    className={`relative transition-all duration-300 flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] ${isCenterCard}`}
                  >
                    <div className="aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden">
                      <div className="aspect-[3/4]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={300}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 px-3 sm:px-4 py-3 sm:py-4 backdrop-blur">
                        <div className="flex items-center justify-between gap-2">
                          <div className="min-w-0">
                            <p className="text-sm sm:text-lg font-semibold uppercase tracking-wide text-white truncate">
                              {member.name}
                            </p>
                            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-300 truncate">
                              {member.role}
                            </p>
                          </div>

                          <a
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md bg-black flex-shrink-0"
                          >
                            <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-8 md:right-30 flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl"
            aria-label="Next team member"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
          </button>
        </div>
      </div>
    </section>
  );
}
