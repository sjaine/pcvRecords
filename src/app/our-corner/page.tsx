import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-30">
        <Navbar />

        <div className="w-full pr-[107px] pl-[107px]">
            <p className="text-[180px] fatfrank">OUR CORNER</p>
            <div className="context flex">
                <p className="w-1/2 text-lg pr-[70px]">
                John Anczurowski opened the shop in 2015 with a simple goal: create a place where music lovers feel at home. PCV stands for Pop Culture Vulture, a name that reflects the spirit of digging, discovering, and celebrating the music that shapes us. The shop has grown into a neighbourhood spot for collectors, newcomers, and anyone who loves the ritual of flipping through vinyl. <br />
                <br />
                Lulu, John’s beloved shop dog, often appears on our socials and in the store. She’s part of the shop’s charm and brings a little joy to everyone who visits. We’re here because music brings people together, and we’re proud to share that with our community every day.
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
