"use client";

import { useState } from "react";
import { ArrowUpDown, ChevronDown} from "lucide-react";
import Image from "next/image";
import {
  EuroLogo,
  RocksLogo,
  StayCoinLogo,
  DollarLogo,
} from "../../../../public/assets/icons/icons";

interface MintCardProps {
  title: string;
  payingLabel: string;
  payingToken: string;
  receivingLabel: string;
  receivingToken: string;
  buttonText: string;
  showCardIcons?: boolean;
  isWhiteCard?: boolean;
}

export default function MintCard({
  title,
  payingLabel,
  payingToken,
  receivingLabel,
  receivingToken,
  buttonText,
  showCardIcons = false,
  isWhiteCard = false,
}: MintCardProps) {
  const [payingAmount, setPayingAmount] = useState("0.00");
  const [receivingAmount, setReceivingAmount] = useState("0.00");

  const getTokenIcon = (token: string) => {
    if (token === "USDC") {
      return <DollarLogo className="w-5 h-5 text-blue-600" />;
    } else if (token === "CARD" || token === "EURO") {
      return <EuroLogo className="w-4 h-4" />;
    } else if (token === "ROCKS") {
      return <RocksLogo className="w-5 h-5" />;
    } else if (token === "STAY") {
      return <StayCoinLogo className="w-5 h-5" />;
    }
    return null;
  };

  // Payment logos component
  const PaymentLogos = () => (
    <div className="flex items-center gap-2">
      {/* Mastercard */}
      <div className="w-12 h-8 bg-white rounded-md flex items-center justify-center overflow-hidden shadow-sm">
        <div className="flex items-center relative">
          <div className="w-6 h-6 rounded-full bg-[#EB001B] -mr-3 z-10"></div>
          <div className="w-6 h-6 rounded-full bg-[#F79E1B] z-0"></div>
        </div>
      </div>
      {/* Visa */}
      <div className="w-12 h-8 bg-white rounded-md flex items-center justify-center shadow-sm">
        <span className="text-[#1434CB] font-bold text-xs tracking-tight">
          VISA
        </span>
      </div>
      {/* American Express */}
      <div className="w-12 h-8 bg-white rounded-md flex items-center justify-center px-2 shadow-sm">
        <div className="text-left">
          <div className="text-[#006FCF] font-bold text-[8px] leading-tight">
            AMERICAN
          </div>
          <div className="text-[#006FCF] font-bold text-[8px] leading-tight">
            EXPRESS
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`${
        isWhiteCard
          ? "bg-white border border-gray-200"
          : "bg-white/10 dark:bg-[#1a1f2e]/8 dark:border-gray-700"
      } rounded-[11px] shadow-xl w-full max-w-[585px] h-auto min-h-[377px] relative overflow-hidden`}
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Background Image */}
      {!isWhiteCard && (
        <>
          {showCardIcons ? (
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/debitcard.jpg"
                alt="Card background"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          ) : (
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/cryptodollar.jpg"
                alt="Blockchain background"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          )}
        </>
      )}

      {/* Overlay */}
      {!isWhiteCard && (
        <div className="absolute inset-0 z-[1] bg-black/50 dark:bg-black/60 rounded-[11px]"></div>
      )}

      {/* Content */}
      <div
        className="relative z-10 flex flex-col"
        style={{ justifyContent: "space-between", height: "100%" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between mb-8"
          style={{
            width: "505px",
            height: "23px",
            justifyContent: "space-between",
          }}
        >
          <h3
            className={`text-xl font-bold ${
              isWhiteCard ? "text-gray-800" : "text-white"
            }`}
          >
            {title}
          </h3>
          {showCardIcons && <PaymentLogos />}
        </div>

        {/* Input Cards Section */}
        <div
          className="flex items-center mb-8 gap-4"
          style={{
            width: "505px",
            height: "165px",
            justifyContent: "space-between",
          }}
        >
          {/* Left Card - You're Paying */}
          <div className={`${isWhiteCard ? 'bg-cyan-50' : 'bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm'} rounded-lg p-5 ${isWhiteCard ? 'border border-cyan-200' : 'border border-white/10 dark:border-gray-700/50'} flex-1`}>
            <label className={`text-xs mb-3 block font-bold ${isWhiteCard ? 'text-gray-700' : 'text-white dark:text-gray-400'}`}>
              {payingLabel}
            </label>
            <input
              type="text"
              value={payingAmount}
              onChange={(e) => setPayingAmount(e.target.value)}
              placeholder="0.00"
              className={`w-full bg-transparent text-4xl font-semibold mb-4 focus:outline-none ${isWhiteCard ? 'text-gray-400 placeholder:text-gray-400' : 'text-gray-400 dark:text-gray-300 placeholder:text-gray-700'}`}
            />
            <button className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors w-full ${isWhiteCard ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50' : 'bg-white/5 dark:bg-gray-700/30 border-white/10 dark:border-gray-600/50 text-white hover:bg-white/10 dark:hover:bg-gray-700/50'}`}>
              {getTokenIcon(payingToken)}
              <span className="text-sm">{payingToken}</span>
              <ChevronDown className="w-4 h-4 ml-auto" />
            </button>
          </div>

          {/* Swap Icon */}
          {isWhiteCard ? (
            <div className="relative z-10 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#20E19F] to-[#9945FF] p-[2px]">
                <button className="w-full h-full rounded-full bg-white flex items-center justify-center transition-colors shadow-lg">
                  <ArrowUpDown className="w-5 h-5 scale-x-[-1] rotate-90" style={{ background: 'linear-gradient(to bottom, #20E19F, #9945FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                </button>
              </div>
            </div>
          ) : (
            <button className="w-10 h-10 rounded-full bg-black/80 dark:bg-gray-900/90 border-2 border-white/40 dark:border-gray-600 flex items-center justify-center transition-colors z-10 shadow-lg flex-shrink-0">
              <ArrowUpDown className="w-5 h-5 scale-x-[-1] rotate-90 text-white" />
            </button>
          )}

          {/* Right Card - To Receive */}
          <div className={`${isWhiteCard ? 'bg-purple-100' : 'bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm'} rounded-lg p-5 ${isWhiteCard ? 'border border-purple-200' : 'border border-white/10 dark:border-gray-700/50'} flex-1`}>
            <label className={`text-xs mb-3 block ${isWhiteCard ? 'text-gray-700' : 'text-white dark:text-gray-400'}`}>
              {receivingLabel}
            </label>
            <input
              type="text"
              value={receivingAmount}
              onChange={(e) => setReceivingAmount(e.target.value)}
              placeholder="0.00"
              className={`w-full bg-transparent text-4xl font-semibold mb-4 focus:outline-none ${isWhiteCard ? 'text-gray-400 placeholder:text-gray-400' : 'text-gray-400 dark:text-gray-300 placeholder:text-gray-500'}`}
            />
            <button className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors w-full ${isWhiteCard ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50' : 'bg-white/5 dark:bg-gray-700/30 border-white/10 dark:border-gray-600/50 text-white hover:bg-white/10 dark:hover:bg-gray-700/50'}`}>
              {getTokenIcon(receivingToken)}
              <span className="text-sm">{receivingToken}</span>
              {isWhiteCard && <ChevronDown className="w-4 h-4 ml-auto" />}
            </button>
          </div>
        </div>

        {/* Mint/Swap Button */}
        <button className={`w-full px-6 py-3 rounded-lg text-white text-lg transition-opacity shadow-lg ${isWhiteCard ? 'bg-gradient-to-r from-[#9945FF] to-[#7C3AED] hover:opacity-90' : 'bg-[#9945FF] hover:bg-[#8531EB]'}`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
