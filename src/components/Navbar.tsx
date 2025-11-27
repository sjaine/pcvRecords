"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const pathname = usePathname();

  const menus = [
    { name: "Sell", href: "/sell" },
    { name: "Browse", href: "/browse", icon: true },
    { name: "Our Corner", href: "/our-corner" },
    { name: "Start Spinning", href: "/start-spinning" },
    { name: "Jim's Corner", href: "/jims-corner" },
  ];

  return (
    <div className="w-full fixed top-[30px] z-60 flex items-center px-[63px] justify-between">
      <Link href="/" className="w-[75px] h-[75px] relative">
        <img
          src="/Logomark.svg"
          alt="Logo"
          className="w-[75px] h-[75px] relative"
        />
      </Link>

      <nav className="bg-midnight rounded-full relative px-[30px] py-[6px]">
        <div className="mx-auto flex items-center whitespace-nowrap">
          <div className="gap-[40px] md:flex text-lg">
            {menus.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`navMenu flex items-center gap-2 ${
                  pathname === item.href ? "nav-active" : ""
                }`}
              >
                {item.name}
                {item.icon && <ChevronRightIcon className="size-4" />}
              </Link>
            ))}
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
