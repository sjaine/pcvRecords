import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import Faq from "@/src/components/Faq"

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-15">
        <Navbar />

        <div className="w-full pr-[107px] pl-[107px]">
            <p className="text-[213px] fatfrank">SELL YOUR VINYL</p>
            <div className="context flex">
                <p className="w-1/2 text-2xl pr-[70px]">
                Got records collecting dust? We buy vinyl of all eras and genres, from single pieces to full collections, and you choose: cash or trade. Bring your records in anytime and we’ll give you a quick, honest appraisal. <br />
                <br />
                Please give us a call at 905-338-8858 before coming.
                </p>
                <div className="w-1/2 pl-[70px] mb-[216px]">
                    <p className="font-bold text-3xl mb-[10px]">FAQ</p>
                    <Faq />
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
}
