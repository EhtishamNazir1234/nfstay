import type * as React from "react";
import { cn } from "@/lib/utils";

interface CommonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: React.ReactNode; // Now required
  className?: string;
}

export function CommonGradientBtn({
  label,
  icon,
  className,
  ...props
}: CommonButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-white hover:text-black transition-all",
        `bg-[#000000] hover:bg-[#F0F0F0]`,
        "before:absolute hover:before:inset-1 before:inset-0 before:-m-[2px] before:rounded-full",
        "before:bg-gradient-to-r before:from-[#9945FF] before:to-[#20E19F]",
        "before:-z-10",
        className
      )}
      {...props}
    >
      <span>{icon}</span>

      <span>{label}</span>
    </button>
  );
}
