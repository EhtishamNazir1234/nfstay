"use client";

import { useEffect, useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "./Resizable-navbar";
import { CommonGradientBtn } from "./gradient-button";
import { useTheme } from "next-themes";

export default function HomeNav() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) {
      setTheme("dark");
      return;
    }
    const currentTheme = resolvedTheme || theme || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Navbar className="fixed top-15 left-0">
      <NavBody>
        <NavbarLogo />
        <NavItems
          className="text-white"
          items={[
            { name: "Dashboard", link: "/dashboard" },
            { name: "Printer", link: "/printer" },
            { name: "Farm", link: "/farm" },
            { name: "MarketPlace", link: "/marketplace" },
            { name: "Migrate", link: "/migrate" },
            { name: "Portfolio", link: "/portfolio" },
          ]}
        />
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-lg bg-transparent flex items-center justify-center hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Toggle theme"
            type="button"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none">
              <path d="M19.7363 14.6025C19.5896 14.355 19.1771 13.97 18.1505 14.1533C17.5821 14.2542 17.0046 14.3 16.4271 14.2725C14.2913 14.1808 12.3571 13.2 11.0096 11.6875C9.81797 10.3583 9.08463 8.62583 9.07546 6.75583C9.07546 5.71083 9.27713 4.70249 9.68963 3.74916C10.093 2.82333 9.8088 2.33749 9.60713 2.13583C9.3963 1.92499 8.9013 1.63166 7.92963 2.03499C4.18046 3.61166 1.8613 7.37 2.1363 11.3942C2.4113 15.18 5.06963 18.4158 8.58963 19.635C9.43296 19.9283 10.3221 20.1025 11.2388 20.1392C11.3855 20.1483 11.5321 20.1575 11.6788 20.1575C14.7496 20.1575 17.628 18.7092 19.443 16.2433C20.0571 15.3908 19.8921 14.85 19.7363 14.6025Z" fill="white"/>
            </svg>
          </button>
          <CommonGradientBtn
            className="bg-transparent"
            label="Launch dApp"
            icon={
              <g style={{ mixBlendMode: "luminosity", opacity: 0.6 }}>
                <rect
                  width="179.652"
                  height="71"
                  fill="url(#pattern0_1863_1206)"
                />
              </g>
            }
          />
        </div>
      </NavBody>
    </Navbar>
  );
}
