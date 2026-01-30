"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";

const CopyIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 11.2875V14.9625C14 18.025 12.775 19.25 9.7125 19.25H6.0375C2.975 19.25 1.75 18.025 1.75 14.9625V11.2875C1.75 8.225 2.975 7 6.0375 7H9.7125C12.775 7 14 8.225 14 11.2875Z"
      fill="white"
    />
    <path
      d="M14.9625 1.75H11.2875C8.63885 1.75 7.37108 2.67286 7.07642 4.89685C7.00327 5.44894 7.46378 5.90625 8.02069 5.90625H9.71254C13.3875 5.90625 15.0938 7.6125 15.0938 11.2875V12.9793C15.0938 13.5363 15.5511 13.9968 16.1032 13.9236C18.3272 13.629 19.25 12.3612 19.25 9.7125V6.0375C19.25 2.975 18.025 1.75 14.9625 1.75Z"
      fill="white"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="9"
    height="17"
    viewBox="0 0 9 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83333 9.58333H7.91667L8.75 6.25H5.83333V4.58333C5.83333 3.72552 5.83333 2.91667 7.5 2.91667H8.75V0.11675C8.47858 0.0807083 7.4525 0 6.36908 0C4.107 0 2.5 1.38072 2.5 3.91642V6.25H0V9.58333H2.5V16.6667H5.83333V9.58333Z"
      fill="#7F8798"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.171 1.875H17.9277L11.9052 8.75833L18.9902 18.125H13.4427L9.09766 12.4442L4.12603 18.125H1.3677L7.80936 10.7625L1.0127 1.875H6.70103L10.6285 7.0675L15.171 1.875ZM14.2035 16.475H15.731L5.87103 3.43833H4.23186L14.2035 16.475Z"
      fill="#7F8798"
    />
  </svg>
);

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://app.mybricksfinance.com/sign";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-[1196px] h-auto min-h-[425px] rounded-2xl bg-white dark:bg-[#071022] dark:border dark:border-gray-700/50 opacity-100 mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-[#0b0f1a] dark:to-[#071022] rounded-2xl" />

      <div className="hidden lg:block absolute top-[17px] left-[16px]">
        <Image
          src="/assets/icons/garageImg.png"
          alt="Garage"
          width={159}
          height={159}
          className="object-contain rounded-[12px]"
        />
      </div>

      <div className="hidden lg:block absolute top-[206px] left-[-5px]">
        <Image
          src="/assets/icons/garageImg.png"
          alt="Garage"
          width={95}
          height={95}
          className="object-contain rounded-[12px]"
        />
      </div>

      <div className="hidden lg:block absolute bottom-[-67px] left-20">
        <Image
          src="/assets/icons/garageImg.png"
          alt="Garage"
          width={150}
          height={150}
          className="object-contain rounded-[12px]"
        />
      </div>

      <div className="hidden lg:block absolute top-5  right-35">
        <Image
          src="/assets/icons/garageImg.png"
          alt="Garage"
          width={68}
          height={120}
          className="object-contain rounded-xl"
        />
      </div>

      <div className="hidden lg:block absolute top-25 -right-4 -translate-y-1/2">
        <Image
          src="/assets/icons/garageImg.png"
          alt="Garage"
          width={122}
          height={200}
          className="object-contain rounded-2xl"
        />
      </div>
      <div className="hidden lg:block absolute  right-26 bottom-35">
        <Image
          src="/assets/icons/garageImg.png"
          alt="Garage"
          width={102}
          height={200}
          className="object-contain rounded-2xl"
        />
      </div>

      <div className="hidden lg:block absolute -bottom-20 right-7">
        <Image
          src="/assets/icons/garageImg.png"
          alt="Garage"
          width={168}
          height={200}
          className="object-contain rounded-2xl"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-12 py-8">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Image
            src="/assets/multiProfiles.png"
            alt="Profiles"
            width={120}
            height={10}
            className="object-contain"
          />
          <span className="text-gray-800 dark:text-gray-200 font-semibold text-sm sm:text-base">
            10K+ Already Joined
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 w-3/4 sm:mb-4 text-center px-4">
          Invite Your Friends To Join
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 text-center px-4">
          NFsTay And Earn $25 Per NFT They Purchase
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mb-4 sm:mb-6 lg:mb-8 w-full max-w-xl lg:px-20">
          <div className="border-[2px] border-dashed border-purple-400 dark:border-purple-500/60 rounded-lg px-3 sm:px-4 py-3 bg-purple-50 dark:bg-purple-500/10 w-full lg:flex-1">
            <p className="text-purple-700 dark:text-purple-300 font-semibold text-xs break-all text-center lg:text-left">
              {referralLink}
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors w-full lg:w-auto text-xs sm:text-sm"
          >
            <CopyIcon />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 w-full">
          <span className="text-gray-700 dark:text-gray-200 font-semibold text-base sm:text-lg mb-1 sm:mb-0">
            Share It:
          </span>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <button className="border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200 px-2 sm:px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 bg-transparent transition-colors whitespace-nowrap">
              <FacebookIcon />
              <span className="text-xs sm:text-sm">Facebook</span>
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200 px-2 sm:px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 bg-transparent transition-colors whitespace-nowrap">
              <Instagram size={16} />
              <span className="text-xs sm:text-sm">Instagram</span>
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200 px-2 sm:px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 bg-transparent transition-colors whitespace-nowrap">
              <TwitterIcon />
              <span className="text-xs sm:text-sm">Twitter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
