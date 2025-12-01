"use client";

import CdIcon from "@/public/images/dropdown/cd";
import BookIcon from "@/public/images/dropdown/books";
import VinylIcon from "@/public/images/dropdown/vinyl";
import BoxSetsIcon from "@/public/images/dropdown/box_sets";

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

  const browseMenus = [
    { name: "Vinyls", href: "/browse/vinyls", icon: "/images/dropdown/vinyl.svg" },
    { name: "CDs", href: "/browse/cds", icon: "/images/dropdown/cd.svg" },
    { name: "Box Sets", href: "/browse/box-sets", icon: "/images/dropdown/box_sets.svg" },
    { name: "Books", href: "/browse/books", icon: "/images/dropdown/books.svg" },
  ];

  return (
    <div className="w-full fixed top-[30px] z-60 flex items-center px-[63px] justify-between">
      <div className="fade-bottom absolute w-full"></div>

      <div className="w-[300px] relative">
        <Link href="/" className="w-[75px] h-[75px] relative">
          <img src="/Logomark.svg" alt="Logo" className="w-[75px] h-[75px]" />
        </Link>
      </div>

      {/* Center Nav */}
      <nav className="bg-midnight rounded-full relative px-[30px] py-[6px]">
        <div className="mx-auto flex items-center whitespace-nowrap">
          <div className="gap-[40px] md:flex text-base items-center">

            {menus.map((item) =>
              item.name === "Browse" ? (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`navMenuBroswe flex items-center gap-2 ${
                      pathname.startsWith("/browse") ? "nav-active" : ""
                    }`}
                  >
                    {item.name}
                    <ChevronRightIcon className="size-4 group-hover:rotate-90 transition-transform" />
                  </Link>

                  <div
                    className="
                      absolute left-0 top-6 mt-2 w-56 
                      bg-white text-black 
                      rounded-b-3xl rounded-tr-3xl 
                      shadow-lg py-4
                      opacity-0 invisble
                      group-hover:opacity-100 group-hover:visible
                      transition-all duration-200
                    "
                  >
                    <ul className="flex flex-col gap-3">
                      {browseMenus.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="flex items-center gap-2 px-4 mx-2 py-2 rounded-full hover:bg-black hover:text-lime hover:fill-lime transition-colors"
                          >
                            
                            {sub.name === "Vinyls" && (
                              <VinylIcon className="w-6 h-6 fill-[#12151c]" />
                            )}

                            {sub.name === "CDs" && (
                              <CdIcon className="w-6 h-6 fill-[#12151c]" />
                            )}

                            {sub.name === "Box Sets" && (
                              <BoxSetsIcon className="w-6 h-6 fill-[#12151c] " />
                            )}

                            {sub.name === "Books" && (
                              <BookIcon className="w-6 h-6 fill-[#12151c]" />
                            )}


                            <span className="text-base">{sub.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`navMenu flex items-center gap-2 ${
                    pathname === item.href ? "nav-active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>

      <img
        src="/images/search_bar.svg"
        alt="Search"
        className="w-[300px] h-[35px] relative right-0"
      />
    </div>
  );
}
