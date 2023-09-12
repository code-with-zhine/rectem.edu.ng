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
                National Diploma Overview
              </h2>
              <hr className="border-[#f1ab00]" />
              <div className="text-gray-500">
                <p className="text-justify">
                  {`The National Diploma (ND) is an academic qualification in Nigeria, commonly awarded by polytechnics and other tertiary institutions. It is typically a two-year program that provides students with a strong foundation in various technical and vocational fields. One such institution offering National Diploma programs in Nigeria is the Redeemer's College of Technology and Management (RECTEM).`}
                </p>
                <p className="text-justify py-2">
                  {`RECTEM is a reputable tertiary institution in Nigeria that focuses on providing quality education in technology and management disciplines. It is accredited by relevant educational bodies and offers National Diploma programs in various fields, aligning with the country's educational standards and requirements.`}
                </p>
                <ul className="py-4">
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      ND in RECTEM
                    </h6>
                    <p className="text-justify">
                      {`RECTEM stands out as an institution that places a strong
                      emphasis on the quality and relevance of its ND programs.
                      Here's how RECTEM's ND programs relate to the broader
                      context of ND education in Nigeria:`}
                    </p>
                  </li>
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Accredited National Diploma Programs:
                    </h6>
                    <p className="text-justify">
                      {`RECTEM offers accredited National Diploma programs in
                      several technical and management disciplines. These
                      programs are designed to equip students with practical
                      skills and knowledge relevant to their chosen fields.`}
                    </p>
                  </li>
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Quality Education
                    </h6>
                    <p className="text-justify">
                      {`RECTEM is committed to providing high-quality education,
                      and its ND programs are no exception. The institution
                      ensures that students receive a well-rounded education
                      that prepares them for the demands of the workforce.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Experienced Staffs
                    </h6>
                    <p className="text-justify">
                      {`RECTEM boasts a team of experienced faculty members who
                      are experts in their respective fields. These educators
                      play a crucial role in imparting knowledge and practical
                      skills to ND students.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Modern Facilities
                    </h6>
                    <p className="text-justify">
                      {`To enhance the learning experience, RECTEM provides modern
                      facilities, laboratories, and equipment that are essential
                      for hands-on training and skill development in various ND
                      programs.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Practical Training
                    </h6>
                    <p className="text-justify">
                      {` One of the key features of National Diploma programs is the emphasis on practical training. RECTEM ensures that students receive ample hands-on experience and exposure to real-world scenarios in their chosen fields.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Industry Connections
                    </h6>
                    <p className="text-justify">
                      {`RECTEM often collaborates with industries and businesses to provide students with internship and job placement opportunities. This helps ND students gain practical experience and establish valuable industry connections.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Preparation for Higher Education
                    </h6>
                    <p className="text-justify">
                      {`For students who wish to further their education, RECTEM's ND programs serve as a stepping stone. The National Diploma is a recognized qualification that allows students to pursue Higher National Diploma (HND) programs or even bachelor's degrees at universities.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Supportive Learning Environment
                    </h6>
                    <p className="text-justify">
                      {`RECTEM promotes a supportive and conducive learning environment where students can excel academically and personally. This includes mentorship programs and academic counseling services.`}
                    </p>
                  </li>
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
              Schools
            </h4>
            <hr className="w-20 border-[#f1ab00]" />
            <div className="text-[#D6336B]">
              <details className="p-2">
                <summary className="text-xs uppercase tracking-wider  font-bold cursor-pointer hover:text-white hover:bg-[#D6336B]  p-2">
                  School of engineering
                </summary>
                <ul className="text-[#D6336B] p-4 text-xs tracking-wider font-medium  uppercase">
                  <li>
                    <Link
                      href="/schools/engineering/computer-engineering"
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
                      Computer Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/schools/engineering/civil-engineering"
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
                      Civil Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/schools/engineering/electrical-electronic"
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
                      Electrical/Electronic Engineering
                    </Link>
                  </li>
                </ul>
              </details>
              <details className="p-2">
                <summary className="text-xs uppercase tracking-wider  font-bold cursor-pointer hover:text-white hover:bg-[#D6336B]  p-2">
                  School of Environmental Technology
                </summary>
                <ul className="p-4 text-xs tracking-wider font-medium  uppercase">
                  <li>
                    <Link
                      href="/schools/environmental/architectural-technology"
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
                      Architectural Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/schools/environmental/estate-management"
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
                      Estate Management & Valuation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/schools/environmental/quantity-surveying"
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
                      Quantity Surveying
                    </Link>
                  </li>
                </ul>
              </details>
              <details className="p-2">
                <summary className="text-xs uppercase tracking-wider  font-bold cursor-pointer hover:text-white hover:bg-[#D6336B]  p-2">
                  School of Management
                </summary>
                <ul className="p-4 text-xs tracking-wider font-medium  uppercase">
                  <li>
                    <Link
                      href="/schools/management/accounting"
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
                      Accounting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/schools/environmental/business-administrator"
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
                      Business Administrator & Management
                    </Link>
                  </li>
                </ul>
              </details>
              <details className="p-2">
                <summary className="text-xs uppercase tracking-wider  font-bold cursor-pointer hover:text-white hover:bg-[#D6336B]  p-2">
                  School of Science & Technology
                </summary>
                <ul className="p-4 text-xs tracking-wider font-medium  uppercase">
                  <li>
                    <Link
                      href="/schools/science-technology/computer-science"
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
                      Computer Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/schools/science-technology/science-laboratory"
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
                      Science Laboratory Techology
                    </Link>
                  </li>
                </ul>
              </details>
            </div>
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
                href="/calendar"
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
                ACADEMIC CALENDAR
              </Link>
              <hr />
              <Link
                href="/higher-diploma"
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
                HND PROGRAMMES
              </Link>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

