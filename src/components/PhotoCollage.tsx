import Image from "next/image";

// const albums = [
//   { src: "/images/albums/1.png",  classes: "top-4 left-1/12 -rotate-6 z-20" },
//   { src: "/images/albums/2.png",  classes: "top-0 left-1/3 rotate-3 z-30" },
//   { src: "/images/albums/3.png",  classes: "top-6 right-6 rotate-6 z-10" },
//   { src: "/images/albums/4.png",  classes: "top-40 left-0 rotate-2 z-20" },
//   { src: "/images/albums/5.png",  classes: "top-44 left-1/4 -rotate-3 z-40" },
//   { src: "/images/albums/6.png",  classes: "top-32 right-4 -rotate-6 z-30" },
//   { src: "/images/albums/7.png",  classes: "bottom-20 left-8 rotate-6 z-10" },
//   { src: "/images/albums/8.png",  classes: "bottom-16 left-1/3 -rotate-6 z-30" },
//   { src: "/images/albums/9.png",  classes: "bottom-16 right-10 rotate-2 z-20" },
//   { src: "/images/albums/10.png", classes: "top-20 left-1/2 -rotate-3 z-30" },
//   { src: "/images/albums/11.png", classes: "bottom-4 left-1/4 rotate-3 z-10" },
//   { src: "/images/albums/12.png", classes: "bottom-0 right-1/6 -rotate-6 z-40" },
// ];

const albums = [
    { src: "/images/albums/gray.png",  classes: "top-4 left-1/12 -rotate-6 z-20" },
    { src: "/images/albums/gray.png",  classes: "top-0 left-1/3 rotate-3 z-30" },
    { src: "/images/albums/gray.png",  classes: "top-6 right-6 rotate-6 z-10" },
    { src: "/images/albums/gray.png",  classes: "top-40 left-0 rotate-2 z-20" },
    { src: "/images/albums/gray.png",  classes: "top-44 left-1/4 -rotate-3 z-40" },
    { src: "/images/albums/gray.png",  classes: "top-32 right-4 -rotate-6 z-30" },
    { src: "/images/albums/gray.png",  classes: "bottom-20 left-8 rotate-6 z-10" },
    { src: "/images/albums/gray.png",  classes: "bottom-16 left-1/3 -rotate-6 z-30" },
    { src: "/images/albums/gray.png",  classes: "bottom-16 right-10 rotate-2 z-20" },
    { src: "/images/albums/gray.png", classes: "top-20 left-1/2 -rotate-3 z-30" },
    { src: "/images/albums/gray.png", classes: "bottom-4 left-1/4 rotate-3 z-10" },
    { src: "/images/albums/gray.png", classes: "bottom-0 right-1/6 -rotate-6 z-40" },
  ];

export default function PhotoCollage() {
  return (
    <div className="relative w-full max-w-[1400px] h-[900px] min-h-[900px] mx-auto m-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-500 z-50 w-[480px] h-[220px] flex justify-center items-center rounded-xl">
            PCV Records
        </div>

        {albums.map((album, i) => (
        <div
            key={i}
            className={`absolute w-[350px] shadow-2xl rounded-md ${album.classes}`}
        >
            <Image
            src={album.src}
            alt={`album-${i + 1}`}
            width={500}
            height={500}
            className="w-full h-auto rounded-md"
            priority={i < 4}
            />
        </div>
        ))}
    </div>
  );
}
