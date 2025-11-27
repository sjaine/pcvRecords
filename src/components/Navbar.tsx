"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="w-full fixed top-[30px] z-60 flex items-center px-[63px] justify-between">
      <Link href="/" className="w-[75px] h-[75px] relative">
        <img
          src="/Logomark.svg"
          alt="Search"
          className="w-[75px] h-[75px] relative"
        />
      </Link>
      <nav className="bg-midnight rounded-full relative px-[30px] py-[6px]">
        <div className="mx-auto flex items-center justify-between whitespace-nowrap">
          {/* Desktop Menu */}
          <div className="gap-[40px] md:flex text-lg">
            <Link href="/sell" className="navMenu">
              Sell
            </Link>
            <Link href="/browse" className="navMenu flex items-center gap-2">
              Browse <ChevronRightIcon className="size-4" />
            </Link>
            <Link href="/our-corner" className="navMenu">
              Our Corner
            </Link>
            <Link href="/start-spinning" className="navMenu">
              Start Spinning
            </Link>
            <Link href="/jims-corner" className="navMenu">
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
