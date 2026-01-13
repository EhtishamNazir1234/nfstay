"use client";

import { useState } from "react";
import { ArrowUpDown, ChevronDown, DollarSign, CreditCard } from "lucide-react";

interface MintStayCardProps {
  title: string;
  payingLabel: string;
  payingToken: string;
  receivingLabel: string;
  receivingToken: string;
  buttonText: string;
  showCardIcons?: boolean;
  isDarkCard?: boolean;
}

export default function MintStayCard({
  title,
  payingLabel,
  payingToken,
  receivingLabel,
  receivingToken,
  buttonText,
  showCardIcons = false,
  isDarkCard = false,
}: MintStayCardProps) {
  const [payingAmount, setPayingAmount] = useState("0.00");
  const [receivingAmount, setReceivingAmount] = useState("0.00");

  const getTokenIcon = (token: string) => {
    if (token === "USDC") {
      return <DollarSign className="w-4 h-4 text-blue-600" />;
    } else if (token === "CARD" || token === "DEBIT CARD") {
      return <CreditCard className="w-4 h-4 text-gray-600" />;
    } else if (token === "EURO") {
      return (
        <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
          <span className="text-white text-xs font-bold">€</span>
        </div>
      );
    } else if (token === "STAY") {
      return (
        <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#9945FF] to-[#20E19F] flex items-center justify-center text-white text-xs font-bold">
          N
        </span>
      );
    }
    return null;
  };

  return (
    <div className={`${isDarkCard ? 'bg-gradient-to-br from-[#1a2e4a] to-[#0f3d3e] dark:from-[#0b0f1a] dark:to-[#1a1f2e]' : 'bg-white dark:bg-[#1a1f2e]'} rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-bold ${isDarkCard ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{title}</h3>
        {showCardIcons && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
              V
            </div>
            <div className="w-6 h-4 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
              M
            </div>
            <div className="w-6 h-4 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
              A
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {/* First Input Section */}
        <div className="space-y-2">
          <label className={`text-sm ${isDarkCard ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>{payingLabel}</label>
          <div className={`${isDarkCard ? 'bg-white/10 backdrop-blur-sm border-white/20' : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'} rounded-lg p-4 border`}>
            <input
              type="text"
              value={payingAmount}
              onChange={(e) => setPayingAmount(e.target.value)}
              placeholder="0.00"
              className={`w-full bg-transparent text-2xl font-bold mb-2 focus:outline-none ${isDarkCard ? 'text-white placeholder-white/50' : 'text-gray-400 dark:text-gray-500'}`}
            />
            <button className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-medium transition-colors ${
              isDarkCard 
                ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                : 'bg-white dark:bg-[#0b0f1a] border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-[#1a1f2e]'
            }`}>
              {getTokenIcon(payingToken)}
              {payingToken}
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Swap Icon */}
        <div className="flex justify-center -my-2 relative z-10">
          <button className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
            isDarkCard
              ? 'bg-white/10 border-white/20 hover:bg-white/20'
              : 'bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-700 hover:bg-purple-200 dark:hover:bg-purple-900/50'
          }`}>
            <ArrowUpDown className={`w-5 h-5 ${isDarkCard ? 'text-white' : 'text-purple-600 dark:text-purple-400'}`} />
          </button>
        </div>

        {/* Second Input Section */}
        <div className="space-y-2">
          <label className={`text-sm ${isDarkCard ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>{receivingLabel}</label>
          <div className={`${isDarkCard ? 'bg-white/10 backdrop-blur-sm border-white/20' : 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'} rounded-lg p-4 border`}>
            <input
              type="text"
              value={receivingAmount}
              onChange={(e) => setReceivingAmount(e.target.value)}
              placeholder="0.00"
              className={`w-full bg-transparent text-2xl font-bold mb-2 focus:outline-none ${isDarkCard ? 'text-white placeholder-white/50' : 'text-gray-400 dark:text-gray-500'}`}
            />
            <button className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-medium transition-colors ${
              isDarkCard 
                ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                : 'bg-white dark:bg-[#0b0f1a] border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-[#1a1f2e]'
            }`}>
              {getTokenIcon(receivingToken)}
              {receivingToken}
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mint Button */}
        <button className="w-full mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white font-semibold hover:opacity-90 transition-opacity">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
