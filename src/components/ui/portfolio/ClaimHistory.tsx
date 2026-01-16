"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

interface Claim {
  id: number;
  source: string;
  date: string;
  time: string;
  amount: string;
  status: "Claimed" | "Pending" | "Rejected";
}

const SAMPLE_CLAIMS: Claim[] = [
  {
    id: 1,
    source: "Boardroom",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Claimed",
  },
  {
    id: 2,
    source: "Boardroom",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Claimed",
  },
  {
    id: 3,
    source: "Farm",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Claimed",
  },
  {
    id: 4,
    source: "STAYking",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Claimed",
  },
  {
    id: 5,
    source: "Boardroom",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Claimed",
  },
];

export default function ClaimHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Recent");

  const totalItems = 81;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Claimed":
        return "bg-purple-100 text-purple-500";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full lg:w-[740px] h-auto lg:h-[462px] p-4 sm:p-6 lg:p-[30px] bg-white dark:bg-[#071022] rounded-[11px] border border-gray-200 dark:border-gray-700 flex flex-col gap-[15px]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-shrink-0 gap-3 sm:gap-0">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100">
          CLAIM HISTORY
        </h1>

        <button className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition text-sm">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {sortBy}
          </span>
          <ChevronDown size={18} className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
              <th className="px-2 sm:px-4 py-2 text-left text-xs font-bold text-gray-500 dark:text-gray-300 w-8 sm:w-10 rounded-tl-xl rounded-bl-xl">
                #
              </th>
              <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm lg:text-base font-semibold text-gray-500 dark:text-gray-300">
                Source
              </th>
              <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm lg:text-base font-semibold text-gray-500 dark:text-gray-300 hidden sm:table-cell">
                Date
              </th>
              <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm lg:text-base font-semibold text-gray-500 dark:text-gray-300">
                Amount
              </th>
              <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm lg:text-base font-semibold text-gray-500 dark:text-gray-300 hidden md:table-cell">
                Status
              </th>
              <th className="px-4 py-2 w-10 rounded-tr-xl rounded-br-xl"></th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_CLAIMS.map((claim, index) => (
              <tr
                key={claim.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-[#01060F] dark:text-gray-100 font-medium text-xs sm:text-sm">
                  {index + 1}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-semibold text-[#01060F] dark:text-gray-100">
                  {claim.source}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 flex flex-col sm:flex-row text-xs sm:text-sm font-medium hidden sm:table-cell">
                  {claim.date}
                  <span className="text-gray-600 dark:text-gray-300">{` - ${claim.time}`}</span>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium dark:text-gray-100">
                  <div className="flex flex-col">
                    <span>{claim.amount}</span>
                    <span className="text-gray-600 dark:text-gray-300 text-xs sm:hidden">{claim.date} - {claim.time}</span>
                  </div>
                </td>

                <td className="px-2 sm:px-4 py-2 sm:py-3 hidden md:table-cell">
                  <span
                    className={`inline-block px-2 py-1 text-xs border border-purple-200 dark:border-purple-700 rounded-full font-semibold ${getStatusColor(
                      claim.status
                    )}`}
                  >
                    {claim.status}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                  <button className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition">
                    <MoreHorizontal
                      size={14}
                      className="sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between flex-shrink-0 pt-0">
        <p className="text-gray-600 text-sm">
          Showing <span className="font-bold">1–5</span> Of{" "}
          <span>{totalItems}</span> Entities
        </p>
        <div className="flex items-center gap-1">
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition disabled:opacity-50">
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-7 h-7 text-sm rounded font-medium transition ${
                page === currentPage
                  ? "border-2 border-purple-500 text-purple-500 bg-transparent"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition">
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
