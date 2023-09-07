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
                <summary className="text-xs uppercase tracking-wider  font-bold cursor-pointer hover:text-white hover:bg-[#D6336B] p-2">
                  School of engineering
                </summary>

                <ol className="p-4 text-xs tracking-wider font-medium text-[#D6336B] uppercase list-decimal">
                  <li className="py-1">Computer Engineering</li>
                  <li className="py-1">Civil Engineering</li>
                  <li className="py-1">Electrical/Electronic Engineering</li>
                </ol>
              </details>
              <details className="p-2">
                <summary className="text-xs uppercase tracking-wider  font-bold cursor-pointer hover:text-white hover:bg-[#D6336B] p-2">
                  School of Environmental Technology
                </summary>

                <ol className="p-4 text-xs tracking-wider font-medium text-[#D6336B] uppercase list-decimal">
                  <li className="py-1">Architectural Technology</li>
                  <li className="py-1">Estate Management & Valuation</li>
                  <li className="py-1">Quantity Surveying</li>
                </ol>
              </details>
              <details className="p-2">
                <summary className="text-xs uppercase tracking-wider  font-bold cursor-pointer hover:text-white hover:bg-[#D6336B] p-2">
                  School of Management
                </summary>

                <ol className="p-4 text-xs tracking-wider font-medium text-[#D6336B] uppercase list-decimal">
                  <li className="py-1">Accounting</li>
                  <li className="py-1">Business Administrator & Management</li>
                </ol>
              </details>
              <details className="p-2">
                <summary className="text-xs uppercase tracking-wider  font-bold cursor-pointer hover:text-white hover:bg-[#D6336B] p-2">
                  School of Science & Technology
                </summary>

                <ol className="p-4 text-xs tracking-wider font-medium text-[#D6336B] uppercase list-decimal">
                  <li className="py-1">Computer Science</li>
                  <li className="py-1">Science Laboratory Techology</li>
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
                href="/admission-cost"
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
                Admission cost
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
                HND ADMISSIONS
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
      <div className="border-b">
        <div className="flex">
          <button
            onClick={() => handleTabChange("tab1")}
            className={`tracking-wider py-2 px-4 text-sm font-medium ${
              activeTab === "tab1"
                ? "text-[#003DA5] border-b-2 border-[#003DA5]"
                : "text-gray-500"
            }`}
          >
            FULL-TIME
          </button>
          <button
            onClick={() => handleTabChange("tab2")}
            className={`tracking-wider py-2 px-4 text-sm font-medium ${
              activeTab === "tab2"
                ? "text-[#003DA5] border-b-2 border-[#003DA5]"
                : "text-gray-500"
            }`}
          >
            PART-TIME
          </button>
        </div>
      </div>
      <div className="mt-4">
        {activeTab === "tab1" && (
          <div>
            <div className="space-y-4 text-gray-500">
              <h2
                className={`py-4 text-lg text-[#003DA5] tracking-wider ${gemsbuck.className}`}
              >
                National Diploma Admission Requirements
              </h2>
              <hr className="border-[#f1ab00]" />

              <div className="py-4">
                <p className="text-gray-500 text-justify">
                  The admission requirements for National Diploma Programme to
                  Redeemers College of Technology and Management are as follows:
                </p>

                <ul className="py-4">
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Eligibility Criteria
                    </h6>
                    <p className="text-justify">
                      WAEC/NECO Senior School Certificate (SSC), General
                      Certificate of Education Ordinary Level (GCE O’Level), or
                      their equivalents with credits in five (5) subjects
                      obtained at one sitting or six (6) credits at not more
                      than two sittings.
                    </p>
                  </li>
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Admission
                    </h6>
                    <p className="text-justify">
                      Your journey commences with the release of our admission
                      forms. These forms are conveniently accessible online via
                      our{" "}
                      <a
                        href="https://onlineapp.rectem.edu.ng"
                        className="text-[#D6336B] cursor-pointer"
                      >
                        application portal
                      </a>
                      {`or admission office, redeemers college of technology and
                      management redemption city mowe, ogun state. As
                      prospective students, it's vital to accurately complete
                      the application form and provide all required information.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      JAMB UTME
                    </h6>
                    <p className="text-justify">
                      Unlike some institutions, RECTEM includes the requirement
                      for candidates to sit for the Unified Tertiary
                      Matriculation Examination (UTME) conducted by the Joint
                      Admissions and Matriculation Board (JAMB) for our ND
                      programs.
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Screening
                    </h6>
                    <p className="text-justify">
                      {`Once application forms are submitted, candidates may
                      undergo a screening process. This may entail submitting
                      crucial documents such as academic transcripts, birth
                      certificates, and other credentials. Additionally, written
                      tests or interviews could be conducted to assess
                      candidates' suitability for our programs.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Acceptance and Registration
                    </h6>
                    <p className="text-justify">
                      To secure admission, candidates must accept the offer
                      within a stipulated timeframe by paying an acceptance fee.
                      Subsequently, the registration process involves submitting
                      additional documents, passport photographs, and completing
                      tuition fee payments.
                    </p>
                  </li>
                </ul>
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
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <div className="space-y-4">
              <h2
                className={`py-4 text-lg text-[#003DA5] tracking-wider ${gemsbuck.className}`}
              >
                National Diploma Admission Requirements
              </h2>
              <hr className="border-[#f1ab00]" />

              <div className="py-4 text-gray-500">
                <p className="text-gray-500 text-justify">
                  The admission requirements for National Diploma Programme to
                  Redeemers College of Technology and Management are as follows:
                </p>

                <ul className="py-4">
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Eligibility Criteria
                    </h6>
                    <p className="text-justify">
                      WAEC/NECO Senior School Certificate (SSC), General
                      Certificate of Education Ordinary Level (GCE O’Level), or
                      their equivalents with credits in five (5) subjects
                      obtained at one sitting or six (6) credits at not more
                      than two sittings.
                    </p>
                  </li>
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Admission
                    </h6>
                    <p className="text-justify">
                      Your journey commences with the release of our admission
                      forms. These forms are conveniently accessible online via
                      our{" "}
                      <a
                        href="https://onlineapp.rectem.edu.ng"
                        className="text-[#D6336B] cursor-pointer"
                      >
                        application portal
                      </a>
                      {`or admission office, redeemers college of technology and
                      management redemption city mowe, ogun state. As
                      prospective students, it's vital to accurately complete
                      the application form and provide all required information.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      JAMB UTME
                    </h6>
                    <p className="text-justify">
                      Unlike some institutions, RECTEM includes the requirement
                      for candidates to sit for the Unified Tertiary
                      Matriculation Examination (UTME) conducted by the Joint
                      Admissions and Matriculation Board (JAMB) for our ND
                      programs.
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Screening
                    </h6>
                    <p className="text-justify">
                      {`Once application forms are submitted, candidates may
                      undergo a screening process. This may entail submitting
                      crucial documents such as academic transcripts, birth
                      certificates, and other credentials. Additionally, written
                      tests or interviews could be conducted to assess
                      candidates' suitability for our programs.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Acceptance and Registration
                    </h6>
                    <p className="text-justify">
                      To secure admission, candidates must accept the offer
                      within a stipulated timeframe by paying an acceptance fee.
                      Subsequently, the registration process involves submitting
                      additional documents, passport photographs, and completing
                      tuition fee payments.
                    </p>
                  </li>
                </ul>
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
          </div>
        )}
      </div>
    </div>
  );
};
