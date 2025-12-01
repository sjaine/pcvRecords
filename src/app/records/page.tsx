import EmblaCarousel from "@/src/components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'


const OPTIONS: EmblaOptionsType = { containScroll: false }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-15">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}