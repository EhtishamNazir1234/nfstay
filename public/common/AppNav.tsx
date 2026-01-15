"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/Frame 256.png";

interface AppNavProps {
  className?: string;
}

export default function AppNav({ className }: AppNavProps) {
  const [walletAddress] = useState("0x23...8374");
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
        <div 
          className={cn(
            "w-[1200px] flex h-16 items-center justify-between rounded-2xl backdrop-blur-md border border-white/30 dark:border-purple-500/40 px-4 py-2 mt-4 transition-all duration-300",
            scrolled && (theme === "light" || !theme) && "bg-black",
            scrolled && theme === "dark" && "bg-gradient-to-r from-[#9945FF] to-[#20E19F]"
          )}
        >
          {/* Logo Section */}
          <Link href="/" className="relative z-20 flex items-center py-1 px-15 text-sm">
            <Image src={logo} alt="logo" width={150} height={150} />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { name: "Dashboard", link: "/dashboard" },
              { name: "Printer", link: "/printer" },
              { name: "Farm", link: "/farm" },
              { name: "Marketplace", link: "/marketplace" },
              { name: "Migrate", link: "/migrate" },
              { name: "Portfolio", link: "/portfolio" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-white text-sm font-normal transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 rounded-lg bg-transparent flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.7363 14.6025C19.5896 14.355 19.1771 13.97 18.1505 14.1533C17.5821 14.2542 17.0046 14.3 16.4271 14.2725C14.2913 14.1808 12.3571 13.2 11.0096 11.6875C9.81797 10.3583 9.08463 8.62583 9.07546 6.75583C9.07546 5.71083 9.27713 4.70249 9.68963 3.74916C10.093 2.82333 9.8088 2.33749 9.60713 2.13583C9.3963 1.92499 8.9013 1.63166 7.92963 2.03499C4.18046 3.61166 1.8613 7.37 2.1363 11.3942C2.4113 15.18 5.06963 18.4158 8.58963 19.635C9.43296 19.9283 10.3221 20.1025 11.2388 20.1392C11.3855 20.1483 11.5321 20.1575 11.6788 20.1575C14.7496 20.1575 17.628 18.7092 19.443 16.2433C20.0571 15.3908 19.8921 14.85 19.7363 14.6025Z" fill="white"/>
              </svg>
            </button>

            {/* Notifications */}
            <button className="w-10 h-10 rounded-lg bg-transparent flex items-center justify-center hover:bg-white/10 transition-colors">
              {/* Content */}
              <div className="relative flex items-center justify-center w-full h-full">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="38" height="38" rx="8" fill="white" fillOpacity="0.15"/>
                  <path d="M27.1902 21.06L26.0602 19.18C25.8102 18.77 25.5902 17.98 25.5902 17.5V15.63C25.5902 12 22.6402 9.04999 19.0202 9.04999C15.3902 9.05999 12.4402 12 12.4402 15.63V17.49C12.4402 17.97 12.2202 18.76 11.9802 19.17L10.8502 21.05C10.4202 21.78 10.3202 22.61 10.5902 23.33C10.8602 24.06 11.4702 24.64 12.2702 24.9C13.3502 25.26 14.4402 25.52 15.5502 25.71C15.6602 25.73 15.7702 25.74 15.8802 25.76C16.0202 25.78 16.1702 25.8 16.3202 25.82C16.5802 25.86 16.8402 25.89 17.1102 25.91C17.7402 25.97 18.3802 26 19.0202 26C19.6502 26 20.2802 25.97 20.9002 25.91C21.1302 25.89 21.3602 25.87 21.5802 25.84C21.7602 25.82 21.9402 25.8 22.1202 25.77C22.2302 25.76 22.3402 25.74 22.4502 25.72C23.5702 25.54 24.6802 25.26 25.7602 24.9C26.5302 24.64 27.1202 24.06 27.4002 23.32C27.6802 22.57 27.6002 21.75 27.1902 21.06ZM19.7502 17C19.7502 17.42 19.4102 17.76 18.9902 17.76C18.5702 17.76 18.2302 17.42 18.2302 17V13.9C18.2302 13.48 18.5702 13.14 18.9902 13.14C19.4102 13.14 19.7502 13.48 19.7502 13.9V17Z" fill="white"/>
                  <path d="M21.8297 27.01C21.4097 28.17 20.2997 29 18.9997 29C18.2097 29 17.4297 28.68 16.8797 28.11C16.5597 27.81 16.3197 27.41 16.1797 27C16.3097 27.02 16.4397 27.03 16.5797 27.05C16.8097 27.08 17.0497 27.11 17.2897 27.13C17.8597 27.18 18.4397 27.21 19.0197 27.21C19.5897 27.21 20.1597 27.18 20.7197 27.13C20.9297 27.11 21.1397 27.1 21.3397 27.07C21.4997 27.05 21.6597 27.03 21.8297 27.01Z" fill="white"/>
                  <circle cx="25.5" cy="12.5" r="4" fill="#20E19F" stroke="#615985"/>
                </svg>
              </div>
            </button>

            {/* Wallet Address/Profile */}
            <button className="group relative flex items-center gap-2 px-3 py-3 rounded-lg transition-all overflow-hidden">
              {/* Gradient Border - Outside Only */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#20E19F] -z-10"></div>
              <div className="absolute inset-[1.5px] rounded-lg bg-purple-900/30 dark:bg-purple-900/30 backdrop-blur-md -z-10"></div>
              {/* Content */}
              <div className="relative flex items-center gap-2 z-10">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="white"/>
                    <path d="M12 6.92999C9.93 6.92999 8.25 8.60999 8.25 10.68C8.25 12.71 9.84 14.36 11.95 14.42C11.98 14.42 12.02 14.42 12.04 14.42C12.06 14.42 12.09 14.42 12.11 14.42C12.12 14.42 12.13 14.42 12.13 14.42C14.15 14.35 15.74 12.71 15.75 10.68C15.75 8.60999 14.07 6.92999 12 6.92999Z" fill="white"/>
                  </svg>
                </div>
                <span className="text-white text-sm font-normal">{walletAddress}</span>
                <ChevronDown className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
