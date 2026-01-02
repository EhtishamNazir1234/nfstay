import type React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import login from "./../assets/icons/login.png";
import logout from "./../assets/icons/logout.png";
import profile from "./../assets/icons/profile.png";
import location from "./../assets/icons/location.png";

interface SearchItemProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

function SearchItem({ icon, label, className }: SearchItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 px-4 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer group whitespace-nowrap",
        className
      )}
    >
      <span className="flex items-center text-white/70 group-hover:text-white transition-colors">
        {icon}
      </span>

      <span className="text-[16px] pl-1 mr-3 text-white group-hover:text-white transition-colors">
        {label}
      </span>

      <ChevronDown className="w-3.5 h-3.5 text-white group-hover:text-white/60 transition-colors" />
    </div>
  );
}

export default SearchItem;

export function BookingSearchBar() {
  return (
    <div className="w-full ">
      <div className="relative flex items-center gap-3 py-3 px-4 rounded-full backdrop-blur-2xl">
        <SearchItem
          icon={
            <Image
              src={location}
              alt="Location"
              width={20}
              height={20}
              className=" group-hover:opacity-100 transition"
            />
          }
          label="Search Destinations"
          className="flex-1"
        />

        <SearchItem
          icon={
            <Image
              src={login}
              alt="Check In"
              width={20}
              height={20}
              className=" group-hover:opacity-100 transition"
            />
          }
          label="Check In"
        />

        <SearchItem
          icon={
            <Image
              src={logout}
              alt="Check Out"
              width={20}
              height={20}
              className=" group-hover:opacity-100 transition"
            />
          }
          label="Check Out"
        />

        <SearchItem
          icon={
            <Image
              src={profile}
              alt="Check Out"
              width={20}
              height={20}
              className=" group-hover:opacity-100 transition"
            />
          }
          label="Add Guests"
        />

        <button className="ml-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white hover:opacity-90 transition-all ">
          Search
        </button>
      </div>
    </div>
  );
}
