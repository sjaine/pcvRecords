"use client";

export default function Footer() {
  return (
    <div className="relative w-full h-[350px] bg-gray-600 rounded-[50px] py-16 px-10 overflow-hidden bottom-0">
      
      {/* Background giant text */}
      <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[180px] font-extrabold text-gray-500 opacity-40 whitespace-nowrap pointer-events-none select-none">
        POP CULTURE VULTURE
      </h1>

      <div className="relative z-10 mx-auto max-w-7xl flex justify-between text-white">
        {/* Left circles */}
        <div className="flex items-start gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-[#d6d6d6]" />
          ))}
        </div>

        <div className="flex gap-[100px]">
            {/* Contact */}
            <div className="flex flex-col">
            <span className="font-medium text-sm">Contact</span>
            <span className="mt-2 text-lg">(905) 338-8858</span>
            </div>

            {/* Location */}
            <div className="flex flex-col">
            <span className="font-medium text-sm">Location</span>
            <span className="mt-2 text-lg">
                649 Fourth Line <br />
                Oakville, ON, Canada
            </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col">
            <span className="font-medium text-sm">Hours</span>
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
