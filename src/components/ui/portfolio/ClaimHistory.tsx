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
    <div className="w-full ml-20 max-w-5xl p-6 bg-white dark:bg-[#071022] rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          CLAIM HISTORY
        </h1>

        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {sortBy}
          </span>
          <ChevronDown size={18} className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-500 dark:text-gray-300 w-12 rounded-tl-xl rounded-bl-xl">
              #
            </th>
            <th className="px-6 py-3 text-left text-xl font-semibold text-gray-500 dark:text-gray-300">
              Source
            </th>
            <th className="px-6 py-3 text-left text-xl font-semibold text-gray-500 dark:text-gray-300">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xl font-semibold text-gray-500 dark:text-gray-300">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xl font-semibold text-gray-500 dark:text-gray-300">
              Status
            </th>
            <th className="px-6 py-3 w-12 rounded-tr-xl rounded-br-xl"></th>
          </tr>
        </thead>
        <tbody>
          {SAMPLE_CLAIMS.map((claim, index) => (
            <tr
              key={claim.id}
              className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <td className="px-6 py-4 text-[#01060F] dark:text-gray-100 font-medium">
                {index + 1}
              </td>
              <td className="px-6 py-4 text-xl font-semibold text-[#01060F] dark:text-gray-100">
                {claim.source}
              </td>
              <td className="px-6 py-4 flex text-lg font-medium ">
                {claim.date}
                <span className="text-gray-600 dark:text-gray-300">{`- ${claim.time}`}</span>
              </td>
              <td className="px-6 py-4 text-lg font-medium dark:text-gray-100">
                {claim.amount}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`inline-block p-3 py-1 border border-purple-200 dark:border-purple-700 rounded-full font-semibold ${getStatusColor(
                    claim.status
                  )}`}
                >
                  {claim.status}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <button className="inline-flex items-center justify-center w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition">
                  <MoreHorizontal
                    size={18}
                    className="text-gray-600 dark:text-gray-300"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-6">
        <p className="text-gray-600">
          Showing <span className="font-bold">1–5</span> Of{" "}
          <span>{totalItems}</span> Entities
        </p>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition disabled:opacity-50">
            <ChevronLeft size={18} className="text-gray-600" />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded font-medium transition ${
                page === currentPage
                  ? "bg-purple-500 text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <ChevronRight size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
