import NavBar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import PhotoCollage from "../components/PhotoCollage";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-15">
      <NavBar />

      <div className="w-full pr-[107px] pl-[107px]">
        <div className="w-full h-[900px] mt-30 mb-35">
          <PhotoCollage />
        </div>
        
        <div className="w-full flex flex-col justify-left mb-[152px]">
          <p className="mb-[32px] text-4xl font-bold">New Releases</p>
          <div className="flex w-full justify-between items-center">
            <ChevronLeftIcon className="size-10 text-lime" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[50px] mb-[104px] content-around justify-items-center w-full">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Card key={index} />
                ))}
            </div>
            <ChevronRightIcon className="size-10 text-lime" />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
