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
    <section className="w-full bg-white dark:bg-transparent py-20">
      <div className="mx-auto ">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-gray-100 sm:text-5xl">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-lg text-lg text-gray-700 dark:text-gray-300">
            We&apos;re committed to fairness, respect, and continuous
            improvement, driving NFsStay forward.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrevious}
            className="absolute left-30 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl"
            aria-label="Previous team member"
          >
            <ChevronLeft className="h-7 w-7 " />
          </button>

          <div className="">
            <div className="flex gap-7">
              {[...Array(5)].map((_, i) => {
                const memberIndex = (currentIndex + i) % teamMembers.length;
                const member = teamMembers[memberIndex];
                const isCenterCard = i === 2;
                return (
                  <div
                    key={`${member.id}-${i}`}
                    className={`relative transition-all duration-300 ${isCenterCard}`}
                  >
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden ">
                     
                      <div className="aspect-[3/4]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={300}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-4 backdrop-blur">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-lg font-semibold uppercase tracking-wide text-white">
                              {member.name}
                            </p>
                            <p className="text-xs uppercase tracking-wider text-gray-300">
                              {member.role}
                            </p>
                          </div>

                          <a
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-md bg-black"
                          >
                            <Linkedin className="h-4 w-4 text-white" />
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
            className="absolute right-30 flex h-20 w-20 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl"
            aria-label="Next team member"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      </div>
    </section>
  );
}
