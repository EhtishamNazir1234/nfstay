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
    <section className="bg-gray-50 dark:bg-[#0b0f1a] py-20">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-16">
        A Visionary
        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
          Roadmap
        </span>
      </h2>
      <div className="relative max-w-6xl py-10 mx-auto">
        <div className="absolute left-1/2 -top-10 h-full -translate-x-1/2 border-l-2 border-dashed border-teal-400">
          <span className="absolute -left-[15px] top-0 h-[2px] w-[30px] bg-teal-400" />
          <span className="absolute -left-[15px] bottom-0 h-[2px] w-[30px] bg-teal-400" />
        </div>
        {roadmapData.map((item, index) => (
          <div key={index} className="relative mb-16 flex">
            <span className="absolute left-1/2 top-1 -translate-x-1/2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#9945FF] text-white text-xs font-bold">
              ✓
            </span>
            <div
              className={`w-1/2 px-50 ${
                item.side === "left" ? "text-right pr-16" : "ml-auto pl-20"
              }`}
            >
              <p
                className={`absolute top-1 text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-gray-100 ${
                  item.timeSide === "left"
                    ? "right-1/2 mr-25 text-right"
                    : "left-1/2 ml-8 text-left"
                }`}
              >
                {item.time}
              </p>
              <div className="bg-white dark:bg-[#071022] border dark:border-gray-700 max-w-[270px] rounded-xl shadow-md p-6">
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-teal-500">●</span>
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
