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
          <div className="md:col-span-2">
            <div className="space-y-4 ">
              <h2
                className={`text-[#003DA5] py-4 text-lg tracking-wider ${gemsbuck.className}`}
              >
                Rectem Facilities Overview
              </h2>
              <hr className="border-[#f1ab00]" />
              <div className="text-gray-500">
                <p className="text-justify">
                  Redeemers College of Technology and Management (RECTEM) takes
                  pride in providing state-of-the-art facilities and centers to
                  enhance the learning, research, and overall college experience
                  of its students. These facilities and centers are designed to
                  create an environment that promotes academic excellence,
                  practical training, innovation, and personal development.
                </p>
                <section className="py-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <article>
                      <div className="py-4">
                        <h6 className="font-semibold text-gray-600">Modern Lecture Halls</h6>
                        <p className="text-justify">
                          RECTEM boasts well-equipped classrooms and lecture
                          halls that facilitate interactive and engaging
                          learning. These spaces are designed to accommodate
                          both traditional lectures and modern teaching
                          methodologies, ensuring that students receive a
                          well-rounded education.
                        </p>
                      </div>
                      <div className="py-4">
                        <h6 className="font-semibold text-gray-600">
                          Laboratories and Workshops
                        </h6>
                        <p className="text-justify">
                          The college offers specialized laboratories and
                          workshops for practical hands-on training in various
                          fields such as engineering, computer science, and
                          business. These facilities enable students to apply
                          theoretical knowledge to real-world scenarios,
                          fostering critical thinking and problem-solving
                          skills.
                        </p>
                      </div>
                      <div className="py-4">
                        <h6 className="font-semibold text-gray-600">
                          Library and Resource Centers
                        </h6>
                        <p className="text-justify">
                          The library serves as a knowledge hub, housing a vast
                          collection of academic resources including textbooks,
                          research papers, and digital materials. In addition to
                          physical books, RECTEM provides online databases and
                          e-resources, enabling students to conduct in-depth
                          research and stay updated with the latest information.
                        </p>
                      </div>

                      <div className="py-4">
                        <h6 className="font-semibold text-gray-600">
                          Innovation and Incubation Centers
                        </h6>
                        <p className="text-justify">
                          To promote entrepreneurship and innovation, RECTEM
                          provides innovation and incubation centers. These
                          spaces encourage students to develop creative ideas
                          and transform them into tangible projects or startups.
                          Through mentorship and networking opportunities,
                          students can turn their innovative concepts into
                          successful ventures.
                        </p>
                      </div>
                      <div className="py-4">
                        <h6 className="font-semibold text-gray-600">
                          Computer Labs and IT Infrastructure
                        </h6>
                        <p className="text-justify">
                          RECTEM's computer labs are equipped with the latest
                          technology, allowing students to practice coding,
                          software development, simulations, and more. The
                          college's robust IT infrastructure ensures seamless
                          connectivity, enabling students to access online
                          resources and engage in virtual learning experiences.
                        </p>
                      </div>
                      <div className="py-4">
                        <h6 className="font-semibold text-gray-600">
                          Sports and Fitness Facilities
                        </h6>
                        <p className="text-justify">
                          Recognizing the importance of physical well-being,
                          RECTEM offers sports facilities that include sports
                          fields, courts, and a gymnasium. These facilities
                          promote a healthy lifestyle and provide students with
                          opportunities to participate in various sports and
                          recreational activities.
                        </p>
                      </div>
                      <div className="py-4">
                        <h6 className="font-semibold text-gray-600">Research Centers</h6>
                        <p className="text-justify">
                          For students keen on research, RECTEM offers dedicated
                          research centers that encourage exploration and
                          innovation across various disciplines. Collaboration
                          spaces foster interdisciplinary interactions and
                          enable students to collaborate on projects that
                          contribute to academic advancements.
                        </p>
                      </div>
                      <div className="py-4">
                        <h6 className="font-semibold text-gray-600">
                          Student Centers and Cafeteria
                        </h6>
                        <p className="text-justify">
                          The student center is a vibrant hub for students to
                          relax, socialize, and engage in extracurricular
                          activities. The cafeteria provides a variety of meals
                          to cater to diverse tastes, ensuring students have a
                          comfortable and convenient environment for their daily
                          needs.
                        </p>
                      </div>
                      <div className="py-4">
                        <h6 className="font-semibold text-gray-600">
                          Auditoriums and Event Spaces
                        </h6>
                        <p className="text-justify">
                          RECTEM's auditoriums and event spaces are designed to
                          host seminars, conferences, workshops, and cultural
                          events. These spaces provide a platform for students
                          to showcase their talents, share knowledge, and engage
                          with industry experts.
                        </p>
                      </div>
                    </article>
                    <article className="grid gap-2 py-4 pl-4 auto-rows-min">
                      <div className="bg-[url('/1.png')] rounded-sm cursor-pointer w-[300px] h-[350px] border ">
                        <div
                          className={`text-xs flex flex-col h-full text-center ${gemsbuck.className}`}
                        >
                          <div className="z-10 flex-grow text-center hover:bg-[#D6336B] hover:bg-opacity-70 text-white transition ease-in-out duration-700">
                            <div className="flex flex-col items-center justify-center h-full text-lg">
                              <h6>Computer</h6>
                              <h6>Laboratory</h6>
                            </div>
                          </div>
                          <a className="py-2 bg-[#D6336B] text-white">
                            Overview
                          </a>
                        </div>
                      </div>
                      <div className="bg-[url('/1.png')] rounded-sm cursor-pointer w-[300px] h-[350px] border ">
                        <div
                          className={`text-xs flex flex-col h-full text-center ${gemsbuck.className}`}
                        >
                          <div className="z-10 flex-grow text-center hover:bg-[#f1ab00] hover:bg-opacity-70 text-white transition ease-in-out duration-700">
                            <div className="flex flex-col items-center justify-center h-full text-lg">
                              <h6>Computer</h6>
                              <h6>Laboratory</h6>
                            </div>
                          </div>
                          <a className="py-2 bg-[#f1ab00] text-white">
                            Overview
                          </a>
                        </div>
                      </div>
                      <div className="bg-[url('/1.png')] rounded-sm cursor-pointer w-[300px] h-[350px] border ">
                        <div
                          className={`text-xs flex flex-col h-full text-center ${gemsbuck.className}`}
                        >
                          <div className="z-10 flex-grow text-center hover:bg-[#D6336B] hover:bg-opacity-70 text-white transition ease-in-out duration-700">
                            <div className="flex flex-col items-center justify-center h-full text-lg">
                              <h6>Computer</h6>
                              <h6>Laboratory</h6>
                            </div>
                          </div>
                          <a className="py-2 bg-[#D6336B] text-white">
                            Overview
                          </a>
                        </div>
                      </div>
                      <div className="bg-[url('/1.png')] rounded-sm cursor-pointer w-[300px] h-[350px] border ">
                        <div
                          className={`text-xs flex flex-col h-full text-center ${gemsbuck.className}`}
                        >
                          <div className="z-10 flex-grow text-center hover:bg-[#f1ab00] hover:bg-opacity-70 text-white transition ease-in-out duration-700">
                            <div className="flex flex-col items-center justify-center h-full text-lg">
                              <h6>Computer</h6>
                              <h6>Laboratory</h6>
                            </div>
                          </div>
                          <a className="py-2 bg-[#f1ab00] text-white">
                            Overview
                          </a>
                        </div>
                      </div>
                      <div className="bg-[url('/1.png')] rounded-sm cursor-pointer w-[300px] h-[350px] border ">
                        <div
                          className={`text-xs flex flex-col h-full text-center ${gemsbuck.className}`}
                        >
                          <div className="z-10 flex-grow text-center hover:bg-[#D6336B] hover:bg-opacity-70 text-white transition ease-in-out duration-700">
                            <div className="flex flex-col items-center justify-center h-full text-lg">
                              <h6>Computer</h6>
                              <h6>Laboratory</h6>
                            </div>
                          </div>
                          <a className="py-2 bg-[#D6336B] text-white">
                            Overview
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </section>
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
                href="/research"
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
                RESEARCH & PUBLICATION
              </Link>
              <hr />
              
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


