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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2 space-y-4">
            <hr className="border-[#f1ab00]" />
            <h1 className={`text-[#003DA5] pt-4 text-xl ${gemsbuck.className}`}>
              SCIENCE LABORATORY
            </h1>
            <hr className="w-32 border-[#f1ab00]" />
            <div>
              <Tabs />
            </div>
          </div>
          <div className="sm:col-span-1 space-y-4">
            <div>
              <hr className="border-[#f1ab00]" />
              <h4
                className={`py-4 text-[#003DA5] text-sm tracking-wider ${gemsbuck.className}`}
              >
                SCHOOL OF SCIENCE & TECHNOLOGY
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
    </Layout>
  );
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

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
            {`Science Laboratory Technology (SLT) is a branch of applied science that focuses on the practical aspects of laboratory work and scientific research. Professionals in this field, known as Science Laboratory Technologists or Technicians, play a crucial role in supporting scientific research, experimentation, and analysis in various fields of science and technology. `}
          </p>
          <div className="py-4">
            <h6 className="text-gray-600 font-semibold py-2">HOD’s address</h6>
            <p className="text-justify">
              {`The programme's goal is to produce technicians capable of carrying out various laboratory analysis and practical works under the supervision of a technologist. The course is intended to produce technicians who will: Assist in chemical analysis and quality control in: Industry (oil, food, brewing, detergent, textile etc.) Hospitals, schools, colleges and research institutions. Assist in physical and electronic laboratories with physical analyses and the maintenance of instrumentation. Assist in biological and biochemical analysis and experiments in hospitals, schools, colleges and research institutes. It plays an important role in the foundation stages of research and development (R&D) and in scientific analysis and investigation`}
            </p>
          </div>

          <div className="py-4">
            <h6 className="text-gray-600 font-semibold py-2">
              Job opportunities in SCIENCE LABORATORY TECHNOLOGY
            </h6>
            <p className="text-justify">
              {`The course is expected to prepare students for employment in related work such as sales, marketing, administration and management in industry and also, for self-employment. Working as part of a scientific team with tasks that include: Sampling, testing, measuring, recording, analyzing results. While also assisting in the advancement and development of modern medicine and science. Some jobs you can do as a science laboratory technology graduate include:`}
            </p>
            <ol className="py-4 pl-10 list-decimal">
              <li>Laboratory Technician</li>
              <li>Quality Control Technician</li>
              <li>Medical Laboratory Technologist</li>
              <li>Research Assistant</li>
              <li>Biotech Manufacturing Technician</li>
              <li>Biotech Research Associate</li>
              <li>Regulatory Affairs Specialist</li>
              <li>Biotech Patent Attorney</li>
              <li>Quality Control Specialist</li>
              <li>Biotech Clinical Research Associate</li>
              <li>Biotech Project Manager</li>
              <li>Medical Writer</li>
              <li>Medical Illustrator</li>
              <li>Medical Librarian</li>
              <li>Science Writer</li>
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
          {" "}
          <div class="container mx-auto pt-10">
            <h4
              className={`py-4 text-sm text-[#003DA5] tracking-wider ${gemsbuck.className}`}
            >
              Course list
            </h4>
            <div class="overflow-x-auto text-gray-500">
              <table class="text-center text-xs font-semibold min-w-full bg-white border border-gray-200 shadow-md rounded-lg uppercase ">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="px-6 py-4 text-xs font-semibold">S/N</th>
                    <th class="px-6 py-4 text-xs font-semibold ">
                      Course Code
                    </th>
                    <th class="px-6 py-4 text-xs font-semibold ">
                      Course title
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">1</td>
                    <td class="px-6 py-4 whitespace-nowrap">MTH 112</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Algebra and Elementary Trigonometry
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">2</td>
                    <td class="px-6 py-4 whitespace-nowrap">MEC 101</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Technical Drawing
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">3</td>
                    <td class="px-6 py-4 whitespace-nowrap">MEC 113</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Basic Workshop Technology and Practice
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">4</td>
                    <td class="px-6 py-4 whitespace-nowrap">EEC 115</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Electrical Engineering Science 1
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                    <td class="px-6 py-4 whitespace-nowrap">CTE 111</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Introduction to Computers & Information Technology
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">6</td>
                    <td class="px-6 py-4 whitespace-nowrap">CTE 112</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Electrical Workshop Practice and Technology (Electrical
                      Graphics)
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">7</td>
                    <td class="px-6 py-4 whitespace-nowrap">CTE 113</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Computer Application Packages
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">8</td>
                    <td class="px-6 py-4 whitespace-nowrap">CTE 114</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Internet and Web Technologies
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">9</td>
                    <td class="px-6 py-4 whitespace-nowrap">CTE 115</td>
                    <td class="px-6 py-4 whitespace-nowrap">Data Structures</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">10</td>
                    <td class="px-6 py-4 whitespace-nowrap">CTE 121</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Digital Computer Fundamentals I
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">11</td>
                    <td class="px-6 py-4 whitespace-nowrap">CTE 122</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Electrical Measurement and Instrumentation I
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">12</td>
                    <td class="px-6 py-4 whitespace-nowrap">CTE 123</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Computer/Electronic Maintenance and Repairs
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">13</td>
                    <td class="px-6 py-4 whitespace-nowrap">CTE 124</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Technical Report Writing
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">14</td>
                    <td class="px-6 py-4 whitespace-nowrap">EEC 124</td>
                    <td class="px-6 py-4 whitespace-nowrap">Electronics I</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">15</td>
                    <td class="px-6 py-4 whitespace-nowrap">EEC 124</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Electrical Engineering Science II
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">16</td>
                    <td class="px-6 py-4 whitespace-nowrap">MEC 102</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      Machine Tools Technology and Practice
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">16</td>
                    <td class="px-6 py-4 whitespace-nowrap">MTH 211</td>
                    <td class="px-6 py-4 whitespace-nowrap">CALCULUS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
