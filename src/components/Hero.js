import Image from "next/image";
import heroImage from "/public/images/hero.webp";
import { gemsbuck } from "@/app/page";

export default function Hero() {
  return (
    <section className="relative text-white">
      <picture className="sm:hidden">
        <source srcSet={heroImage} />
        <Image src={heroImage} alt="Rectem banner" priority />
      </picture>
      <video className="hidden sm:block lg:hidden" autoPlay loop muted>
        <source src="/hero-advert-md.mp4" />
      </video>
      <video className="hidden lg:block" autoPlay loop muted>
        <source src="/hero-advert-lg.mp4" />
        <source src="/hero-advert-lg.webm" />
      </video>
      <div className="flex justify-between w-full bg-black/50 absolute bottom-0 left-0 px-4">
        <h4
          className={`py-2 text-sm md:hidden tracking-wider ${gemsbuck.className}`}
        >
          RAISING GLOBAL CHAMPION 〽️
        </h4>
        <button className="hidden sm:block md:hidden uppercase text-xs border-2 border-white bg-black/50 py-1 px-2 my-1 tracking-widest font-medium hover:text-gray-200">
          Why students choose us
        </button>
      </div>
      <div className="max-w-sm bg-black/50 absolute top-1/4 left-8 p-5 hidden md:block">
        <h4 className={`pl-5 py-4 text-3xl ${gemsbuck.className}`}>
          RAISING GLOBAL CHAMPION 〽️
        </h4>
        <button className="uppercase text-sm border-2 border-white bg-black/50 p-3 ml-5 tracking-widest font-medium hover:text-gray-300 hover:border-gray-300">
          Why students choose us
        </button>
      </div>
    </section>
  );
}
