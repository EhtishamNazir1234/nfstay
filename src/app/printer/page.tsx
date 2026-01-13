"use client";

import AppNav from "../../../public/common/AppNav";
import PrinterContent from "@/components/ui/dashboard/PrinterContent";

export default function PrinterPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] dark:bg-[#0b0f1a] text-gray-900 dark:text-gray-100">
      <AppNav />
      <PrinterContent />
    </div>
  );
}
