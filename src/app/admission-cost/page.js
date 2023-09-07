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
            <Tabs />
          </div>
          <div className="sm:col-span-1 space-y-4 pt-10">
            <hr className="border-[#f1ab00]" />
            <h4
              className={`text-sm text-[#003DA5] tracking-wider ${gemsbuck.className}`}
            >
              Courses available
            </h4>
            <hr className="w-20 border-[#f1ab00]" />
            <div className="text-[#D6336B]">
              <details className="p-2">
                <summary className="text-xs uppercase tracking-wider font-bold cursor-pointer hover:text-white hover:bg-[#D6336B] p-2">
                  School of engineering
                </summary>

                <ol className="p-4 text-xs tracking-wider font-medium text-[#D6336B] uppercase">
                  <li className="py-1">1. Computer Engineering</li>
                  <li className="py-1">2. Civil Engineering</li>
                  <li className="py-1">3. Electrical/Electronic Engineering</li>
                </ol>
              </details>
              <details className="p-2">
                <summary className="text-xs uppercase tracking-wider font-bold cursor-pointer hover:text-white hover:bg-[#D6336B] p-2">
                  School of Environmental Technology
                </summary>

                <ol className="p-4 text-xs tracking-wider font-medium text-[#D6336B] uppercase">
                  <li className="py-1">1. Architectural Technology</li>
                  <li className="py-1">2. Estate Management & Valuation</li>
                  <li className="py-1">3. Quantity Surveying</li>
                </ol>
              </details>
              <details className="p-2">
                <summary className="text-xs uppercase tracking-wider font-bold cursor-pointer hover:text-white hover:bg-[#D6336B] p-2">
                  School of Management
                </summary>

                <ol className="p-4 text-xs tracking-wider font-medium text-[#D6336B] uppercase">
                  <li className="py-1">1. Accounting</li>
                  <li className="py-1">
                    2. Business Administrator & Management
                  </li>
                </ol>
              </details>
              <details className="p-2">
                <summary className="text-xs uppercase tracking-wider font-bold cursor-pointer hover:text-white hover:bg-[#D6336B] p-2">
                  School of Science & Technology
                </summary>

                <ol className="p-4 text-xs tracking-wider font-medium text-[#D6336B] uppercase">
                  <li className="py-1">1. Computer Science</li>
                  <li className="py-1">2. Science Laboratory Techology</li>
                </ol>
              </details>
            </div>
            <hr className="border-[#f1ab00]" />
            <h4
              className={`text-sm text-[#003DA5] tracking-wider ${gemsbuck.className}`}
            >
              Quick links
            </h4>
            <hr className="w-20 border-[#f1ab00]" />
            <div className="flex flex-col">
              {/* links */}
              <Link
                href="/national-diploma-admissions"
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
                ND Admissions
              </Link>
              <hr />
              <Link
                href="/higher-diploma-admissions"
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
                HND Admissions
              </Link>
              <hr />
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
    <div>
      <div className="border-b border-[#94928f]">
        <div className="flex">
          <button
            onClick={() => handleTabChange("tab1")}
            className={`tracking-wider py-2 px-4 text-sm font-medium ${
              activeTab === "tab1"
                ? "text-[#003DA5] border-b-2 border-[#003DA5]"
                : "text-gray-500"
            }`}
          >
            ND PROGRAMME
          </button>
          <button
            onClick={() => handleTabChange("tab2")}
            className={`tracking-wider py-2 px-4 text-sm font-medium ${
              activeTab === "tab2"
                ? "text-[#003DA5] border-b-2 border-[#003DA5]"
                : "text-gray-500"
            }`}
          >
            HND PROGRAMME
          </button>
        </div>
      </div>
      <div className="mt-4">
        {activeTab === "tab1" && (
          <div className="space-y-4">
            <h2
              className={`py-4 text-sm text-[#003DA5] tracking-wider ${gemsbuck.className}`}
            >
              National Diploma (ND) Admission Cost For Full-Time
            </h2>
            <hr className="border-[#f1ab00]" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <div class="mb-4 w-full text-gray-500 tracking-wider">
                  <label
                    for="selectInput"
                    className="block text-xs font-medium mb-1"
                  >
                    SCHOOLS
                  </label>
                  <div className="w-full relative inline-block text-gray-500">
                    <select
                      id="selectInput"
                      className="block w-full text-xs appearance-none bg-white border border-gray-300  px-4 py-2 pr-8 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                    >
                      <option>FIRST SEMESTER</option>
                      <option>SECOND SEMESTER</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="fill-current h-4 w-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mb-4 w-full text-gray-500">
                  <label
                    for="selectInput"
                    className="block text-xs font-medium mb-1"
                  >
                    DEPARTMENTS
                  </label>
                  <div className="w-full relative inline-block ">
                    <select
                      id="selectInput"
                      className="block w-full text-xs appearance-none bg-white border border-gray-300  px-4 py-2 pr-8 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                    >
                      <option>FIRST SEMESTER</option>
                      <option>SECOND SEMESTER</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="fill-current h-4 w-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mb-4 w-full text-gray-500">
                  <label
                    for="selectInput"
                    className="block text-xs font-medium mb-1"
                  >
                    MODE
                  </label>
                  <div className="w-full relative inline-block ">
                    <select
                      id="selectInput"
                      className="block w-full text-xs appearance-none bg-white border border-gray-300  px-4 py-2 pr-8 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                    >
                      <option>FULL-TIME</option>
                      <option>PART-TIME</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="fill-current h-4 w-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <a
                  href=""
                  className=" col-span-2 text-center border-2 border-[#D6336B] text-xs tracking-wider font-semibold text-[#D6336B] cursor-pointer hover:bg-[#D6336B] hover:text-white py-2 px-6"
                >
                  CALCULATE FEE
                </a>
              </div>
              <div className=" border rounded-md mt-3 p-3">
                <h4 className="text-xs tracking-wider font-medium text-gray-500 ">
                  ND 1
                </h4>
                <hr className="w-1/2" />
                <ul className="text-gray-500">
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span>First Semester</span>
                    <span>30000</span>
                  </li>
                  <hr />
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span>Second Semester</span>
                    <span>30000</span>
                  </li>
                  <hr />
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span></span>
                    <span>30000</span>
                  </li>
                </ul>
                <h4 className="text-xs tracking-wider font-medium text-gray-500 ">
                  ND 2
                </h4>
                <hr className="w-1/2" />
                <ul className="text-gray-500">
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span>First Semester</span>
                    <span>30000</span>
                  </li>
                  <hr />
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span>Second Semester</span>
                    <span>30000</span>
                  </li>
                  <hr />
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span></span>
                    <span>30000</span>
                  </li>
                  <hr className="border-[#f1ab00]" />
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span>Total</span>
                    <span>30000</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="container mx-auto pt-10">
              <h4
                className={`py-4 text-sm text-[#003DA5] tracking-wider ${gemsbuck.className}`}
              >
                Fee Structure
              </h4>
              <div className="py-4 flex gap-2">
                <a className="text-[#D6336B] border-[#D6336B] text-xs tracking-wider font-semibold hover:text-white cursor-pointer hover:bg-[#D6336B]  py-2 px-6">
                  FULL-TIME
                </a>
                <a className="text-[#D6336B] border-[#D6336B] text-xs tracking-wider font-semibold hover:text-white cursor-pointer hover:bg-[#D6336B]  py-2 px-6">
                  PART-TIME
                </a>
              </div>

              <div class="overflow-x-auto text-gray-500">
                <table class="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                  <thead class="bg-gray-100 uppercase ">
                    <tr>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500">
                        Departments
                      </th>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500">
                        First Year
                      </th>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500">
                        Second Year
                      </th>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 ">
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">Accounting</td>
                      <td class="px-6 py-4 whitespace-nowrap">200,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">300,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">500,000</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">Architectural</td>
                      <td class="px-6 py-4 whitespace-nowrap">250,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">250,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">500,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-5">
              <a
                href="https://onlineapp.rectem.edu.ng"
                className="border-2 border-[#D6336B] text-xs tracking-wider font-semibold text-[#D6336B] cursor-pointer hover:bg-[#D6336B] hover:text-white py-2 px-6"
              >
                GO TO APPLICATION PORTAL
              </a>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="space-y-4">
            <h2
              className={`py-4 text-sm text-[#003DA5] tracking-wider ${gemsbuck.className}`}
            >
              National Diploma (ND) Admission Cost For Full-Time
            </h2>
            <hr className="border-[#f1ab00]" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <div class="mb-4 w-full text-gray-500 tracking-wider">
                  <label
                    for="selectInput"
                    className="block text-xs font-medium mb-1"
                  >
                    SCHOOLS
                  </label>
                  <div className="w-full relative inline-block text-gray-500">
                    <select
                      id="selectInput"
                      className="block w-full text-xs appearance-none bg-white border border-gray-300  px-4 py-2 pr-8 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                    >
                      <option>FIRST SEMESTER</option>
                      <option>SECOND SEMESTER</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="fill-current h-4 w-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mb-4 w-full text-gray-500">
                  <label
                    for="selectInput"
                    className="block text-xs font-medium mb-1"
                  >
                    DEPARTMENTS
                  </label>
                  <div className="w-full relative inline-block ">
                    <select
                      id="selectInput"
                      className="block w-full text-xs appearance-none bg-white border border-gray-300  px-4 py-2 pr-8 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                    >
                      <option>FIRST SEMESTER</option>
                      <option>SECOND SEMESTER</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="fill-current h-4 w-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mb-4 w-full text-gray-500">
                  <label
                    for="selectInput"
                    className="block text-xs font-medium mb-1"
                  >
                    MODE
                  </label>
                  <div className="w-full relative inline-block ">
                    <select
                      id="selectInput"
                      className="block w-full text-xs appearance-none bg-white border border-gray-300  px-4 py-2 pr-8 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                    >
                      <option>FULL-TIME</option>
                      <option>PART-TIME</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="fill-current h-4 w-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <a
                  href=""
                  className=" col-span-2 text-center border-2 border-[#D6336B] text-xs tracking-wider font-semibold text-[#D6336B] cursor-pointer hover:bg-[#D6336B] hover:text-white py-2 px-6"
                >
                  CALCULATE FEE
                </a>
              </div>
              <div className=" border rounded-md mt-3 p-3">
                <h4 className="text-xs tracking-wider font-medium text-gray-500 ">
                  ND 1
                </h4>
                <hr className="w-1/2" />
                <ul className="text-gray-500">
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span>First Semester</span>
                    <span>30000</span>
                  </li>
                  <hr />
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span>Second Semester</span>
                    <span>30000</span>
                  </li>
                  <hr />
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span></span>
                    <span>30000</span>
                  </li>
                </ul>
                <h4 className="text-xs tracking-wider font-medium text-gray-500 ">
                  ND 2
                </h4>
                <hr className="w-1/2" />
                <ul className="text-gray-500">
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span>First Semester</span>
                    <span>30000</span>
                  </li>
                  <hr />
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span>Second Semester</span>
                    <span>30000</span>
                  </li>
                  <hr />
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span></span>
                    <span>30000</span>
                  </li>
                  <hr className="border-[#f1ab00]" />
                  <li className="py-2 flex justify-between uppercase text-xs font-semibold tracking-wider">
                    <span>Total</span>
                    <span>30000</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="container mx-auto pt-10">
              <h4
                className={`py-4 text-sm text-[#003DA5] tracking-wider ${gemsbuck.className}`}
              >
                Fee Structure
              </h4>
              <div className="py-4 flex gap-2">
                <a className="text-[#D6336B] border-[#D6336B] text-xs tracking-wider font-semibold hover:text-white cursor-pointer hover:bg-[#D6336B]  py-2 px-6">
                  FULL-TIME
                </a>
                <a className="text-[#D6336B] border-[#D6336B] text-xs tracking-wider font-semibold hover:text-white cursor-pointer hover:bg-[#D6336B]  py-2 px-6">
                  PART-TIME
                </a>
              </div>

              <div class="overflow-x-auto text-gray-500">
                <table class="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                  <thead class="bg-gray-100 uppercase ">
                    <tr>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500">
                        Departments
                      </th>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500">
                        First Year
                      </th>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500">
                        Second Year
                      </th>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 ">
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">Accounting</td>
                      <td class="px-6 py-4 whitespace-nowrap">200,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">300,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">500,000</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">Architectural</td>
                      <td class="px-6 py-4 whitespace-nowrap">250,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">250,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">500,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-5">
              <a
                href="https://onlineapp.rectem.edu.ng"
                className="border-2 border-[#D6336B] text-xs tracking-wider font-semibold text-[#D6336B] cursor-pointer hover:bg-[#D6336B] hover:text-white py-2 px-6"
              >
                GO TO APPLICATION PORTAL
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
