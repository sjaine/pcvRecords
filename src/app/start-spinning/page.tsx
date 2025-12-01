import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import StepCard from "@/src/components/StepCard"

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-30">
        <Navbar />

        <div className="w-full pr-[107px] pl-[107px]">
            <p className="text-[213px] fatfrank">START SPINNING</p>

            <div className="context flex mb-[65px]">
                <p className="w-1/2 text-2xl pr-[70px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio.
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
