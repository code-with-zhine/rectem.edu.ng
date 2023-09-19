import Image from "next/image";
import localFont from "next/font/local";
import Hero from "@/components/Hero";

import rectem01 from "/public/rectem01.jpg";
import partTime from "../../public/images/part-time.png";
import Link from "next/link";

import Features from "@/components/Features";
import FollowUs from "@/components/Follow-us";
import Calendar from "@/components/Calendar";
import Blog from "@/components/Blog";
import Event from "@/components/Event";

import { current } from "../../data/calendar-data";
import { eventsData } from "../../data/event-data";
import { blogsData } from "../../data/blogs-data";

export const gemsbuck = localFont({ src: "../../public/gemsbuck.ttf" });

export default function Home() {
  const calendar = current.slice(0, 5);
  const events = eventsData;
  const blogs = blogsData.slice(0, 2);

  return (
    <>
      <Hero />
      <main>
        <section className="px-5 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
          <div className="">
            <h2
              className={`text-2xl tracking-wider text-[#003DA5] pb-2 ${gemsbuck.className}`}
            >
              RAISING GLOBAL CHAMPION
            </h2>
            <p className="text-gray-500 pb-3 text-justify">
              {`Redeemer's College of Science and Technology believe in the
              boundless potential of scientific discovery and technological
              innovation. Our institution stands as a testament to the
              transformative power of education, where students embark on a
              journey of exploration, creativity, and intellectual growth. From
              cutting-edge research to hands-on experiential learning, we are
              dedicated to shaping the next generation of leaders, thinkers, and
              problem solvers.`}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center bg-[#003DA5] text-white text-xs tracking-widest uppercase font-semibold py-2 px-5 hover:bg-[#003DA5]"
            >
              LEARN MORE ABOUT RECTEM
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"
                />
                <path
                  fill="currentColor"
                  d="m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"
                />
              </svg>
            </Link>
          </div>
          <div className="">
            <Image
              src={rectem01}
              alt="Rectem banner"
              className="w-auto h-auto"
            />
          </div>
        </section>
        {/* Features */}
        <Features />
        <section className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
          <article id="news" className="sm:col-span-2">
            <h1
              className={`text-2xl mb-2 text-[#003DA5] ${gemsbuck.className}`}
            >
              NEWS
            </h1>
            <hr />
            {/* News card */}
            <div className="grid sm:grid-cols-2 gap-5 py-10">
              {blogs
                ? blogs.map((blog, index) => (
                    <Blog
                      key={index}
                      href={blog.href}
                      date={blog.date}
                      title={blog.title}
                      imageUrl={blog.imageUrl}
                      body={blog.body}
                    />
                  ))
                : null}
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center bg-[#003DA5] text-white text-xs tracking-widest uppercase font-semibold py-3 px-5 hover:bg-[#003DA5]"
            >
              MORE NEWS
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"
                />
                <path
                  fill="currentColor"
                  d="m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"
                />
              </svg>
            </Link>
          </article>
          <article id="events" className="sm:col-span-1">
            <h1
              className={`text-2xl mb-2 text-[#003DA5] ${gemsbuck.className}`}
            >
              EVENTS
            </h1>
            <hr />
            <section className="py-8">
              {events
                ? events.map((event, index) => (
                    <Event
                      key={index}
                      month={event.month}
                      date={event.date}
                      time={event.time}
                      event={event.event}
                      location={event.location}
                    />
                  ))
                : null}
            </section>
            <Link
              href="/events"
              className="inline-flex items-center bg-[#003DA5] text-white text-xs tracking-widest uppercase font-semibold py-3 px-5 hover:bg-[#003DA5]"
            >
              ALL EVENTS
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"
                />
                <path
                  fill="currentColor"
                  d="m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"
                />
              </svg>
            </Link>
          </article>
        </section>

        <section
          id="campus-map"
          className="px-5 md:px-10 py-24 bg-[url('/tour.png')] bg-no-repeat bg-cover"
        >
          <div className="p-7 md:p-10 bg-[#003DA5] bg-opacity-70 max-w-[600px] text-white">
            <h2 className={`pb-1 text-xl ${gemsbuck.className}`}>
              EXPLORE RECTEM
            </h2>
            <p className="pb-3">
              {`Embark on a journey through the RECTEM campus, granting you an
              exclusive insider's view from anywhere around the globe.`}
            </p>
            <Link
              href="/campus-map"
              className="items-center bg-[#f1ab00] text-black text-xs tracking-widest uppercase font-bold py-3 px-5 hover:bg-[#f1ab00]"
            >
              CAMPUS TOUR
            </Link>
          </div>
        </section>

        <section className="section flex justify-between gap-10 flex-col md:flex-row py-16">
          <div className="md:w-1/2 self-center ">
            <Image src={partTime} alt="" />
          </div>
          <div className="md:w-1/2">
            <h2 className={`text-xl text-[#003DA5] pb-2 ${gemsbuck.className}`}>
              School of Part-Time: Empowering Your Educational Journey
            </h2>
            <p className="text-gray-500 pb-5 text-justify">
              {`At the Redeemer's College of Technology and Management, we
              understand that the pursuit of higher education often aligns with
              existing commitments and responsibilities. That's why we proudly
              introduce the School of Part-Time Studies, a dynamic platform
              designed to provide flexible and accessible learning opportunities
              to individuals who are seeking to enhance their skills and
              knowledge while balancing work, family, and personal commitments.`}
            </p>
            <Link
              href="/schools/part-time"
              className="inline-flex gap-1 items-center underline text-[#D6336B] text-xs tracking-widest uppercase font-semibold py-3"
            >
              LEARN MORE
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10.8 15.9l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1a.5.5 0 0 0-.8.4v7c0 .41.47.65.8.4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"
                />
              </svg>
            </Link>
          </div>
        </section>

        <section id="calendar" className="bg-blue-50 p-10">
          <h1 className={`text-2xl mb-2 text-[#003DA5] ${gemsbuck.className}`}>
            ACADEMIC CALENDAR
          </h1>
          <hr className="border-t-[2px] mb-5" />
          <section className="grid max-[430px]:grid-cols-1 min-[430px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-[430px]:justify-center items-center py-5">
            {calendar
              ? calendar.map((c, index) => (
                  <Calendar
                    key={index}
                    month={c.month}
                    date={c.date}
                    activity={c.activity}
                  />
                ))
              : null}
          </section>
          <div className="flex justify-center">
            <Link
              href="/calendar"
              className="justify-self-centers inline-flex items-center bg-[#003DA5] text-white text-xs tracking-widest uppercase font-semibold py-3 px-5 hover:bg-[#003DA5]"
            >
              VIEW CALENDAR
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"
                />
                <path
                  fill="currentColor"
                  d="m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"
                />
              </svg>
            </Link>
          </div>
        </section>

        <section className="px-5 md:px-10 py-20 text-center">
          <h4 className={`text-[#003DA5] text-xl ${gemsbuck.className}`}>
            Learn How Affordable RECTEM Fees Can Be
          </h4>
          <p className="p-5 text-gray-500">
            {`Our philosophy centers on delivering world-class education that
            doesn't come with a hefty price tag. We firmly believe that
            affordability should never compromise the quality of education.`}
          </p>
          <div className="grid gap-4 max-w-sm mx-auto border rounded-sm pt-4">
            <svg
              className="m-auto text-[#003DA5]"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.392 0c-6.752 0-12 5.498-12 12c0 6.574 5.313 12 12 12c4.283 0 8.087-2.254 10.217-5.704a.571.571 0 0 0-.2-.795l-5.55-3.204a.572.572 0 0 0-.76.177a4.453 4.453 0 0 1-3.707 1.983c-2.458 0-4.458-2-4.458-4.457c0-2.458 2-4.457 4.458-4.457c1.491 0 2.877.741 3.707 1.983a.571.571 0 0 0 .76.177l5.55-3.204a.571.571 0 0 0 .2-.795A11.998 11.998 0 0 0 12.392 0zm0 3.527c3.048 0 5.72 1.61 7.213 4.026l-2.99 1.726c-.037.021-.085.013-.108-.026a4.942 4.942 0 0 0-4.115-2.2A4.953 4.953 0 0 0 7.445 12c0 .9.241 1.745.663 2.473l-2.342 1.353a.327.327 0 0 0-.112.458a7.977 7.977 0 0 0 6.738 3.7a7.978 7.978 0 0 0 6.789-3.781l2.983 1.722a.08.08 0 0 1 .028.113a11.447 11.447 0 0 1-9.8 5.472C6.045 23.51.882 18.346.882 12c0-2.095.562-4.06 1.544-5.754l2.35 1.356c.15.088.345.04.439-.11a8.467 8.467 0 0 1 7.177-3.966zM22.965 8.95a.666.666 0 0 0-.336.088l-4.149 2.395a.654.654 0 0 0 0 1.131l4.149 2.396c.434.25.98-.064.98-.566v-4.79a.655.655 0 0 0-.644-.654zm-.663 1.785v2.528L20.112 12z"
              />
            </svg>
            <Link
              href="/admission-cost"
              className="text-xs text-center bg-[#003DA5] text-white uppercase font-semibold p-4 hover:bg-[#D6336B]"
            >
              FEES STRUCTURE
            </Link>
          </div>
        </section>

        <section className="px-5 md:px-10 bg-[url('/degree.png')] bg-no-repeat bg-cover py-20">
          <div className="p-7 md:p-10 ml-auto bg-[#003DA5] bg-opacity-70 max-w-[600px] text-white">
            <h2 className={`pb-1 ${gemsbuck.className}`}>
              ENTREPRENEURSHIP PROGRAMMES
            </h2>
            <p className="pb-3">
              RECTEM entrepreneurship programmes are designed to empower
              individuals with the skills, knowledge, and mindset needed to
              excel in the world of business and innovation.
            </p>
            <Link
              href="/entrepreneurship"
              className="items-center bg-[#f1ab00] text-black text-xs tracking-widest uppercase font-bold py-3 px-5 hover:bg-[#f1ab00]"
            >
              LEARN MORE
            </Link>
          </div>
        </section>

        <section id="why-student-choose-us" className="p-16 text-center">
          <h2 className={`${gemsbuck.className} text-[#003DA5] text-2xl mb-10`}>
            Attending RECTEM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center py-5">
            <article className="max-w-full sm:max-w-[270px] justify-self-center text-center">
              <svg
                className="m-auto text-[#003DA5]"
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8zm0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm2 8H7v2h7v-2zm0-3H7v2h7V7zm-7 8h3v-2H7v2zm12-1.59L17.59 12l-3.54 3.54l-1.41-1.41l-1.41 1.41l2.83 2.83L19 13.41z"
                />
              </svg>
              <div className="flex flex-col gap-2 bg-white text-gray-500 p-4 pt-6 pb-16">
                <h4
                  className={`${gemsbuck.className} text-[#003DA5] min-h-[60px]`}
                >
                  FULLY ACCREDITED PROGRAMS
                </h4>
                <p>
                  Our courses are fully accredited by National Board for
                  Technical Education (NBTE)
                </p>
              </div>
            </article>
            <article className="max-w-full sm:max-w-[270px] justify-self-center text-center">
              <svg
                className="m-auto text-[#003DA5]"
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m16.95 10.23l-5.66 5.66a.996.996 0 0 1-1.41 0l-2.83-2.83a.996.996 0 1 1 1.41-1.41l2.12 2.12l4.95-4.95a.996.996 0 0 1 1.41 0c.4.39.4 1.02.01 1.41zM4 12c0-2.33 1.02-4.42 2.62-5.88l1.53 1.53A.5.5 0 0 0 9 7.29V3c0-.28-.22-.5-.5-.5H4.21c-.45 0-.67.54-.35.85L5.2 4.7C3.24 6.52 2 9.11 2 12c0 4.75 3.32 8.73 7.76 9.75c.63.14 1.24-.33 1.24-.98c0-.47-.33-.87-.79-.98C6.66 18.98 4 15.8 4 12zm18 0c0-4.75-3.32-8.73-7.76-9.75c-.63-.14-1.24.33-1.24.98c0 .47.33.87.79.98C17.34 5.02 20 8.2 20 12c0 2.33-1.02 4.42-2.62 5.88l-1.53-1.53a.5.5 0 0 0-.85.36V21c0 .28.22.5.5.5h4.29c.45 0 .67-.54.35-.85L18.8 19.3c1.96-1.82 3.2-4.41 3.2-7.3z"
                />
              </svg>
              <div className="flex flex-col gap-2 bg-white text-gray-500 p-4 pt-6 pb-16">
                <h4
                  className={`${gemsbuck.className} text-[#003DA5] min-h-[60px]`}
                >
                  DEDICATED WORKFORCE
                </h4>
                <p>
                  Highly trained and dedicated workforce with 21st century
                  skills and quality years of experience.
                </p>
              </div>
            </article>
            <article className="max-w-full sm:max-w-[270px] justify-self-center text-center">
              <svg
                className="m-auto text-[#003DA5]"
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
                  <path d="m10 16.5l2-3l2 3m-2-3v-2l3-1m-6 0l3 1" />
                  <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
                </g>
              </svg>
              <div className="flex flex-col gap-2 bg-white text-gray-500 p-4 pt-6 pb-16">
                <h4
                  className={`${gemsbuck.className} text-[#003DA5] min-h-[60px]`}
                >
                  AFFORDABLE AND ACCESIBLE
                </h4>
                <p>
                  Payment of fees can be paid installmentally and there are
                  scholarship opportunities for students.
                </p>
              </div>
            </article>
            <article className="max-w-full sm:max-w-[270px] justify-self-center text-center">
              <svg
                className="m-auto text-[#003DA5]"
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 22a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm0-2a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm1-7h3v2h-5V8h2v5ZM1.745 6.283l3.536-3.536l1.414 1.414L3.16 7.697L1.746 6.283Zm16.97-3.536l3.536 3.536l-1.414 1.414l-3.536-3.536l1.415-1.414Z"
                />
              </svg>
              <div className="flex flex-col gap-2 bg-white text-gray-500 p-4 pt-6 pb-16">
                <h4
                  className={`${gemsbuck.className} text-[#003DA5] min-h-[60px]`}
                >
                  FAST ACADEMIC CALENDAR
                </h4>
                <p>
                  {`We are not members of organized labour hence we don't go on
                  strike making our academic calendar faster.`}
                </p>
              </div>
            </article>
          </div>
        </section>

        <FollowUs />
      </main>
    </>
  );
}
