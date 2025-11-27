import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import Link from "next/link";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-15">
        <Navbar />

        <div className="w-full pr-[107px] pl-[107px]">
            <p className="text-[213px] fatfrank">JIM'S CORNER</p>

            <div className="context flex mb-[65px]">
                <div className="w-1/2 pr-[70px]">
                    <p className="text-2xl">
                    Jim brings his love for sound into everything he does. When he’s not helping customers find their next favourite record, he’s creating music grounded in storytelling, memory, and human connection. His work blends spoken word, atmospheric arrangements, and honest reflection, forming pieces that feel both intimate and expansive.
                    <br /> <br />
                    He shares his projects, performances, and writings on his website, where his approach to art and community really comes through.
                    </p>
                    <Link href="https://www.clarkinstitute.com/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center align-center bg-lime rounded-full px-[20px] py-[8px] gap-1 mt-[60px]">
                        <p className="text-2xl text-black font-medium">Explore More</p> 
                        <ChevronRightIcon className="size-7 text-black" />
                    </Link>
                </div>
                <div className="w-1/2 pl-[70px] mb-[216px] flex justify-end">
                    <div className="w-[663px] h-[663px] bg-gray-500 rounded-2xl"></div>
                </div>
            </div>

            <div className="mb-[130px]">
                <p className="mb-[32px] text-4xl">Title</p>
                <div className="flex justify-between">
                    <div className="w-[360px] h-[360px] bg-gray-500 rounded-4xl"></div>
                    <div className="w-[360px] h-[360px] bg-gray-500 rounded-4xl"></div>
                    <div className="w-[360px] h-[360px] bg-gray-500 rounded-4xl"></div>
                    <div className="w-[360px] h-[360px] bg-gray-500 rounded-4xl"></div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
}
