import Image from "next/image";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { gemsbuck } from "@/app/page";

import placeholder from "../../public/images/placeholder.png";
import partTime from "../../public/images/part-time.png";
import calender from "../../public/images/calender.jpg";
import student from "../../public/images/student.webp";

export default function Main() {
  return (
    <main>
      <section className="section flex justify-between gap-10 flex-col md:flex-row">
        <div className="md:w-3/5">
          <h1>〽️</h1>
          <h2
            className={`text-2xl tracking-wider text-blue-800 pb-2 ${gemsbuck.className}`}
          >
            RAISING GLOBAL CHAMPION
          </h2>
          <p className="text-gray-500 pb-5">
            At the Redeemer's College of Science and Technology, we believe in
            the boundless potential of scientific discovery and technological
            innovation. Our institution stands as a testament to the
            transformative power of education, where students embark on a
            journey of exploration, creativity, and intellectual growth. From
            cutting-edge research to hands-on experiential learning, we are
            dedicated to shaping the next generation of leaders, thinkers, and
            problem solvers.
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-blue-800 text-white text-xs tracking-widest uppercase font-semibold py-3 px-5 hover:bg-blue-900"
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
          </a>
        </div>
        <div className="md:w-2/5 self-center ">
          <Image src={placeholder} alt="" />
          {/* <button className="text-white absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
            <AiOutlinePlayCircle size="5em" />
          </button> */}
        </div>
      </section>
      <section className="bg-[url('/bg.png')] bg-no-repeat bg-cover p-10 ">
        <div className="text-white grid sm:grid-cols-2 lg:grid-cols-4 justify-center align-middle gap-10">
          <div className="text-center">
            <div className="text-4xl mb-2">〽️</div>
            <h2 className={`text-7xl pb-2 ${gemsbuck.className}`}>2</h2>
            <h6 className="uppercase sm:mb-4 text-2xl font-extrabold min-h-[80px] tracking-wider">
              PROGRAMS
            </h6>
            <p className="text-xs tracking-wider">ND & HND PROGRAMS</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">〽️</div>
            <h2 className={`text-7xl pb-2 ${gemsbuck.className}`}>5</h2>
            <h6 className="uppercase sm:mb-4 text-2xl font-extrabold min-h-[80px] tracking-wider">
              SCHOOLS
            </h6>
            <p className="text-xs tracking-wider">STRUCTURED SCHOOLS</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">〽️</div>
            <h2 className="text-7xl pb-2">
              <span className={`${gemsbuck.className}`}>10</span>
              <span>+</span>
            </h2>
            <h6 className="uppercase sm:mb-4 text-2xl font-extrabold min-h-[80px] tracking-wider">
              DEPARTMENTS
            </h6>
            <p className="text-xs tracking-wider">ACCREDITED DEPARTMENTS</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">〽️</div>
            <h2 className="text-7xl pb-2">
              <span className={`${gemsbuck.className}`}>3k</span>
              <span>+</span>
            </h2>
            <h6 className="uppercase sm:mb-4 text-2xl font-extrabold min-h-[80px] tracking-wider">
              STUDENTS
            </h6>
            <p className="text-xs tracking-wider">GRADUATED STUDENTS</p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 sm:px-10 py-10">
        <article id="news" className="sm:col-span-2">
          <h1
            className={`text-2xl mb-2 text-blue-800 tracking-wider ${gemsbuck.className}`}
          >
            NEWS
          </h1>
          <hr />
          {/* News card */}
          <div className="grid sm:grid-cols-2 gap-5 py-10">
            <a className="relative sm:min-w-[200px] sm:max-w-[350px] border-[1px] rounded-t-lg  shadow-md hover:shadow-yellow-500 transition duration-500 ease-in-out cursor-pointer">
              <div>
                <Image
                  src="/footer.png"
                  alt=""
                  className="w-full h-[200px] rounded-t-lg"
                  width={200}
                  height={200}
                />
              </div>
              <div className="p-4">
                <h6 className="underline underline-offset-8 decoration-yellow-500 decoration-4 text-xs text-gray-500 font-medium mb-5">
                  DECEMBER 1, 2022
                </h6>
                <h6 className="text-blue-800 font-medium mb-3 line-clamp-2">
                  Admissions for 2022/2023 Now Open!
                </h6>
                <p className="text-gray-500 line-clamp-5 mb-10">
                  Are you ready to embark on a transformative educational
                  journey? Look no further than REDEEMER'S COLLEGE, where doors
                  are opening for the 2022/2023 academic year. With a legacy of
                  excellence in education and a commitment to fostering future
                  leaders, RECTEM invites you to join our vibrant community and
                  unlock the path to a brighter future.
                </p>
              </div>
              <button className="absolute bottom-0 w-full text-xs font-medium bg-blue-800 hover:bg-blue-900 text-white text-left tracking-wider px-4 py-1 m-0">
                Read More
                <svg
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                  />
                </svg>
              </button>
            </a>
            <a className="relative sm:min-w-[200px] sm:max-w-[350px] border-[1px] rounded-t-lg  shadow-md hover:shadow-yellow-500 transition duration-500 ease-in-out cursor-pointer">
              <div>
                <Image
                  src="/matric.png"
                  alt=""
                  className="w-full h-[200px] rounded-t-lg"
                  width={200}
                  height={200}
                />
              </div>
              <div className="p-4">
                <h6 className="underline underline-offset-8 decoration-yellow-500 decoration-4 text-xs text-gray-500 font-medium mb-5">
                  JUNE 28, 2023
                </h6>
                <h6 className="text-blue-800 font-medium mb-3 line-clamp-1">
                  5th Matriculation Ceremony for the 2022/2023 Session.
                </h6>
                <p className="text-gray-500 line-clamp-5 mb-10">
                  We are thrilled to extend a warm invitation to you for a
                  momentous occasion - the 5th Matriculation Ceremony of
                  REDEEMER'S COLLEGE, marking the beginning of the 2022/2023
                  academic session. This event is a celebration of academic
                  excellence, personal growth, and the bright futures that lie
                  ahead for our exceptional students.
                </p>
              </div>
              <button className="absolute bottom-0 w-full text-xs font-medium bg-blue-800 hover:bg-blue-900 text-white text-left tracking-wider px-4 py-1 m-0">
                Read More
                <svg
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                  />
                </svg>
              </button>
            </a>
            {/* <a className="sm:min-w-[200px] sm:max-w-[350px] border-[1px] rounded-t-lg  shadow-md hover:shadow-yellow-500 transition duration-500 ease-in-out cursor-pointer">
              <div>
                <Image
                  src="/bg.png"
                  alt=""
                  className="w-full rounded-t-lg"
                  width={200}
                  height={200}
                />
              </div>
              <div className="p-4">
                <h6 className="underline underline-offset-8 decoration-yellow-500 decoration-4 text-xs text-gray-500 font-medium mb-5">
                  JULY 12, 2023
                </h6>
                <h6 className="text-blue-800 font-medium mb-3 line-clamp-2">
                  Happy Birthday to RECTEM's Esteemed Rector!
                </h6>
                <p className="text-gray-500 line-clamp-4">
                  Today, we gather not only as a school but as a family united
                  in celebrating a remarkable individual whose leadership has
                  been the guiding light of our journey. On this special day, we
                  extend our warmest wishes and heartfelt gratitude to the
                  visionary leader of REDEEMER'S COLLEGE, our esteemed Rector,
                  (MRS) STELLA MOFUNANYA.
                </p>
              </div>
              <button className="w-full text-xs font-medium bg-blue-800 hover:bg-blue-900 text-white text-left tracking-wider px-4 py-1 m-0">
                Read More
                <svg
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                  />
                </svg>
              </button>
            </a> */}
          </div>
          <a
            href="#"
            className="inline-flex items-center bg-blue-800 text-white text-xs tracking-widest uppercase font-semibold py-3 px-5 hover:bg-blue-900"
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
          </a>
        </article>
        <article id="events" className="sm:col-span-1">
          <h1
            className={`text-2xl mb-2 text-blue-800 tracking-wider ${gemsbuck.className}`}
          >
            EVENTS
          </h1>
          <hr />
          <section className="py-8">
            <article className="flex items-center gap-5 py-2 cursor-pointer">
              <div className="text-white">
                <h2
                  className={`px-3 py-2 text-center bg-yellow-500 text-white ${gemsbuck.className}`}
                >
                  JUN
                </h2>
                <h2 className="px-3 py-2 text-center bg-blue-800">28</h2>
              </div>
              <div>
                <h6 className="text-blue-800 font-semibold tracking-wider line-clamp-2">
                  Matriculation ceremony 2023
                </h6>
                <div className="flex flex-col gap-1 text-xs tracking-wider">
                  <div>
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
                      />
                    </svg>
                    <p className="ml-1 inline line-clamp-1">
                      RHS Hall, Redemption city.
                    </p>
                  </div>
                  <div>
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
                      />
                      <path
                        fill="currentColor"
                        d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
                      />
                    </svg>
                    <p className="ml-1 inline">10am</p>
                  </div>
                </div>
              </div>
            </article>
            <hr />
            <article className="flex items-center gap-5 py-2 cursor-pointer">
              <div className="text-white">
                <h2
                  className={`px-3 py-2 text-center bg-yellow-500 text-white ${gemsbuck.className}`}
                >
                  May
                </h2>
                <h2 className="px-3 py-2 text-center bg-blue-800">04</h2>
              </div>
              <div>
                <h6 className="text-blue-800 font-semibold tracking-wider line-clamp-2">
                  Programming conference 2023.
                </h6>
                <div className="flex flex-col gap-1 text-xs tracking-wider">
                  <div>
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
                      />
                    </svg>
                    <p className="ml-1 inline line-clamp-1">
                      Multi-purpose hall, Redemption city.
                    </p>
                  </div>
                  <div>
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
                      />
                      <path
                        fill="currentColor"
                        d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
                      />
                    </svg>
                    <p className="ml-1 inline">9am</p>
                  </div>
                </div>
              </div>
            </article>
            <hr />
            <article className="flex items-center gap-5 py-2 cursor-pointer">
              <div className="text-white">
                <h2
                  className={`px-3 py-2 text-center bg-yellow-500 text-white ${gemsbuck.className}`}
                >
                  NOV
                </h2>
                <h2 className="px-3 py-2 text-center bg-blue-800">11</h2>
              </div>
              <div>
                <h6 className="text-blue-800 font-semibold tracking-wider line-clamp-2">
                  Coding competition 2022
                </h6>
                <div className="flex flex-col gap-1 text-xs tracking-wider">
                  <div>
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
                      />
                    </svg>
                    <p className="ml-1 inline line-clamp-1">
                      Multi-purpose hall, Redemption city.
                    </p>
                  </div>
                  <div>
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
                      />
                      <path
                        fill="currentColor"
                        d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
                      />
                    </svg>
                    <p className="ml-1 inline">10am</p>
                  </div>
                </div>
              </div>
            </article>
            <hr />
            <article className="flex items-center gap-5 py-2 cursor-pointer">
              <div className="text-white">
                <h2
                  className={`px-3 py-2 text-center bg-yellow-500 text-white ${gemsbuck.className}`}
                >
                  AUG
                </h2>
                <h2 className="px-3 py-2 text-center bg-blue-800">04</h2>
              </div>
              <div>
                <h6 className="text-blue-800 font-semibold tracking-wider line-clamp-2">
                  Management Seminars 2022
                </h6>
                <div className="flex flex-col gap-1 text-xs tracking-wider">
                  <div>
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
                      />
                    </svg>
                    <p className="ml-1 inline line-clamp-1">
                      Multi-purpose hall, Redemption city.
                    </p>
                  </div>
                  <div>
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
                      />
                      <path
                        fill="currentColor"
                        d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
                      />
                    </svg>
                    <p className="ml-1 inline">11am</p>
                  </div>
                </div>
              </div>
            </article>
            <article className="flex items-center gap-5 py-2 cursor-pointer">
              <div className="text-white">
                <h2
                  className={`px-3 py-2 text-center bg-yellow-500 text-white ${gemsbuck.className}`}
                >
                  AUG
                </h2>
                <h2 className="px-3 py-2 text-center bg-blue-800">04</h2>
              </div>
              <div>
                <h6 className="text-blue-800 font-semibold tracking-wider line-clamp-2">
                  Programming conference 2022
                </h6>
                <div className="flex flex-col gap-1 text-xs tracking-wider">
                  <div>
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
                      />
                    </svg>
                    <p className="ml-1 inline line-clamp-1">
                      Multi-purpose hall, Redemption city.
                    </p>
                  </div>
                  <div>
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
                      />
                      <path
                        fill="currentColor"
                        d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
                      />
                    </svg>
                    <p className="ml-1 inline">11am</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <a
            href="#"
            className="inline-flex items-center bg-blue-800 text-white text-xs tracking-widest uppercase font-semibold py-3 px-5 hover:bg-blue-900"
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
          </a>
        </article>
      </section>
      <section
        id="campus-map"
        className="bg-[url('/tour.png')] bg-no-repeat bg-cover px-10 py-20"
      >
        <div className="bg-blue-800 opacity-90 max-w-md p-6 text-white">
          <h2 className={`pb-1 text-xl tracking-wider ${gemsbuck.className}`}>
            EXPLORE RECTEM
          </h2>
          <p className="pb-3 tracking-wider">
            Embark on a virtual journey through the RECTEM campus, granting you
            an exclusive insider's view from anywhere around the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="items-center bg-yellow-500 text-black text-xs tracking-widest uppercase font-bold py-3 px-5 hover:bg-yellow-600"
            >
              CAMPUS TOUR
            </a>
            <a
              href="#"
              className="items-center bg-yellow-500 text-black text-xs tracking-widest uppercase font-bold py-3 px-5 hover:bg-yellow-600"
            >
              VIRTUAL TOUR
            </a>
          </div>
        </div>
      </section>
      <section className="section flex justify-between gap-10 flex-col md:flex-row">
        <div className="md:w-1/2 self-center ">
          <Image src={partTime} alt="" />
          {/* <button className="text-white absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
            <AiOutlinePlayCircle size="5em" />
          </button> */}
        </div>
        <div className="md:w-1/2">
          <h2
            className={`text-xl tracking-wider text-blue-800 pb-2 ${gemsbuck.className}`}
          >
            School of Part-Time Studies: Empowering Your Educational Journey
          </h2>
          <p className="text-gray-500 pb-5">
            At the Redeemer's College of Science and Technology, we understand
            that the pursuit of higher education often aligns with existing
            commitments and responsibilities. That's why we proudly introduce
            the School of Part-Time Studies, a dynamic platform designed to
            provide flexible and accessible learning opportunities to
            individuals who are seeking to enhance their skills and knowledge
            while balancing work, family, and personal commitments.
          </p>
          <a
            href="#"
            className="inline-flex  gap-1 items-center underline text-red-600 text-xs tracking-widest uppercase font-semibold py-3 px-5"
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
          </a>
        </div>
      </section>
      <section id="calendar" className="bg-blue-50 p-10">
        <h1
          className={`text-2xl mb-2 text-blue-800 tracking-wider ${gemsbuck.className}`}
        >
          ACADEMIC CALENDAR
        </h1>
        <hr className="border-t-[2px] mb-5" />
        <section className="grid max-[430px]:grid-cols-1 min-[430px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-[430px]:justify-center items-center py-5">
          <article className="max-[430px]:max-w-full max-w-[250px] border-[1px]">
            {/* <a className="cursor-pointer">
              <Image
                src={calender}
                alt=""
                className="w-full"
                width={200}
                height={200}
              />
            </a> */}
            <div className="bg-white tracking-wider text-gray-600 p-4 pt-6 pb-16">
              <h4 className="font-semibold">AUGUST</h4>
              <h2 className={`text-6xl text-blue-800 ${gemsbuck.className}`}>
                05
              </h2>
              <hr className="w-1/2 pb-4" />
              <a className="hover:underline font-semibold cursor-pointer">
                Summer Sessions 2023
              </a>
            </div>
          </article>
          <article className="max-[430px]:max-w-full max-w-[250px] border-[1px]">
            {/* <a className="cursor-pointer">
              <Image
                src={calender}
                alt=""
                className="w-full"
                width={200}
                height={200}
              />
            </a> */}
            <div className="bg-white tracking-wider text-gray-600 p-4 pt-6 pb-16">
              <h4 className="font-semibold">AUGUST</h4>
              <h2 className={`text-6xl text-blue-800 ${gemsbuck.className}`}>
                05
              </h2>
              <hr className="w-1/2 pb-4" />
              <a className="hover:underline font-semibold cursor-pointer">
                Summer Sessions 2023
              </a>
            </div>
          </article>
          <article className="max-[430px]:max-w-full max-w-[250px] border-[1px]">
            {/* <a className="cursor-pointer">
              <Image
                src={calender}
                alt=""
                className="w-full"
                width={200}
                height={200}
              />
            </a> */}
            <div className="bg-white tracking-wider text-gray-600 p-4 pt-6 pb-16">
              <h4 className="font-semibold">AUGUST</h4>
              <h2 className={`text-6xl text-blue-800 ${gemsbuck.className}`}>
                05
              </h2>
              <hr className="w-1/2 pb-4" />
              <a className="hover:underline font-semibold cursor-pointer">
                Summer Sessions 2023
              </a>
            </div>
          </article>
          <article className="max-[430px]:max-w-full max-w-[250px] border-[1px]">
            {/* <a className="cursor-pointer">
              <Image
                src={calender}
                alt=""
                className="w-full"
                width={200}
                height={200}
              />
            </a> */}
            <div className="bg-white tracking-wider text-gray-600 p-4 pt-6 pb-16">
              <h4 className="font-semibold">AUGUST</h4>
              <h2 className={`text-6xl text-blue-800 ${gemsbuck.className}`}>
                05
              </h2>
              <hr className="w-1/2 pb-4" />
              <a className="hover:underline font-semibold cursor-pointer">
                Summer Sessions 2023
              </a>
            </div>
          </article>
          <article className="max-[430px]:max-w-full max-w-[250px] border-[1px]">
            {/* <a className="cursor-pointer">
              <Image
                src={calender}
                alt=""
                className="w-full"
                width={200}
                height={200}
              />
            </a> */}
            <div className="bg-white tracking-wider text-gray-600 p-4 pt-6 pb-16">
              <h4 className="font-semibold">AUGUST</h4>
              <h2 className={`text-6xl text-blue-800 ${gemsbuck.className}`}>
                05
              </h2>
              <hr className="w-1/2 pb-4" />
              <a className="hover:underline font-semibold cursor-pointer">
                Summer Sessions 2023
              </a>
            </div>
          </article>
        </section>
        <div className="flex justify-center">
          <a
            href="#"
            className="justify-self-centers inline-flex items-center bg-blue-800 text-white text-xs tracking-widest uppercase font-semibold py-3 px-5 hover:bg-blue-900"
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
          </a>
        </div>
      </section>
      <section className="px-10 py-20 text-center">
        <h4 className={`text-blue-800 text-xl ${gemsbuck.className}`}>
          Learn How Affordable RECTEM Fees Can Be
        </h4>
        <p className="p-5 text-gray-500">
          Our philosophy centers on delivering world-class education that
          doesn't come with a hefty price tag. We firmly believe that
          affordability should never compromise the quality of education.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 justify-center">
          <a
            href="#"
            className="text-[0.85rem] text-center bg-blue-800 text-white tracking-widest uppercase font-semibold p-4 hover:bg-blue-900"
          >
            ND PROGRAMS
          </a>
          <a
            href="#"
            className="text-[0.85rem] text-center bg-blue-800 text-white tracking-widest uppercase font-semibold p-4 hover:bg-blue-900"
          >
            HND PROGRAMS
          </a>
          <a
            href="#"
            className="text-[0.85rem] text-center bg-blue-800 text-white tracking-widest uppercase font-semibold p-4 hover:bg-blue-900"
          >
            ENTREPRENEURSHIP
          </a>
        </div>
      </section>
      <section className="bg-[url('/degree.png')] bg-no-repeat bg-cover px-10 py-20">
        <div className="ml-auto bg-blue-800 opacity-90 max-w-md p-6 text-white">
          <h2 className={`pb-1 tracking-wider ${gemsbuck.className}`}>
            ENTREPRENEURSHIP AND CERTIFICATE PROGRAM
          </h2>
          <p className="pb-3 tracking-wider">
            RECTEM Entrepreneurship and Certificate Program is designed to
            empower individuals with the skills, knowledge, and mindset needed
            to excel in the world of business and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="items-center bg-yellow-500 text-black text-xs tracking-widest uppercase font-bold py-3 px-5 hover:bg-yellow-600"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </section>
      <section className="p-10 text-center">
        <h2 className={`${gemsbuck.className} text-blue-800 text-2xl mb-5`}>
          Attending RECTEM
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center py-5">
          <article className="max-w-full sm:max-w-[270px] justify-self-center text-center">
            <svg
              className="m-auto text-blue-800"
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
            <div className="flex flex-col gap-2 bg-white tracking-wider text-gray-600 p-4 pt-6 pb-16">
              <h4 className={`${gemsbuck.className} text-blue-800`}>
                FULLY ACCREDITED PROGRAMS
              </h4>
              <p>
                Our courses are fully accredited by National Board for Technical
                Education (NBTE)
              </p>
              {/* <a className="border-2 text-blue-800 border-blue-800 py-2 px-6 cursor-pointer hover:bg-blue-800 hover:text-white">
                NBTE LINK
              </a> */}
            </div>
          </article>
          <article className="max-w-full sm:max-w-[270px] justify-self-center text-center">
            <svg
              className="m-auto text-blue-800"
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
            <div className="flex flex-col gap-2 bg-white tracking-wider text-gray-600 p-4 pt-6 pb-16">
              <h4 className={`${gemsbuck.className} text-blue-800`}>
                DEDICATED WORKFORCE
              </h4>
              <p>
                Highly trained and dedicated workforce with 21st century skills
                and quality years of experience.
              </p>
            </div>
          </article>
          <article className="max-w-full sm:max-w-[270px] justify-self-center text-center">
            <svg
              className="m-auto text-blue-800"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
                <path d="m10 16.5l2-3l2 3m-2-3v-2l3-1m-6 0l3 1" />
                <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
              </g>
            </svg>
            <div className="flex flex-col gap-2 bg-white tracking-wider text-gray-600 p-4 pt-6 pb-16">
              <h4 className={`${gemsbuck.className} text-blue-800`}>
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
              className="m-auto text-blue-800"
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
            <div className="flex flex-col gap-2 bg-white tracking-wider text-gray-600 p-4 pt-6 pb-16">
              <h4 className={`${gemsbuck.className} text-blue-800`}>
                FAST ACADEMIC CALENDAR
              </h4>
              <p>
                We are not members of organized labour hence we don't go on
                strike making our academic calendar faster.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="bg-[url('/experience.png')] bg-no-repeat bg-cover px-10 py-20">
        <div className="ml-auto bg-yellow-500 opacity-90 w-full sm:w-[400px] md:w-1/2 p-6 text-white">
          <h2
            className={`pb-1 text-xl text-blue-800 tracking-wider ${gemsbuck.className}`}
          >
            The Student Experience
          </h2>
          <p className="text-black pb-3 tracking-wider">
            We believe that education is not confined to the classroom. Our
            commitment extends beyond academics to encompass a holistic student
            experience that nurtures growth, fosters connections, and creates
            lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="items-center bg-blue-800 text-white text-xs tracking-widest uppercase font-bold py-3 px-5 hover:bg-blue-900"
            >
              LEARN HOW TO APPLY
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[url('/follow.png')] bg-no-repeat bg-cover px-10 py-20">
        <div className="m-auto opacity-90 w-full sm:w-[400px] md:w-1/2 p-10 text-center">
          <h2
            className={`underline underline-offset-8 pb-1 text-xl sm:text-2xl text-white tracking-wider ${gemsbuck.className}`}
          >
            FOLLOW US
          </h2>
          <div className="py-5 flex justify-center items-center gap-2 text-yellow-500">
            <a className="hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a className="hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m12.71 6.33c.48-.4 1.04-.88 1.29-1.41c-.41.21-.9.34-1.44.41c.5-.36.91-.83 1.12-1.47c-.52.28-1.05.52-1.71.64c-1.55-1.87-5.26-.35-4.6 2.45c-2.61-.16-4.2-1.34-5.52-2.79c-.75 1.22-.1 3.07.79 3.58c-.46-.03-.81-.17-1.14-.33c.04 1.54.89 2.28 2.08 2.68c-.36.07-.76.09-1.14.03c.37 1.07 1.14 1.74 2.46 1.88c-.9.76-2.56 1.29-3.9 1.08c1.15.73 2.46 1.31 4.28 1.23c4.41-.2 7.36-3.36 7.43-7.98z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a className="hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
                />
              </svg>
            </a>
            <a className="hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                />
              </svg>
            </a>
            <a className="hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
