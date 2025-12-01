import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import Link from "next/link";
import Image from "next/image";

import EmblaCarousel from "@/src/components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'

import { ChevronRightIcon } from "@heroicons/react/24/outline";

const OPTIONS: EmblaOptionsType = { containScroll: false, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const albums = [
    {
      title: "Orange Christmas",
      cover: "/images/Images/ornage_christmas.jpg",
    },
    {
      title: "Under the Lampshade",
      cover: "/images/Images/lampshade.jpg",
    },
    {
      title: "A Kinder You",
      cover: "/images/Images/kinder_you.jpg",
    },
    {
      title: "Marcella Never Got The News",
      cover: "/images/Images/marcella.jpg",
    },
  ]

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-30">
        <Navbar />

        <div className="w-full pr-[107px] pl-[107px]">
            <p className="text-[180px] fatfrank">JIM'S CORNER</p>

            <div className="context flex mb-[65px]">
                <div className="w-1/2 pr-[70px]">
                    <p className="text-lg">
                    Jim brings his love for sound into everything he does. When he’s not helping customers find their next favourite record, he’s creating music grounded in storytelling, memory, and human connection. His work blends spoken word, atmospheric arrangements, and honest reflection, forming pieces that feel both intimate and expansive.
                    <br /> <br />
                    He shares his projects, performances, and writings on his website, where his approach to art and community really comes through.
                    </p>
                    <Link href="https://www.clarkinstitute.com/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center align-center bg-lime rounded-full px-[20px] py-[8px] gap-1 mt-[60px]">
                        <p className="text-2xl text-black font-medium">Explore More</p> 
                        <ChevronRightIcon className="size-7 text-black" />
                    </Link>
                </div>
                <div className="w-1/2 pl-[70px] mb-[50px] flex justify-end">
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </div>
            </div>

            <div className="mb-[130px]">
                <p className="mb-[32px] text-4xl font-bold">Jim's Music</p>
                <div className="flex gap-8 justify-between">
                    {albums.map((album) => (
                    <div
                        key={album.title}
                        className="w-[400px] bg-white rounded-[32px] p-6 flex flex-col shadow-lg"
                    >
                        {/* cover image */}
                        <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-6">
                        <Image
                            src={album.cover}
                            alt={album.title}
                            width={360}
                            height={360}
                            className="w-full h-full object-cover"
                        />
                        </div>

                        {/* title */}
                        <p className="text-3xl font-semibold text-black leading-tight">
                        {album.title}
                        </p>
                    </div>
                    ))}
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
}
