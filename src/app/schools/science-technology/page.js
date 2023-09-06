"use client";
import Layout from "@/components/Layout";
import { useState } from "react";
import { gemsbuck } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className="p-10">
        <div className="py-4">
          <Link
            href="/"
            className="flex text-xs items-center gap-2 text-[#003DA5] font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                d="m6.854 5.854l.353-.354l-.707-.707l-.354.353l.708.708ZM4.5 7.5l-.354-.354l-.353.354l.353.354L4.5 7.5Zm1.646 2.354l.354.353l.707-.707l-.353-.354l-.708.708ZM7.5.5V0v.5Zm7 7h.5h-.5Zm-14 0H1H.5Zm7 7V14v.5ZM6.146 5.146l-2 2l.708.708l2-2l-.708-.708Zm-2 2.708l2 2l.708-.708l-2-2l-.708.708ZM4.5 8H11V7H4.5v1Zm3-7A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0v1ZM1 7.5A6.5 6.5 0 0 1 7.5 1V0A7.5 7.5 0 0 0 0 7.5h1ZM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15v-1Zm0 1A7.5 7.5 0 0 0 15 7.5h-1A6.5 6.5 0 0 1 7.5 14v1Z"
              />
            </svg>
            GO HOME
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2 space-y-4">
            <hr className="border-[#f1ab00]" />
            <h1 className={`text-[#003DA5] pt-4 text-xl ${gemsbuck.className}`}>
              SCHOOL OF SCIENCE & TECHNOLOGY
            </h1>
            <hr className="w-32 border-[#f1ab00]" />
            <div className="text-gray-500 text-justify">
              <p>
                The School of Engineering at Redeemers College of Technology and
                Management (RECTEM) is a dynamic and innovative academic
                department dedicated to providing high-quality education and
                training in various engineering disciplines. With a commitment
                to excellence, hands-on learning, and cutting-edge technology,
                the School of Engineering at RECTEM strives to prepare students
                for successful careers in the ever-evolving field of
                engineering. Below are what our school offer...
              </p>
              <ul className="py-5">
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-2 text-gray-600">
                    Quality Education and Programs
                  </h6>
                  <p>
                    RECTEM's School of Engineering offers a comprehensive range
                    of degree programs tailored to meet the demands of today's
                    engineering landscape. These programs encompass a variety of
                    disciplines, including Civil Engineering, Electrical and
                    Electronics Engineering, Mechanical Engineering, Computer
                    Engineering, and more. Each program is meticulously designed
                    to provide students with a solid foundation of theoretical
                    knowledge and practical skills necessary to thrive in their
                    chosen fields.
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-2 text-gray-600">
                    Expert Staffs
                  </h6>
                  <p>
                    The School of Engineering boasts a dedicated and diverse
                    team of staffs who are experts in their respective fields.
                    These experienced educators bring a wealth of industry
                    knowledge and academic excellence to the classroom, ensuring
                    that students receive up-to-date insights and hands-on
                    training in alignment with the latest industry trends and
                    standards.
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-2 text-gray-600">
                    Facilities
                  </h6>
                  <p>
                    RECTEM's commitment to excellence is reflected in its
                    facilities, laboratories, and workshops. The School of
                    Engineering provides students with access to modern
                    equipment and technology that simulate real-world
                    engineering scenarios. This practical approach enables
                    students to experiment, design, and apply their theoretical
                    knowledge to solve complex engineering challenges.
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-2 text-gray-600">
                    Innovation and Research
                  </h6>
                  <p>
                    The School of Engineering encourages students and faculty
                    members to engage in innovative research projects that
                    address current engineering issues and contribute to
                    technological advancements. This culture of research
                    nurtures creativity and empowers students to explore
                    groundbreaking solutions that have the potential to
                    transform industries and improve lives.
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-2 text-gray-600">
                    Industry Partnerships
                  </h6>
                  <p>
                    RECTEM's School of Engineering maintains strong ties with
                    various industries, including engineering firms,
                    corporations, and governmental organizations. These
                    partnerships provide students with opportunities for
                    internships, co-op programs, and networking events, enabling
                    them to build valuable connections and gain insights into
                    the practical applications of their studies.
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-2 text-gray-600">
                    Global Perspective
                  </h6>
                  <p>
                    In an increasingly interconnected world, the School of
                    Engineering at RECTEM recognizes the importance of a global
                    perspective. International collaborations, exchange
                    programs, and exposure to diverse engineering practices
                    broaden students' horizons and prepare them to work in
                    multicultural environments.
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-2 text-gray-600">
                    Ethical and Responsible Engineering
                  </h6>
                  <p>
                    Integral to RECTEM's philosophy is the emphasis on ethical
                    and responsible engineering practices. The School of
                    Engineering instills in its students a deep sense of social
                    responsibility, encouraging them to apply their skills and
                    knowledge to create sustainable solutions that address
                    societal and environmental challenges.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:col-span-1 space-y-4">
            <div>
              <hr className="border-[#f1ab00]" />
              <h4
                className={`py-4 text-[#003DA5] text-sm tracking-wider ${gemsbuck.className}`}
              >
                DEPARTMENTS
              </h4>
              <hr className="w-20 border-[#f1ab00]" />
              <div className="flex flex-col">
                {/* links */}
                <Link
                  href="/schools/science-technology/computer-science"
                  className="text-xs font-semibold text-[#D6336B] cursor-pointer uppercase py-2"
                >
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
                  COMPUTER SCIENCE
                </Link>
                <hr />
                <Link
                  href="/schools/science-technology/science-laboratory"
                  className="text-xs font-semibold text-[#D6336B] cursor-pointer uppercase py-2"
                >
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
                  SCIENCE LABORATORY
                </Link>
              </div>
            </div>

            <div>
              <hr className="border-[#f1ab00]" />
              <h4
                className={`py-4 text-[#003DA5] text-sm tracking-wider ${gemsbuck.className}`}
              >
                MORE SCHOOLS
              </h4>
              <hr className="w-20 border-[#f1ab00]" />
              <div className="flex flex-col">
                {/* links */}
                <Link
                  href="/schools/engineering"
                  className="text-xs font-semibold text-[#D6336B] cursor-pointer uppercase py-2"
                >
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
                  SCHOOL OF ENGINEERING
                </Link>
                <hr />
                <Link
                  href="/schools/environmental"
                  className="text-xs font-semibold text-[#D6336B] cursor-pointer uppercase py-2"
                >
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
                  SCHOOL OF ENVIRONMENTAL TECHNOLOGY
                </Link>
                <hr />
                <Link
                  href="/schools/management"
                  className="text-xs font-semibold text-[#D6336B] cursor-pointer uppercase py-2"
                >
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
                  MANAGEMENT
                </Link>
              </div>
            </div>

            <div>
              <hr className="border-[#f1ab00]" />
              <h4
                className={`py-4 text-[#003DA5] text-sm tracking-wider ${gemsbuck.className}`}
              >
                QUICKLINKS
              </h4>
              <hr className="w-20 border-[#f1ab00]" />
              <div className="flex flex-col">
                {/* links */}
                <Link
                  href="/facilities"
                  className="text-xs font-semibold text-[#D6336B] cursor-pointer uppercase py-2"
                >
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
                  CENTER & FACILITIES
                </Link>
                <hr />
                <Link
                  href="https://onlineapp.rectem.edu.ng"
                  className="text-xs font-semibold text-[#D6336B] cursor-pointer uppercase py-2"
                >
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
                  ND PROGRAMMES
                </Link>
                <hr />
                <Link
                  href="https://onlineapp.rectem.edu.ng"
                  className="text-xs font-semibold text-[#D6336B] cursor-pointer uppercase py-2"
                >
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
                  HND PROGRAMMES
                </Link>
                <hr />
                <Link
                  href="https://onlineapp.rectem.edu.ng"
                  className="text-xs font-semibold text-[#D6336B] cursor-pointer uppercase py-2"
                >
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
                  ADMISSION COST
                </Link>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
