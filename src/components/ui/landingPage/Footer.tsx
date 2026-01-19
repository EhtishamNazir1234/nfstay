import Link from "next/link";
import { Megaphone, Lock } from "lucide-react";
import { CommonGradientBtn } from "../../../../public/common/gradient-button";
import Image from "next/image";
import megaphone from "./../../../../public/assets/megaphone.png";
import lock from "./../../../../public/assets/lock.png";
export function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-gradient-to-b from-[#2a0e4a] via-[#0d1b1e] to-[#0a1a14] text-white">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 lg:py-24 text-center">
        <div className="mb-4 sm:mb-6 flex items-center gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm">
          <Image alt="" src={megaphone} className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
          <span className="text-sm sm:text-base ml-2 tracking-wide text-gray-200">
            Are You Ready?
          </span>
        </div>
        <h2 className="mb-4 sm:mb-6 text-2xl sm:text-4xl lg:text-6xl font-semibold tracking-tight px-4">
          Want to travel around the globe for FREE?
        </h2>
        <p className="mx-auto mb-6 sm:mb-10 max-w-2xl text-sm sm:text-base lg:text-lg text-gray-400 px-4">
          Join the NFStay Traveller's Club and enjoy multiple perks, including
          FREE STAYS, exclusive Airport Lounge Access, Stay Debit Ring and much
          more.
        </p>
        <CommonGradientBtn
          icon
          label="Get Started Now"
          className="h-12 sm:h-14 rounded-lg bg-[#9945FF] cursor-pointer text-base sm:text-lg font-semibold hover:bg-[#9945FF] hover:text-black transition-all px-6 sm:px-8"
        >
          Get Started Now
        </CommonGradientBtn>
      </div>
      <div className="my-12 sm:my-16 lg:my-20 ml-0 sm:ml-8 lg:ml-16 xl:ml-65 px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight">NFStay</span>
              <span className="text-xs sm:text-sm">.com</span>
            </div>
            <p className="max-w-[240px] text-xs sm:text-sm leading-relaxed text-gray-400">
              Nunc a vestibulum tellus. Sed dapibus lacus imperdiet mattis
              finibus. Sed lacinia efficitur nulla, ut aliquet nisi auctor eu.
            </p>
            <p className="hidden lg:block pt-8 sm:pt-16 lg:pt-22 text-xs text-gray-500">
              Copyright NFStay.com. All Rights Reserved
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-2 lg:grid-cols-2">
            <div>
              <h4 className="mb-4 sm:mb-6 lg:mb-9 text-sm sm:text-base font-semibold">Quick Links</h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Farm
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Boardroom
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mint
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 sm:mb-6 lg:mb-9 text-sm sm:text-base font-semibold">Resources</h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Referral
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Token Sale Agreement
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="mb-4 sm:mb-6 lg:mb-9 text-sm sm:text-base font-semibold">We Accept</h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 mt-6 sm:mt-0">
              <div className="rounded-lg bg-white/5 p-1.5 sm:p-2">
                <Image alt="" src={lock} className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                <p>Safe and Secure</p>
                <p>SSL Encrypted</p>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright for mobile - appears at the end */}
        <div className="lg:hidden mt-8 text-center">
          <p className="text-xs text-gray-500">
            Copyright NFStay.com. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
