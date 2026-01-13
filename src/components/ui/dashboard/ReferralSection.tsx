"use client";

import { useState } from "react";
import { Copy, Facebook, Instagram, Twitter } from "lucide-react";

export default function ReferralSection() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://app.myrockfinance.com/signup";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-[#1a1f2e] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 relative">
      {/* Decorative building icons */}
      <div className="absolute top-4 right-4 opacity-10">
        <div className="text-4xl">🏢</div>
      </div>
      <div className="absolute bottom-4 left-4 opacity-10">
        <div className="text-4xl">🏗️</div>
      </div>

      <div className="relative z-10">
        {/* Avatars and pre-title */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9945FF] to-[#20E19F] border-2 border-white dark:border-[#1a1f2e]"
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">10K+ Already Joined</span>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Invite Your Friends To Join
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          NPsTay And Earn $25 Per NPT Thay Purchase
        </p>

        {/* Referral Link */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="w-full px-4 py-3 rounded-lg border-2 border-[#9945FF] bg-white dark:bg-[#0b0f1a] text-gray-900 dark:text-white focus:outline-none pr-24"
            />
          </div>
          <button
            onClick={handleCopy}
            className="px-6 py-3 rounded-lg bg-[#9945FF] text-white font-semibold hover:bg-[#7c35d4] transition-colors flex items-center gap-2"
          >
            <Copy className="w-4 h-4" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Social Share Buttons */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600 dark:text-gray-400">Share:</span>
          <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
            <Facebook className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
            <Instagram className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-black dark:bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900 dark:hover:bg-gray-700 transition-colors">
            <Twitter className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
