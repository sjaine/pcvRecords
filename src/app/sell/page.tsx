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
                <p className="w-1/2 text-lg pr-[70px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio.
                </p>
                <div className="w-1/2 pl-[70px] mt-[60px] mb-[216px]">
                    <Faq />
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
}
