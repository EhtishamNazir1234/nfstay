import { JSX } from "react";

type RoadmapItem = {
  time: string;
  side: "left" | "right";
  points: string[];
  timeSide?: "left" | "right";
};

const roadmapData: RoadmapItem[] = [
  {
    time: "Q4 2023",
    side: "right",
    timeSide: "left",
    points: [
      "Targeting 100 properties",
      "New NFStay Dashboard Launch & Referral System",
      "Addition of 24 Brand new units in Manchester to the Portfolio",
    ],
  },
  {
    time: "Q1/Q2 2024 – Phase 2",
    side: "left",
    timeSide: "right",
    points: [
      "Portfolio Worldwide Expansion",
      "Exploring markets beyond the UK (under progress)",
      "Improvement of Protocol and Integration of the STAY Token (under progress)",
    ],
  },
  {
    time: "Q3/Q4 2024",
    side: "right",
    timeSide: "left",
    points: [
      "Targeting 500 properties under management",
      "Virtual Reality Property Viewings",
      "Launch of Exclusive NFStay Debit Card/Ring/Bracelet",
      "Exclusive Airport Lounge Access",
    ],
  },
  {
    time: "Q1/Q2 2025",
    side: "left",
    timeSide: "right",
    points: [
      "Property Management as a Service (beta)",
      "Property Sourcing as a Service (beta)",
      "Addition of our own Booking System to the NFStay Dashboard (beta)",
    ],
  },
  {
    time: "Q3/Q4 2025",
    side: "right",
    timeSide: "left",
    points: [
      "Expanding to 10,000 properties, establishing a global presence by 2026.",
    ],
  },
];

const Roadmap = (): JSX.Element => {
  return (
    <section className="bg-gray-50 dark:bg-[#0b0f1a] py-12 sm:py-20 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-10 sm:mb-16">
        A Visionary
        <span className="ml-0 sm:ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
          Roadmap
        </span>
      </h2>
      <div className="relative max-w-6xl py-6 sm:py-10 mx-auto">
        <div className="absolute left-4 sm:left-1/2 -top-10 h-full w-0 sm:-translate-x-1/2 border-l-2 border-dashed border-teal-400">
          <span className="hidden sm:block absolute -left-[15px] top-0 h-[2px] w-[30px] bg-teal-400" />
          <span className="hidden sm:block absolute -left-[15px] bottom-0 h-[2px] w-[30px] bg-teal-400" />
        </div>
        {roadmapData.map((item, index) => (
          <div key={index} className="relative mb-10 sm:mb-16 flex flex-col sm:flex-row pl-12 sm:pl-0">
            <span className="absolute left-4 sm:left-1/2 top-1 -translate-x-1/2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#9945FF] text-white text-xs font-bold flex-shrink-0">
              ✓
            </span>
            <div
              className={`sm:w-1/2 sm:px-12 lg:px-[12.5rem] ${
                item.side === "left" ? "sm:text-right sm:pr-12 lg:pr-16" : "sm:ml-auto sm:pl-12 lg:pl-20"
              }`}
            >
              <p
                className={`relative sm:absolute top-0 sm:top-1 text-base sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-0 ${
                  item.timeSide === "left"
                    ? "sm:right-1/2 sm:mr-12 lg:mr-[6.25rem] sm:text-right"
                    : "sm:left-1/2 sm:ml-6 lg:ml-8 sm:text-left"
                }`}
              >
                {item.time}
              </p>
              <div className="bg-white dark:bg-[#071022] border dark:border-gray-700 w-full sm:max-w-[270px] rounded-xl shadow-md p-4 sm:p-6">
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-teal-500 flex-shrink-0">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
