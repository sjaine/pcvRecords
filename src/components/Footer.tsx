"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative w-full h-[350px] bg-lime rounded-[50px] py-16 px-10 overflow-hidden bottom-0">
      
      {/* Background giant text */}
      <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[200px] font-extrabold text-lime-dark opacity-40 whitespace-nowrap pointer-events-none select-none fatfrank">
        POP CULTURE VULTURE
      </h1>

      <div className="relative z-10 mx-auto px-[44px] flex justify-between text-black">
        {/* Left Icons */}
        <div className="flex items-start gap-4">
          <Link href="https://www.facebook.com/pcvoakville/">
            <img src="/images/icons/facebook.svg" alt="Facebook" className="w-[50px] h-[50px]" />
          </Link>
          <Link href="https://www.instagram.com/pcvrecords">
            <img src="/images/icons/instagram.svg" alt="Facebook" className="w-[50px] h-[50px]" />
          </Link>
          <Link href="https://x.com/pcvrecords?lang=en">
            <img src="/images/icons/twitter.svg" alt="Facebook" className="w-[50px] h-[50px]" />
          </Link>
          <Link href="mailto:john@pcvrecords.com">
            <img src="/images/icons/email.svg" alt="Facebook" className="w-[50px] h-[50px]" />
          </Link>
        </div>

        <div className="flex gap-[100px]">
            {/* Contact */}
            <div className="flex flex-col">
            <span className="text-sm font-bold">Contact</span>
            <span className="mt-2 text-lg">(905) 338-8858</span>
            </div>

            {/* Location */}
            <div className="flex flex-col">
            <span className="font-bold text-sm">Location</span>
            <span className="mt-2 text-lg">
                649 Fourth Line <br />
                Oakville, ON, Canada
            </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col">
            <span className="font-bold text-sm">Hours</span>
            <span className="mt-2 text-lg leading-relaxed">
                Mon – Fri: 10am–6pm <br />
                Sat: 10am–5pm <br />
                Sun: 11am–5pm
            </span>
            </div>
        </div>
      </div>
    </div>
  );
}
