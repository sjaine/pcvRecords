import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-15">
        <Navbar />

        <div className="w-full pr-[107px] pl-[107px]">
            <p className="text-[213px]">TITLE</p>
            <div className="context flex">
                <p className="w-1/2 text-lg pr-[70px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio.
                </p>
                <div className="w-1/2 pl-[70px] mb-[216px] flex justify-end">
                    <div className="w-[663px] h-[663px] bg-gray-500 rounded-2xl"></div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
}
