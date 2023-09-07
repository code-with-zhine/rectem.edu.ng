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
              SCHOOL OF PART-TIME
            </h1>
            <hr className="w-32 border-[#f1ab00]" />
            <div className="text-gray-500 text-justify">
              <p>
                {`In today's fast-paced world, education is no longer confined to
                traditional classroom settings and rigid schedules. Recognizing
                the evolving needs of modern learners, Redeemers College of
                Technology and Management has taken a pioneering step by
                introducing the innovative concept of the "School of Part-Time."
                This initiative aims to bridge the gap between higher education
                and the demands of a dynamic society, offering students a chance
                to pursue their academic dreams while juggling various other
                commitments.`}
              </p>
              <ul className="py-5">
                <li className="py-4">
                  <h6 className="font-semibold text-gray-600 pb-2">
                    Flexible Learning, Uncompromised Quality
                  </h6>
                  <p>
                    The School of Part-Time at Redeemers College understands
                    that life is multifaceted. Many individuals are unable to
                    commit to a full-time education due to work obligations,
                    family responsibilities, or personal pursuits. To address
                    this, the School of Part-Time provides a flexible learning
                    environment that allows students to customize their academic
                    schedules. This enables them to strike a balance between
                    their educational journey and their other endeavors without
                    compromising on the quality of education they receive.
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold text-gray-600 pb-2">
                    Tailored Learning Experience
                  </h6>
                  <p>
                    One of the key features of the School of Part-Time is its
                    commitment to personalized learning. Students can choose
                    from a range of courses offered across various disciplines,
                    aligning with their academic interests and career goals.
                    This empowers learners to curate a curriculum that resonates
                    with their aspirations, enabling them to gain relevant
                    knowledge and skills while accommodating their time
                    constraints.
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold text-gray-600 pb-2">
                    Blending Technology and Interaction
                  </h6>
                  <p>
                    {`Leveraging technology to enhance learning, Redeemers College
                    integrates online platforms and digital resources into the
                    School of Part-Time's framework. Students can access lecture
                    materials, participate in virtual discussions, and
                    collaborate with peers through online portals. This approach
                    not only facilitates learning at one's own pace but also
                    fosters a sense of community among part-time students,
                    creating a supportive network even in the virtual space.`}
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold text-gray-600 pb-2">
                    Guidance and Mentorship
                  </h6>
                  <p>
                    At Redeemers College, the commitment to education goes
                    beyond the classroom. The School of Part-Time offers
                    mentorship opportunities, enabling students to connect with
                    experienced educators and professionals in their chosen
                    fields. This mentorship serves as a guiding light, helping
                    students navigate their academic journey and make informed
                    decisions about their careers.
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold text-gray-600 pb-2">
                    Empowering Diverse Futures
                  </h6>
                  <p>
                    The School of Part-Time at Redeemers College envisions a
                    future where education adapts to the individual rather than
                    the other way around. By accommodating the diverse needs of
                    learners, the school ensures that education remains
                    accessible and relevant to a wider spectrum of society.
                    Graduates emerge not only with degrees but also with a
                    profound sense of accomplishment, knowing they have achieved
                    a significant milestone despite their unique challenges.
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
              <div className="text-[#D6336B]">
                <details className="p-2">
                  <summary className="text-xs uppercase  font-bold cursor-pointer hover:text-white hover:bg-[#D6336B]  p-2">
                    School of Engineering
                  </summary>
                  <ul className="p-4 text-xs tracking-wider font-medium  uppercase">
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
                        COMPUTER ENGINEERING
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
                        CIVIL ENGINEERING
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
                        ELECTRICAL/ELECTRONIC ENGINEERING
                      </Link>
                    </li>
                  </ul>
                </details>
                <details className="p-2">
                  <summary className="text-xs uppercase  font-bold cursor-pointer hover:text-white hover:bg-[#D6336B]  p-2">
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
                  <summary className="text-xs uppercase  font-bold cursor-pointer hover:text-white hover:bg-[#D6336B]  p-2">
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
                      <a
                        href="/schools/management/business-administrator"
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
                      </a>
                    </li>
                  </ul>
                </details>
                <details className="p-2">
                  <summary className="text-xs uppercase  font-bold cursor-pointer hover:text-white hover:bg-[#D6336B]  p-2">
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
                  href="/national-diploma"
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
                  href="higher-diploma"
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
                  href="/admission-cost"
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
