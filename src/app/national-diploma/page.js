"use client";
import Layout from "@/components/Layout";
import { useState } from "react";
import { gemsbuck } from "@/app/page";
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
                National Diploma Overview
              </h2>
              <hr className="border-[#f1ab00]" />
              <div className="text-gray-500">
                <p className="text-justify">
                  The National Diploma (ND) programme in Nigeria is a
                  significant component of the country's tertiary education
                  system, providing students with practical skills and knowledge
                  in various fields. It is a two-year academic program offered
                  by polytechnics and similar institutions across the country.
                  The ND programme plays a vital role in preparing students for
                  employment or further education, aligning with Nigeria's
                  developmental goals and needs.
                </p>
                <ul className="py-10">
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Purpose and Scope
                    </h6>
                    <p className="text-justify">
                      The National Diploma programme is designed to equip
                      students with practical skills and theoretical knowledge
                      necessary to excel in their chosen fields. It aims to
                      bridge the gap between theoretical learning and real-world
                      application, promoting a hands-on approach to education.
                    </p>
                  </li>
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Duration and Structure
                    </h6>
                    <p className="text-justify">
                      The National Diploma programme is designed to equip
                      students with practical skills and theoretical knowledge
                      necessary to excel in their chosen fields. It aims to
                      bridge the gap between theoretical learning and real-world
                      application, promoting a hands-on approach to education.
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Curriculum
                    </h6>
                    <p className="text-justify">
                      The curriculum for the ND programme is tailored to the
                      specific field of study. It includes core subjects,
                      practical sessions, and elective courses that provide a
                      well-rounded education. The emphasis is on skills
                      development, problem-solving, critical thinking, and
                      application of concepts to real-world scenarios.
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Admission Process
                    </h6>
                    <p className="text-justify">
                      To gain admission into the ND programme, aspiring students
                      need to meet specific eligibility criteria set by the
                      institutions. These criteria often include a minimum
                      requirement of credits in relevant subjects from O-level
                      examinations such as the West African Senior School
                      Certificate Examination (WASSCE) or the National
                      Examination Council (NECO). Some institutions might also
                      consider scores from the Unified Tertiary Matriculation
                      Examination (UTME) conducted by the Joint Admissions and
                      Matriculation Board (JAMB).
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Practical Training
                    </h6>
                    <p className="text-justify">
                      Practical training is a cornerstone of the ND programme.
                      Students engage in laboratory work, workshops, and
                      projects that simulate real-world scenarios. Some
                      programmes also incorporate industrial training, where
                      students spend a certain period working in industries
                      related to their field of study. This hands-on experience
                      enhances students' employability and prepares them for the
                      demands of the workforce.
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Career Prospects
                    </h6>
                    <p className="text-justify">
                      Graduates of the ND programme have a wide range of career
                      opportunities. They can enter the workforce directly,
                      applying their skills and knowledge in various industries.
                      Alternatively, some graduates choose to pursue further
                      education, often progressing to Higher National Diploma
                      (HND) programmes, bachelor's degree programmes, or
                      professional certifications.
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Contribution to Development
                    </h6>
                    <p className="text-justify">
                      The ND programme plays a crucial role in addressing the
                      skills gap in Nigeria's workforce. By producing graduates
                      with practical skills that align with industry needs, the
                      programme contributes to economic development, innovation,
                      and technological advancement in the country.
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

