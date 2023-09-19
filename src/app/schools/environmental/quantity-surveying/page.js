"use client";
import { useState } from "react";
import { gemsbuck } from "@/app/page";
import Link from "next/link";

import { schools } from "../../../../../data/schools";

const YEARONE = schools.environmental.departments[2].courses.yearOne;
const YEARTWO = schools.environmental.departments[2].courses.yearTwo;

export default function Home() {
  return (
    <>
      <section className="px-5 md:px-10 py-10">
        <div className="py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex text-xs items-center text-[#003DA5] font-semibold"
          >
            <svg
              className="mx-2"
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
          <a
            href="/schools/environmental/quantity-surveying#others"
            className="md:hidden flex text-xs items-center text-[#003DA5] font-semibold"
          >
            <svg
              className="mx-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17.29 5.71a.996.996 0 0 0-1.41 0L12 9.58L8.11 5.7A.996.996 0 1 0 6.7 7.11l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.984.984 0 0 0 0-1.4z"
              />
              <path
                fill="currentColor"
                d="M17.29 12.3a.996.996 0 0 0-1.41 0L12 16.17l-3.88-3.88a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.993.993 0 0 0-.01-1.4z"
              />
            </svg>
            MORE LINKS
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2 space-y-4">
            <hr className="border-[#f1ab00]" />
            <h1 className={`text-[#003DA5] pt-4 text-xl ${gemsbuck.className}`}>
              QUANTITY SURVEYING
            </h1>
            <hr className="w-32 border-[#f1ab00]" />
            <div>
              <Tabs />
            </div>
          </div>
          <div id="others" className="sm:col-span-1 space-y-4">
            <div>
              <hr className="border-[#f1ab00]" />
              <h4
                className={`py-4 text-[#003DA5] text-sm tracking-wider ${gemsbuck.className}`}
              >
                OTHER DEPARTMENT(S)
              </h4>
              <hr className="w-20 border-[#f1ab00]" />
              <div className="flex flex-col">
                {/* links */}
                <Link
                  href="/schools/environmental/architectural-technology"
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
                  ARCHITECTURAL TECHNOLOGY
                </Link>
                <hr />
                <Link
                  href="/schools/environmental/estate-management"
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
                  ESTATE MANAGEMENT
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
                  SCHOOL OF MANAGEMENT
                </Link>
                <hr />
                <Link
                  href="/schools/science-technology"
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
                  SCHOOL OF SCIENCE AND TECHNOLOGY
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
                  href="national-diploma"
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
                  href="/higher-diploma"
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
    </>
  );
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [year, setYear] = useState(1);
  const [courses, setCourses] = useState(YEARONE);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-4">
      <div className="border-b">
        <div className="flex">
          <button
            onClick={() => handleTabChange("tab1")}
            className={`tracking-wider py-2 px-4 text-xs font-medium ${
              activeTab === "tab1"
                ? "text-[#003DA5] border-b-2 border-[#003DA5]"
                : "text-gray-500"
            }`}
          >
            INTRODUCTION
          </button>
          <button
            onClick={() => handleTabChange("tab2")}
            className={`tracking-wider py-2 px-4 text-xs font-medium ${
              activeTab === "tab2"
                ? "text-[#003DA5] border-b-2 border-[#003DA5]"
                : "text-gray-500"
            }`}
          >
            COURSE OVERVIEW
          </button>
        </div>
      </div>
      {activeTab === "tab1" && (
        <div className="py-4 text-gray-500">
          <p className="text-justify">
            {`The Quantity Surveying Department in Nigeria plays a critical role in the construction and real estate industry. Quantity surveyors are professionals responsible for managing the financial aspects of construction projects, including cost estimation, procurement, contract administration, and cost control. `}
          </p>
          <div className="py-4">
            <h6 className="text-gray-600 font-semibold py-2">HOD’s address</h6>
            <p className="text-justify">
              {`The activities of the department were designed to properly equip students with the right knowledge of impacts of economic, technological and social considerations on project initiation and development, and effective cost management of infrastructural and capital projects to prepare students for whatever challenges in Quantity Surveying and subsequently qualifying them for registration with the Nigerian Institute of Quantity Surveyors (NIQS).  And also to train and produce world-class young intellectuals to be logically sound and research-oriented professionals with high skill and credibility in delivering total cost and procurement management, for the achievement of client’s objectives in all types of capital projects and developments, from conception to commissioning and maintenance, in all sectors of the economy, for the attainment of sustainable National development and goals.`}
            </p>
          </div>

          <div className="py-4">
            <h6 className="text-gray-600 font-semibold py-2">
              Job opportunities in QUANTITY SURVEYING
            </h6>
            <p className="text-justify">
              {`Quantity surveyors estimate and manage the costs of materials and
              labor on large building projects. (it’s also known as 'cost
              consultants', 'commercial managers', 'cost managers' and 'cost
              engineers' manage costs on construction projects a quantity
              surveyor also performs other tasks that can effectively reduce the
              risks associated with any type of construction project. These
              tasks include cost planning, setting timetables, value
              engineering, conducting feasibility studies, and valuation of
              works and work packages. Some jobs you can do as a quantity surveying graduate include:`}
            </p>
            <ol className="py-4 pl-10 list-decimal">
              <li>Architectural technologist</li>
              <li>Building surveyor</li>
              <li>Commercial/residential surveyor</li>
              <li>Construction manager</li>
              <li>Estimator</li>
              <li>Planning and development surveyor</li>
              <li>Project manager</li>
              <li>Quantity surveyor</li>
              <li>Site engineer</li>
            </ol>
          </div>

          <div>
            <h6 className="text-gray-600 font-semibold py-2">
              Course Requirements
            </h6>
            <p className="text-justify">
              To embark on the journey toward a National Diploma in Computer
              Engineering, prospective students typically need to fulfill
              certain prerequisites. These include:
            </p>
            <ol className="py-4 list-disc grid gap-4">
              <li>
                <span className="font-semibold">Entry Requirements:</span>{" "}
                Candidates are generally required to possess a Senior Secondary
                School Certificate (SSCE) or its equivalent, with credits in
                subjects such as Mathematics, Physics, and English Language.
              </li>
              <li>
                <span className="font-semibold">JAMB UTME: </span>
                Joint Admissions and Matriculation Board Unified Tertiary
                Matriculation Examination (JAMB UTME) scores will be used as
                part of the selection process.
              </li>
            </ol>
          </div>
        </div>
      )}
      {activeTab === "tab2" && (
        <div>
          <div className="container mx-auto pt-10">
            <div className="flex items-center">
              <h4
                className={`py-4 text-sm text-[#003DA5] ${gemsbuck.className}`}
              >
                Course list
              </h4>
              <a
                onClick={() => {
                  setCourses(YEARONE);
                  setYear(1);
                }}
                className={`text-xs cursor-pointer mx-2 px-2 py-1 font-semibold hover:bg-gray-500 text-white rounded-sm ${
                  year == 1 ? "bg-gray-600" : "bg-gray-400"
                }`}
              >
                YEAR ONE
              </a>
              <a
                onClick={() => {
                  setCourses(YEARTWO);
                  setYear(2);
                }}
                className={`text-xs cursor-pointer mx-2 px-2 py-1 font-semibold hover:bg-gray-500 text-white rounded-sm ${
                  year == 2 ? "bg-gray-600" : "bg-gray-400"
                }`}
              >
                YEAR TWO
              </a>
            </div>
            {year === 1 && (
              <div className="overflow-x-auto text-gray-500">
                <table className="text-justify text-xs font-semibold min-w-full bg-white border border-gray-200 shadow-md rounded-lg uppercase ">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold">S/N</th>
                      <th className="px-6 py-4 text-xs font-semibold ">
                        Course Code
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold ">
                        Course title
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {courses.map((course, index) => {
                      return (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {course.code}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {course.title}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {year === 2 && (
              <div className="overflow-x-auto text-gray-500">
                <table className="text-justify text-xs font-semibold min-w-full bg-white border border-gray-200 shadow-md rounded-lg uppercase ">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold">S/N</th>
                      <th className="px-6 py-4 text-xs font-semibold ">
                        Course Code
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold ">
                        Course title
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {courses.map((course, index) => {
                      return (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {course.code}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {course.title}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
