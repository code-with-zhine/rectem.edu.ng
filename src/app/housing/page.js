"use client";
import Layout from "@/components/Layout";
import { useState } from "react";
import { gemsbuck } from "@/app/page";
import Image from "next/image";
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
          <div className="md:col-span-2 space-y-4">
            <hr className="border-[#f1ab00]" />
            <h1 className={`text-[#003DA5] pt-4 text-xl ${gemsbuck.className}`}>
              STUDENT HOUSING
            </h1>
            <hr className="w-32 border-[rgb(241,171,0)]" />
            <div className="text-gray-500">
              <p className="text-justify">
                {` Student housing plays a vital role in the overall college
                experience, impacting academic performance, personal growth, and
                overall well-being. At Redeemers College of Technology and
                Management, the commitment to providing exceptional student
                housing goes beyond mere accommodation. With a focus on
                fostering a supportive and enriching environment, the college's
                student housing facilities contribute significantly to the
                holistic development of its students.`}
              </p>
              <ul className="py-5">
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-3 text-gray-600">
                    A Comfortable and Inclusive Haven
                  </h6>
                  <p className="text-justify">
                    Redeemers College of Technology and Management understands
                    that a comfortable living space is essential for students to
                    thrive academically and socially. The student housing
                    facilities are designed to provide modern, cozy, and secure
                    living spaces that cater to various preferences and needs.
                    From single occupancy rooms to shared apartments, the
                    college offers a range of options to accommodate different
                    lifestyles. Moreover, the college takes pride in its
                    commitment to inclusivity. Accessible housing options are
                    available for students with special needs, ensuring that
                    every student can fully engage in college life without any
                    barriers.
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-3 text-gray-600">
                    Proximity to Campus
                  </h6>
                  <p className="text-justify">
                    One of the standout features of the student housing at
                    Redeemers College is its proximity to the campus. Living
                    just a short walk away from academic buildings, libraries,
                    and recreational facilities provides students with more time
                    to focus on their studies, participate in extracurricular
                    activities, and engage with the college community. This
                    convenience contributes to a more balanced and fulfilling
                    college experience.
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-3 text-gray-600">
                    Facilities
                  </h6>
                  <p className="text-justify">
                    {`RECTEM's commitment to excellence is reflected in its
                    facilities, laboratories, and workshops. The School of
                    Engineering provides students with access to modern
                    equipment and technology that simulate real-world
                    engineering scenarios. This practical approach enables
                    students to experiment, design, and apply their theoretical
                    knowledge to solve complex engineering challenges.`}
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-3 text-gray-600">
                    Creating a Community
                  </h6>
                  <p className="text-justify">
                    {`Student housing is not just about a place to sleep; it's
                    about creating a community that supports personal growth and
                    lifelong friendships. Redeemers College fosters this sense
                    of community through various initiatives, including social
                    events, workshops, and shared spaces within the housing
                    complexes. Collaborative study lounges, communal kitchens,
                    and recreational areas encourage students to interact, share
                    experiences, and learn from one another.`}
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-3 text-gray-600">
                    Supportive Staff
                  </h6>
                  <p className="text-justify">
                    {`The college's commitment to student success extends to its
                    housing staff. Dedicated resident advisors are available to
                    assist students with any concerns, provide guidance, and
                    organize activities that promote personal development and a
                    sense of belonging. This support network ensures that
                    students feel valued and heard throughout their academic
                    journey.`}
                  </p>
                </li>
                <li className="py-4">
                  <h6 className="font-semibold tracking-wider pb-3 text-gray-600">
                    Safety and Security
                  </h6>
                  <p className="text-justify">
                    {`Safety is a top priority in Redeemers College's student
                    housing. The facilities are equipped with modern security
                    measures, including surveillance cameras, secure entry
                    systems, and 24/7 security personnel. This ensures that
                    students can focus on their studies and extracurricular
                    activities without worrying about their well-being.`}
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
                QUICKLINKS
              </h4>
              <hr className="w-20 border-[#f1ab00]" />
              <div className="flex flex-col">
                {/* links */}
                <Link
                  href="/schools/engineering/computer-engineering"
                  className="text-xs tracking-wider font-semibold text-[#D6336B] cursor-pointer uppercase py-2"
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
                  EVENTS
                </Link>
                <hr />
                <Link
                  href="/schools/engineering/civil-engineering"
                  className="text-xs tracking-wider font-semibold text-[#D6336B] cursor-pointer uppercase py-2"
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
                  NEWS
                </Link>
                <hr />
                <Link
                  href="/schools/engineering/electrical-electronic"
                  className="text-xs tracking-wider font-semibold text-[#D6336B] cursor-pointer uppercase py-2"
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
