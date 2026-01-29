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
        "flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer group whitespace-nowrap",
        className
      )}
    >
      <span className="flex items-center text-white/70 group-hover:text-white transition-colors">
        {icon}
      </span>

      <span className="text-sm sm:text-[16px] pl-0.5 sm:pl-1 mr-1 sm:mr-3 text-white group-hover:text-white transition-colors">
        {label}
      </span>

      <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white group-hover:text-white/60 transition-colors flex-shrink-0" />
    </div>
  );
}

export default SearchItem;

export function BookingSearchBar() {
  return (
    <div className="w-full max-w-full min-w-0">
      <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 py-3 px-3 sm:px-4 rounded-2xl sm:rounded-full backdrop-blur-2xl sm:overflow-x-auto">
        <SearchItem
          icon={
            <Image
              src={location}
              alt="Location"
              width={20}
              height={20}
              className=" group-hover:opacity-100 transition w-4 h-4 sm:w-5 sm:h-5"
            />
          }
          label="Search Destinations"
          className="max-sm:w-full max-sm:rounded-xl sm:flex-1 sm:min-w-0"
        />

        <SearchItem
          icon={
            <Image
              src={login}
              alt="Check In"
              width={20}
              height={20}
              className=" group-hover:opacity-100 transition w-4 h-4 sm:w-5 sm:h-5"
            />
          }
          label="Check In"
          className="max-sm:w-full max-sm:rounded-xl sm:flex-shrink-0"
        />

        <SearchItem
          icon={
            <Image
              src={logout}
              alt="Check Out"
              width={20}
              height={20}
              className=" group-hover:opacity-100 transition w-4 h-4 sm:w-5 sm:h-5"
            />
          }
          label="Check Out"
          className="max-sm:w-full max-sm:rounded-xl sm:flex-shrink-0"
        />

        <SearchItem
          icon={
            <Image
              src={profile}
              alt="Check Out"
              width={20}
              height={20}
              className=" group-hover:opacity-100 transition w-4 h-4 sm:w-5 sm:h-5"
            />
          }
          label="Add Guests"
          className="max-sm:w-full max-sm:rounded-xl sm:flex-shrink-0"
        />

        <button className="max-sm:w-full max-sm:rounded-xl sm:w-auto sm:ml-2 px-4 sm:px-8 py-2.5 sm:py-3 sm:rounded-full bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-white hover:opacity-90 transition-all sm:flex-shrink-0 text-sm sm:text-base">
          Search
        </button>
      </div>
    </div>
  );
}
