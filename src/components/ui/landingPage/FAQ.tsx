"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question:
      "What Percentage Of The Year Typically Goes Unused In NFsTay's Rental Properties?",
    answer:
      "Approximately 30% of the year's inventory goes unused in NFsStay's rental properties, presenting a significant opportunity for innovation and optimization.",
  },
  {
    question:
      "Maecenas Volutpat Metus At Felis Suscipit, A Rhoncus Turpis Faucibus.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "Maecenas Volutpat Metus At Felis Suscipit, A Rhoncus Turpis Faucibus.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "Maecenas Volutpat Metus At Felis Suscipit, A Rhoncus Turpis Faucibus.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "Maecenas Volutpat Metus At Felis Suscipit, A Rhoncus Turpis Faucibus.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white dark:bg-transparent py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#2B2828] dark:text-gray-100">
            Frequently Asked
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
              Questions
            </span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg border transition-all duration-300 ${
                expandedIndex === index
                  ? "border-transparent bg-gradient-to-r from-purple-200 via-pink-100 to-cyan-200"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full px-6 py-8 flex items-center justify-between text-left"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`w-1 bg-gray-900  rounded-full  transition-all duration-300 ${
                      expandedIndex === index ? "h-12 -mt-2 " : "h-8"
                    }`}
                  />
                  <span className="font-medium text-gray-900 text-lg leading-relaxed">
                    {item.question}
                  </span>
                </div>
                <ChevronUp
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ml-4 ${
                    expandedIndex === index ? "rotate-0" : "rotate-180"
                  }`}
                />
              </button>
              {expandedIndex === index && (
                <div className="px-6 pb-4 pl-12">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
