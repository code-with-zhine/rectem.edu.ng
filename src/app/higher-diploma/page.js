import { gemsbuck } from "@/app/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
          <div className="md:col-span-2">
            <div className="space-y-4 ">
              <h2
                className={`text-[#003DA5] py-4 text-lg tracking-wider ${gemsbuck.className}`}
              >
                Higher National Diploma Overview
              </h2>
              <hr className="border-[#f1ab00]" />
              <div className="text-gray-500">
                <p className="text-justify">
                  {`In Nigeria, the Higher National Diploma (HND) is a significant educational qualification offered by various institutions, including the Redeemer's College of Technology and Management (RECTEM). RECTEM, an institution known for its commitment to academic excellence, provides HND programs that equip students with practical skills and knowledge to excel in their chosen fields.`}
                </p>
                <p className="text-justify py-2">
                  {`The Higher National Diploma (HND) is a higher education qualification in Nigeria designed to prepare students for practical, technical, and professional roles in various industries. HND programs typically have a strong focus on hands-on training and real-world applications, making them ideal for individuals seeking to enter the workforce with practical skills or enhance their career prospects.`}
                </p>
                <ul className="py-4">
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      HND in RECTEM
                    </h6>
                    <p className="text-justify">
                      {`RECTEM stands out as an institution that places a strong
                      emphasis on the quality and relevance of its HND programs.
                      Here's how RECTEM's HND programs relate to the broader
                      context of HND education in Nigeria:`}
                    </p>
                  </li>
                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Industry-Relevant Curriculum
                    </h6>
                    <p className="text-justify">
                      {`RECTEM's HND programs are carefully crafted to meet the
                      demands of the modern workforce. The curriculum is
                      designed in collaboration with industry experts to ensure
                      that students acquire the skills and knowledge needed to
                      excel in their chosen fields.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      State-of-the-Art Facilities
                    </h6>
                    <p className="text-justify">
                      {`RECTEM invests in state-of-the-art facilities and
                      resources to support HND students' practical training.
                      This includes well-equipped laboratories, workshops, and
                      technology to simulate real-world working environments.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Experienced Staffs
                    </h6>
                    <p className="text-justify">
                      {`RECTEM's staff members are experienced professionals in
                      their respective fields. They provide students with not
                      only theoretical knowledge but also valuable insights
                      based on their practical industry experience.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Partnerships with Industry
                    </h6>
                    <p className="text-justify">
                      {`RECTEM actively collaborates with industry partners to provide students with opportunities for internships, industrial attachments, and practical projects. This exposure to real work environments is invaluable for HND students.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Career-Oriented Approach
                    </h6>
                    <p className="text-justify">
                      {`RECTEM's HND programs are designed to prepare students for successful careers. Students receive guidance and support in developing essential employability skills, including communication, teamwork, and problem-solving.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Entrepreneurship and Innovation
                    </h6>
                    <p className="text-justify">
                      {`RECTEM encourages entrepreneurship and innovation among its HND students. Entrepreneurial skills are integrated into the curriculum to empower students to become job creators rather than just job seekers.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      Continuous Improvement
                    </h6>
                    <p className="text-justify">
                      {`RECTEM is dedicated to continuous improvement and stays updated with industry trends and technological advancements. This ensures that HND programs remain relevant and in sync with the evolving needs of the job market.`}
                    </p>
                  </li>

                  <li className="py-4">
                    <h6 className="font-semibold pb-2 text-gray-600">
                      {`The Relevance of RECTEM's HND Programs`}
                    </h6>
                    <p className="text-justify">
                      {`RECTEM's HND programs are not only relevant but also instrumental in shaping the future of students and the Nigerian workforce. By offering a comprehensive, industry-aligned education, RECTEM empowers HND graduates to:`}
                    </p>
                    <ul className="pt-4 pl-5 list-disc">
                      <li>Secure gainful employment in various sectors.</li>
                      <li>
                        Contribute to the growth and development of their
                        communities and the nation.
                      </li>
                      <li>
                        Innovate and create solutions to complex challenges.
                      </li>
                      <li>
                        Drive economic progress through entrepreneurship and
                        industry-relevant skills.
                      </li>
                      <li>
                        Pursue further education, including postgraduate
                        studies, if they choose to do so.
                      </li>
                    </ul>
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
                href="/national-diploma"
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
                ND PROGRAMMES
              </Link>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
