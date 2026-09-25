"use client";

import { useFitLog } from "@/context/FitLogContext";
import Link from "next/link";

const NavBadges = () => {
  const { plan, saved } = useFitLog();

  return (
    <>
      <Link href="/my-plan" className="flex items-center gap-1 md:gap-2 text-white font-bold text-xs md:text-sm">
        <span>Plan</span>
        <span className="bg-brand text-black text-[10px] md:text-xs px-2 py-0.5 badge rounded-full">
          {plan?.length || 0}
        </span>
      </Link>

      <Link href="/my-plan" className="flex items-center gap-1 md:gap-2 text-white font-bold text-xs md:text-sm hover:border-gray-400">
        <span>Saved</span>
        <span className="badge text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full border-gray-600">
          {saved?.length || 0}
        </span>
      </Link>
    </>
  );
};

export default NavBadges;
