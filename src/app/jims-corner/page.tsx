import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-15">
        <Navbar />

        <div className="w-full pr-[107px] pl-[107px]">
            <p className="text-[213px] fatfrank">TITLE</p>

            <div className="context flex mb-[65px]">
                <div className="w-1/2 pr-[70px]">
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio.
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio.
                    </p>
                    <button>Learn More</button>
                </div>
                <div className="w-1/2 pl-[70px] mb-[216px] flex justify-end">
                    <div className="w-[663px] h-[663px] bg-gray-500 rounded-2xl"></div>
                </div>
            </div>

            <div className="mb-[130px]">
                <p className="mb-[32px] text-4xl">Title</p>
                <div className="flex justify-between">
                    <div className="w-[360px] h-[360px] bg-gray-500 rounded-4xl"></div>
                    <div className="w-[360px] h-[360px] bg-gray-500 rounded-4xl"></div>
                    <div className="w-[360px] h-[360px] bg-gray-500 rounded-4xl"></div>
                    <div className="w-[360px] h-[360px] bg-gray-500 rounded-4xl"></div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
}
