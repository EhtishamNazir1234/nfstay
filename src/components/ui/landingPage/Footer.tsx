import Link from "next/link";
import { Megaphone, Lock } from "lucide-react";
import { CommonGradientBtn } from "../../../../public/common/gradient-button";
import Image from "next/image";
import megaphone from "./../../../../public/assets/megaphone.png";
import lock from "./../../../../public/assets/lock.png";
export function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-gradient-to-b from-[#2a0e4a] via-[#0d1b1e] to-[#0a1a14] text-white">
      <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <Image alt="" src={megaphone} className=" text-gray-300" />
          <span className="text-medium ml-2 tracking-wide text-gray-200">
            Are You Ready?
          </span>
        </div>
        <h2 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Want to travel around the globe for FREE?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
          Join the NFStay Traveller's Club and enjoy multiple perks, including
          FREE STAYS, exclusive Airport Lounge Access, Stay Debit Ring and much
          more.
        </p>
        <CommonGradientBtn
          icon
          label="Get Started Now"
          className="h-14 rounded-lg bg-[#9945FF] cursor-pointer text-lg font-semibold hover:bg-[#9945FF] hover:text-black transition-all "
        >
          Get Started Now
        </CommonGradientBtn>
      </div>
      <div className="my-20 ml-65">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <div className="mb-6">
              <span className="text-3xl font-bold tracking-tight">NFStay</span>
              <span className="text-sm ">.com</span>
            </div>
            <p className="max-w-[240px] text-sm leading-relaxed text-gray-400">
              Nunc a vestibulum tellus. Sed dapibus lacus imperdiet mattis
              finibus. Sed lacinia efficitur nulla, ut aliquet nisi auctor eu.
            </p>
            <p className="pt-22 text-xs text-gray-500">
              Copyright NFStay.com. All Rights Reserved
            </p>
          </div>
          <div>
            <h4 className="mb-9 font-semibold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
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
            <h4 className="mb-9 font-semibold">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
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
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="mb-9 font-semibold">We Accept</h4>
              <ul className="space-y-4 text-sm text-gray-400">
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
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white/5 p-2">
                <Image alt="" src={lock} />
              </div>
              <div className="text-sm text-gray-400">
                <p>Safe and Secure</p>
                <p>SSL Encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
