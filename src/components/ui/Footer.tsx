import Link from "next/link"
import { Megaphone, Lock } from "lucide-react"
// import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-[#2a0e4a] via-[#0d1b1e] to-[#0a1a14] text-white">
      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm">
          <Megaphone className="h-4 w-4 text-gray-300" />
          <span className="text-xs font-medium tracking-wide text-gray-200">Are You Ready?</span>
        </div>

        <h2 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          Want to travel around the globe for FREE?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
          Join the NFStay Traveller's Club and enjoy multiple perks, including FREE STAYS, exclusive Airport Lounge
          Access, Stay Debit Ring and much more.
        </p>

        {/* <Button className="h-14 rounded-xl bg-[#9945FF] px-10 text-lg font-semibold hover:bg-[#8239e6] transition-all hover:scale-105">
          Get Started Now
        </Button> */}
      </div>

      {/* Links Section */}
      <div className="mx-auto max-w-7xl border-t border-white/5 px-6 py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Branding Column */}
          <div className="space-y-6">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold tracking-tight">NFStay</span>
              <span className="text-sm text-gray-400">.com</span>
            </div>
            <p className="max-w-[240px] text-sm leading-relaxed text-gray-400">
              Nunc a vestibulum tellus. Sed dapibus lacus imperdiet mattis finibus. Sed lacinia efficitur nulla, ut
              aliquet nisi auctor eu.
            </p>
            <p className="pt-4 text-xs text-gray-500">Copyright NFStay.com. All Rights Reserved</p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="mb-6 font-semibold">Quick Links</h4>
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

          {/* Resources Column */}
          <div>
            <h4 className="mb-6 font-semibold">Resources</h4>
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

          {/* We Accept Column */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="mb-6 font-semibold">We Accept</h4>
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

            <div className="mt-12 flex items-center gap-3">
              <div className="rounded-lg bg-white/5 p-2">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <div className="text-xs leading-tight text-gray-500">
                <p>Safe and Secure</p>
                <p>SSL Encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
