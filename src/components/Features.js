"use client";

import { gemsbuck } from "@/app/page";
import { useCountUp } from "react-countup";

export default function Features() {
  useCountUp({
    ref: "student-counter",
    start: 500,
    end: 3200,
    separator: "",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true
  });

  useCountUp({
    ref: "department-counter",
    start: 1,
    end: 10,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
  });

  useCountUp({
    ref: "school-counter",
    start: 1,
    end: 5,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
  });

  useCountUp({
    ref: "programme-counter",
    start: 1,
    end: 2,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
  });

  return (
    <section className="px-5 md:px-10 bg-[url('/bg.png')] bg-no-repeat bg-cover py-28 ">
      <div className="text-white grid sm:grid-cols-2 lg:grid-cols-4 justify-center align-middle gap-10">
        <div className="text-center">
          {/* <div className="text-4xl mb-2">〽️</div> */}
          <h2 className="text-7xl pb-2">
            <span id="programme-counter" className={`${gemsbuck.className}`} />
          </h2>
          <h6 className="uppercase sm:mb-4 text-2xl font-extrabold min-h-[80px]">
            PROGRAMMES
          </h6>
          <p className="font-medium">ND & HND PROGRAMMES</p>
        </div>
        <div className="text-center">
          {/* <div className="text-4xl mb-2">〽️</div> */}
          <h2 className="text-7xl pb-2">
            <span id="school-counter" className={`${gemsbuck.className}`} />
          </h2>
          <h6 className="uppercase sm:mb-4 text-2xl font-extrabold min-h-[80px]">
            SCHOOLS
          </h6>
          <p className="font-medium">STRUCTURED SCHOOLS</p>
        </div>
        <div className="text-center">
          {/* <div className="text-4xl mb-2">〽️</div> */}
          <h2 className="text-7xl pb-2">
            <span id="department-counter" className={`${gemsbuck.className}`} />
          </h2>
          <h6 className="uppercase sm:mb-4 text-2xl font-extrabold min-h-[80px]">
            DEPARTMENTS
          </h6>
          <p className="font-medium">ACCREDITED DEPARTMENTS</p>
        </div>
        <div className="text-center">
          {/* <div className="text-4xl mb-2">〽️</div> */}
          <h2 className="text-7xl pb-2">
            <span id="student-counter" className={`${gemsbuck.className}`} />
          </h2>
          <h6 className="uppercase sm:mb-4 text-2xl font-extrabold min-h-[80px]">
            STUDENTS
          </h6>
          <p className="font-medium">GRADUATED STUDENTS</p>
        </div>
      </div>
    </section>
  );
}
