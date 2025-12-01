import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-30">
        <Navbar />

        <div className="w-full pr-[107px] pl-[107px]">
            <p className="text-[213px] fatfrank">OUR CORNER</p>
            <div className="context flex">
                <p className="w-1/2 text-2xl pr-[70px]">
                John Anczurowski opened the shop in 2015 with a straightforward goal: build a place where music lovers feel at home. What started as a small passion project has grown into a neighbourhood spot for collectors, newcomers, and anyone who loves the ritual of flipping through vinyl. <br />
                <br />
                You’ll also see Lulu (John’s beloved shop dog) popping up on our socials and greeting customers. She’s been part of the store’s personality from the start, bringing a little joy to every visit. <br />
                <br />
                We’re here because music brings people together, and we’re proud to share that with our community every day.
                </p>

                <div className="w-1/2 pl-[70px] mb-[216px] flex justify-end">
                  <div className="w-[663px] h-[663px] aspect-square relative">
                    <Image src="/images/Images/john.jpg" width={663} height={663} alt="our corner" className="bg-gray-500 aspect-square rounded-2xl object-cover" />

                  <Image
                    src="/images/Images/cassette.png"
                    alt="cassette"
                    width={210}
                    height={130}
                    className="absolute top-[-10px] right-[-50px] rotate-[-12deg]"
                  />

                  <Image
                    src="/images/Images/record.png"
                    alt="record"
                    width={290}
                    height={290}
                    className="absolute bottom-[-40px] left-[0] -translate-x-1/2"
                  />

                  <Image
                    src="/images/Images/soundwaves.png"
                    alt="sound wave"
                    width={300}
                    height={300}
                    className="absolute bottom-[-20px] left-[35%] -translate-x-1/2 rotate-[-12deg]"
                  />
                  </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
}
