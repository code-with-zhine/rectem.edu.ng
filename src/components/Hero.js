import Image from "next/image";
import heroImage from "/public/hero.png";
import { gemsbuck } from "@/app/page";

export default function Hero() {
  return (
    <section className="relative text-white">
      <picture className="w-full">
        <Image src={heroImage} alt="Rectem banner" className="min-h-[250px]" />
      </picture>
      <div className="flex justify-between w-full bg-black/50 absolute bottom-0 left-0 px-4">
        <h4
          className={`py-2 text-xs md:hidden tracking-wider ${gemsbuck.className}`}
        >
          RAISING GLOBAL CHAMPION 〽️
        </h4>
        <a
          href="#why-student-choose-us"
          className="hidden sm:block md:hidden uppercase text-xs border-2 border-white bg-black/50 py-1 px-2 my-1 tracking-widest font-medium hover:text-gray-200"
        >
          Why students choose us
        </a>
      </div>
      <div className="max-w-sm bg-black/50 absolute md:top-5 lg:top-1/4 left-8 p-5 hidden md:block">
        <h4 className={`pl-5 py-4 text-3xl ${gemsbuck.className}`}>
          RAISING GLOBAL CHAMPION
        </h4>
        <a
          href="#why-student-choose-us"
          className="uppercase text-sm border-2 border-white bg-black/50 p-3 ml-5 tracking-widest font-medium hover:text-gray-300 hover:border-gray-300"
        >
          Why students choose us
        </a>
      </div>
    </section>
  );
}
