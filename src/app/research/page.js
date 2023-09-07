"use client";
import Layout from "@/components/Layout";
import { useState } from "react";
import { gemsbuck } from "@/app/page";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className="px-5 md:px-10 py-10">
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
          <div className="md:col-span-2">
            <div className="space-y-4 ">
              <h2
                className={`text-[#003DA5] py-4 text-lg tracking-wider ${gemsbuck.className}`}
              >
                RESEARCH AND PUBLICATION
              </h2>
              <hr className="border-[#f1ab00]" />
              <div className="text-gray-500">
                <p className="text-justify">
                  {`We are committed to fostering a culture of innovation,
                  discovery, and academic excellence. Our dedication to research
                  and publications is a testament to our mission to empower
                  students and faculty members to explore, create, and
                  disseminate knowledge that positively impacts society. In this
                  document, we provide an overview of our institution's
                  commitment to research and our achievements in the realm of
                  academic publications.`}
                </p>
                <ul className="py-10">
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Research Centers and Labs
                    </h6>
                    <p className="text-justify">
                      Our college boasts state-of-the-art research centers and
                      laboratories equipped with cutting-edge technology. These
                      facilities provide students and faculty with the tools
                      they need to conduct groundbreaking research in various
                      fields, including technology, management, engineering, and
                      more.
                    </p>
                  </li>
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Student Involvement
                    </h6>
                    <p className="text-justify">
                      We believe in hands-on learning, and research plays a
                      significant role in this regard. Our students are
                      encouraged to participate in research projects, gaining
                      valuable experience and contributing to the advancement of
                      knowledge.
                    </p>
                  </li>
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Conferences and Symposia
                    </h6>
                    <p className="text-justify">
                      We actively participate in national and international
                      conferences, presenting our research findings and engaging
                      in academic discourse with scholars from around the world.
                    </p>
                  </li>
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Online Repositories
                    </h6>
                    <p className="text-justify">
                      We maintain digital repositories of our research
                      publications, making them easily accessible to the global
                      academic community. This commitment to open access ensures
                      that our research has a far-reaching impact.
                    </p>
                  </li>
                  <a
                    href="http://journals.rectem.edu.ng"
                    className="text-xs tracking-wider font-semibold cursor-pointer text-[#D6336B]  py-2 italic"
                  >
                    journals.rectem.edu.ng
                  </a>
                </ul>
              </div>
              <div className="flex gap-4 text-[#D6336B]">
                <a
                  href="https://onlineapp.rectem.edu.ng"
                  className="border-2 border-[#D6336B] text-xs tracking-wider font-semibold hover:text-white cursor-pointer hover:bg-[#D6336B]  py-2 px-6"
                >
                  APPLY FOR ND
                </a>
                <a
                  href="https://onlineapp.rectem.edu.ng"
                  className="border-2 border-[#D6336B] text-xs tracking-wider font-semibold hover:text-white cursor-pointer hover:bg-[#D6336B]  py-2 px-6"
                >
                  APPLY FOR HND
                </a>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 space-y-4 pt-6">
            <hr className="border-[#f1ab00]" />
            <h4
              className={`text-sm text-[#003DA5] tracking-wider ${gemsbuck.className}`}
            >
              Quick links
            </h4>
            <hr className="w-20 border-[#f1ab00]" />
            <div className="flex flex-col text-[#D6336B]">
              {/* links */}

              <Link
                href="/facilities"
                className="text-xs tracking-wider font-semibold hover:text-[#D6336B] cursor-pointer uppercase py-2"
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
