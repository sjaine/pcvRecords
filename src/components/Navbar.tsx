"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="w-full fixed top-[30px] z-60 flex items-center px-[63px] justify-between">
      <Link href="/" className="w-[75px] h-[75px] bg-gray-300 relative"></Link>
      <nav className="w-4xl bg-gray-300 rounded-full relative px-6">
        <div className="mx-auto flex items-center justify-between px-4 py-2 whitespace-nowrap">
          {/* Desktop Menu */}
          <div className="gap-[109px] md:flex">
            <Link href="/sell" className="hover:text-gray-600">
              Sell
            </Link>
            <Link href="/browse" className="hover:text-gray-600 flex items-center gap-2">
              Browse <ChevronRightIcon className="size-4" />
            </Link>
            <Link href="/our-corner" className="hover:text-gray-600">
              Our Corner
            </Link>
            <Link href="/start-spinning" className="hover:text-gray-600">
              Start Spinning
            </Link>
            <Link href="/jims-corner" className="hover:text-gray-600">
              Jim's Corner
            </Link>
          </div>
        </div>
      </nav>
      <img
        src="/images/search.svg"
        alt="Search"
        className="w-[35px] h-[35px] relative right-0"
      />
    </div>
  );
}
