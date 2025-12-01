"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const albums = [
  { src: "/images/albums/1.png",  position: "top-30 left-1/8 z-20",  rotation: -6 },
  { src: "/images/albums/2.png",  position: "top-16 left-1/3 z-30",   rotation: 3 },
  { src: "/images/albums/3.png",  position: "top-22 right-1/6 z-10",    rotation: 6 },
  { src: "/images/albums/4.png",  position: "top-75 left-20 z-20",    rotation: 2 },
  { src: "/images/albums/5.png",  position: "top-50 left-1/4 z-40",  rotation: -3 },
  { src: "/images/albums/6.png",  position: "top-72 right-20 z-30",   rotation: -6 },
  { src: "/images/albums/7.png",  position: "bottom-30 left-1/8 z-10", rotation: 6 },
  { src: "/images/albums/8.png",  position: "bottom-36 left-100 z-30", rotation: -6 },
  { src: "/images/albums/9.png",  position: "bottom-30 right-40 z-20", rotation: 2 },
  { src: "/images/albums/10.png", position: "top-30 left-1/2 z-30",  rotation: -3 },
  { src: "/images/albums/11.png", position: "bottom-24 left-160 z-10", rotation: 3 },
  { src: "/images/albums/12.png", position: "bottom-60 right-1/5 z-40", rotation: -6 },
];

export default function PhotoCollage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <motion.div ref={containerRef} className="relative w-full h-[1100px]">
      <div className="relative w-full max-w-[1400px] h-[900px] min-h-[900px] mx-auto m-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center rounded-xl">
          <img
            src="/Hortizontal_Logo.svg"
            alt="Search"
            className="relative w-[500px]"
            draggable={false}
          />
        </div>

        {albums.map((album, i) => (
        <motion.div
          key={i}
          drag
          dragConstraints={containerRef}
          dragElastic={0.25}
          onDragStart={() => setActiveIndex(i)}
          onDragEnd={() => setActiveIndex(null)}
          className={`absolute w-[280px] shadow-2xl rounded-md cursor-grab active:cursor-grabbing ${album.position}`}
          style={{
            zIndex: activeIndex === i ? 999 : undefined,
          }}
          animate={{
            y: [0, -8, 0, 4, 0],
            rotate: [
              album.rotation,
              album.rotation + 1.5,
              album.rotation - 1.5,
              album.rotation,
            ],
          }}
          whileHover={{
            scale: 1.04,
            rotate: 0,
            boxShadow: "0px 24px 45px rgba(0,0,0,0.35)",
          }}
          whileTap={{ scale: 0.97 }}
          whileDrag={{
            scale: 1.08,
            rotate: 0,
            boxShadow: "0px 28px 60px rgba(0,0,0,0.45)",
          }}
        >
          <Image
            src={album.src}
            alt={`album-${i + 1}`}
            width={500}
            height={500}
            draggable={false}
            className="w-full h-auto rounded-md"
            priority={i < 4}
          />
        </motion.div>
      ))}
      </div>
    </motion.div>
  );
}
