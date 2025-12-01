import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import StepCard from "@/src/components/StepCard"

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-30">
        <Navbar />

        <div className="w-full pr-[107px] pl-[107px]">
            <p className="text-[180px] fatfrank">START SPINNING</p>

            <div className="context flex mb-[65px]">
                <p className="w-1/2 text-lg pr-[70px]">
                Starting a vinyl collection can feel overwhelming, especially with so many formats, pressings, and turntable setups out there. The good news is that getting into vinyl doesn’t have to be complicated. With a few simple tips and a bit of curiosity, anyone can begin building a collection that feels personal and exciting. Below are a few essentials to help new collectors feel confident as they get started. 
                </p>
            </div>

            <div className="mb-[130px]">
                <div>
                    <StepCard />
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
}
