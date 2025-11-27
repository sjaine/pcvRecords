import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import Card from "@/src/components/Card"

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-15">
        <Navbar />

        <div className="w-full pr-[107px] pl-[107px]">
            <p className="text-[213px]">TITLE</p>
            <div className="context flex gap-[15px]">
                <button className="rounded-full text-[19px] border px-8 py-2">Sort by</button>
                <button className="rounded-full text-[19px] border px-8 py-2">Filter</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-[50px] mb-[104px]">
                {Array.from({ length: 10 }).map((_, index) => (
                    <Card key={index} />
                ))}
                </div>
        </div>

        <Footer />
    </div>
  );
}
