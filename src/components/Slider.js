import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../app/globals.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 40000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" w-full text-white tracking-wider">
            <Image
              src="/bg.png"
              alt=""
              width={700}
              height={500}
              className="min-h-[300px]"
            />
            <div className="absolute h-full max-w-[300px] md:max-w-[500px] text-left top-1/3 left-16 md:left-32">
              <h6 className="underline underline-offset-8 decoration-yellow-500 decoration-4 text-xs mb-5">
                DECEMBER 1, 2022
              </h6>
              <h6 className="text-xl mb-3 line-clamp-2">
                Admissions to ND & HND programmes for 2022/2023 Now Open!
              </h6>
              <a className="cursor-pointer bg-[#D6336B] px-4 py-2 text-xs">
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full text-white tracking-wider">
            <Image
              src="/bg.png"
              alt=""
              width={700}
              height={500}
              className="min-h-[300px]"
            />
            <div className="absolute h-full max-w-[300px] md:max-w-[400px] text-left top-1/3 left-16 md:left-32">
              <h6 className="underline underline-offset-8 decoration-yellow-500 decoration-4 text-xs mb-5">
                DECEMBER 1, 2022
              </h6>
              <h6 className="text-xl mb-3 line-clamp-2">
                Admissions to ND & HND programmes for 2022/2023 Now Open!
              </h6>
              <a className="cursor-pointer bg-[#D6336B] px-4 py-2 text-xs">
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
