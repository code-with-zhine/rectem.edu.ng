"use client";
import Image from "next/image";
import Layout from "@/components/Layout";
import { gemsbuck } from "@/app/page";
import heroImage from "/public/about-hero.png";
import Link from "next/link";
import Features from "@/components/Features";
import FollowUs from "@/components/Follow-us";

export default function Home() {
  return (
    <Layout>
      <section className="bg-[url('/about-hero.png')] bg-no-repeat bg-cover  text-white pl-10 py-20">
        <div className="max-w-lg md:top-5 lg:top-1/4 left-8 p-5">
          <h4 className={`py-4 text-3xl ${gemsbuck.className}`}>
            RAISING GLOBAL CHAMPION
          </h4>
          <p className="text-[1.1rem] text-gray-200">
            Empowering Minds, Inspiring Innovation: Your Pathway to Excellence
            at Rectem College of Science and Management
          </p>
        </div>
      </section>
      <section className="p-10">
        <div className="mb-4">
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
          <div className="sm:col-span-2">
            <hr className="border-[#f1ab00]" />
            <h1 className={`text-[#003DA5] pt-4 text-xl ${gemsbuck.className}`}>
              HISTORICAL BACKGROUND OF RECTEM
            </h1>
            <hr className="w-32 border-[#f1ab00]" />
            <p className="py-5 text-gray-500 text-justify">
              The Redeemer's College of Technology and Management (RECTEM) was
              borne out of the vision of the General overseer of the Redeemed
              Christian Church of God, Pastor Enoch Adejare Adeboye early in
              2015, to have two world class Tertiary Institutions in the field
              of Science, Engineering and that will provide sound middle level
              and higher technical education, as well as, the required knowledge
              and infrastructure for technological innovation that will be
              channeled into our national development process. This vision was
              shared with the then Assistant General Overseer (Administration/
              Personnel) of the Redeemed Christian Church of God, Pastor Johnson
              F. Odesola who was also the Pastor in charge, Region 1. A
              blueprint was prepared by the Steering Committee set up to midwife
              the establishment of the Redeemer's College of Technology and
              Management (RECTEM), being the first of the two envisioned world
              class institutions. This was followed by series of reports which
              was commissioned and submitted to the National Board for Technical
              Education (NBTE) for assessment and approval purpose. These
              painstaking efforts culminated in the approval by the Federal
              Government and issuance of operating license for RECTEM to
              commence on 3rd September, 2018.
            </p>
          </div>
          <div className="sm:col-span-1">
            <div className="sm:col-span-1 space-y-4">
              <hr className="border-[#f1ab00]" />
              <h4
                className={`text-[#003DA5] text-sm tracking-wider ${gemsbuck.className}`}
              >
                More
              </h4>
              <hr className="w-20 border-[#f1ab00]" />
              <div className="flex flex-col">
                {/* links */}
                <Link
                  href="/about#mission"
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
                  Mission
                </Link>
                <hr />
                <Link
                  href="/about#vision"
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
                  Vision
                </Link>
                <hr />
                <Link
                  href="/governing-board"
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
                  Governing Board
                </Link>
                <hr />
                <a
                  href="/visitors"
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
                  Visitors
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <div className="flex justify-center items-center py-10">
        <a
          href="https://onlineapp.rectem.edu.ng"
          className="border-2 border-[#D6336B] text-xs tracking-wider font-semibold text-[#D6336B] cursor-pointer hover:bg-[#D6336B] hover:text-white py-4 px-6"
        >
          GO TO APPLICATION PORTAL
        </a>
      </div>
      <hr />
      <section id="mission" class="container mx-auto p-10">
        <h1
          className={`text-[#003DA5] py-4 text-xl text-center tracking-wider ${gemsbuck.className}`}
        >
          OUR MISSION
        </h1>
        <hr className="w-32 border-[#f1ab00] mx-auto" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 py-5">
          <li className="bg-white shadow-md rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="m249.88 92.47l-120-64a4 4 0 0 0-3.76 0l-120 64a4 4 0 0 0 0 7.06L36 115.47v50.82a11.92 11.92 0 0 0 3 8c12.65 14.09 41 37.73 89 37.73c21 0 38.2-4.52 52-10.79V240a4 4 0 0 0 8 0v-42.82a111.64 111.64 0 0 0 29-22.91a11.94 11.94 0 0 0 3-8v-50.8l29.88-15.94a4 4 0 0 0 0-7.06ZM128 204c-44.83 0-71.25-22-83-35.08a3.92 3.92 0 0 1-1-2.63v-46.56l82.12 43.8a4 4 0 0 0 3.76 0L180 136.8v55.53C166.58 199 149.39 204 128 204Zm84-37.71a4 4 0 0 1-1 2.64a103.32 103.32 0 0 1-23 19v-55.4l24-12.8Zm-24.59-42.51a4 4 0 0 0-1.53-1.44l-56-29.87a4 4 0 0 0-3.76 7.06L179.5 128L128 155.47L16.5 96L128 36.53L239.5 96Z"
              />
            </svg>
            <p className="text-gray-500">
              To develop a center of academic excellence for training students
              to acquire qualifications higher than secondary school level.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 48 48"
            >
              <g
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              >
                <path d="M22 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V22" />
                <path d="M24 34V42" />
                <path d="M14 42L34 42" />
                <path
                  fill="#2F88FF"
                  d="M33.3 6C31.4775 6 30 7.43473 30 9.20455C30 12.4091 33.9 15.3223 36 16C38.1 15.3223 42 12.4091 42 9.20455C42 7.43473 40.5225 6 38.7 6C37.5839 6 36.5972 6.53804 36 7.3616C35.4028 6.53804 34.4161 6 33.3 6Z"
                />
              </g>
            </svg>
            <p className="text-gray-500">
              To produce high quality, knowledgeable and innovative graduates,
              worthy in skill and character, through effective teaching,
              learning and research.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M379.087 75.202c18.168 40.684 25.533 83.89 32.421 127.21c-1.265.358-2.528.72-3.794 1.082c-.91-2.534-1.984-5.021-2.707-7.61c-5.218-18.653-10.48-37.296-15.474-56.011c-1.797-6.733-6.035-10.084-12.096-13.381c-8.901-4.842-17.313-11.084-24.69-18.046c-4.707-4.44-8.735-7.149-15.413-7.078c-44.46.47-88.925.515-133.384.924c-2.963.03-6.63 1.124-8.728 3.065c-8.089 7.484-15.671 15.514-25.642 25.556c26.3 64.04 39.522 133.84 33.845 208.044c-12.626-8.084-22.4-14.48-22.981-31.418c-2.904-84.661-29.02-161.225-83.58-227.108c-1.228-1.482-1.838-3.476-2.738-5.23h284.96ZM48.73 107.847c12.663 0 25.332-.2 37.984.172c2.51.072 6.022 1.668 7.277 3.68c37.836 60.79 67.334 124.635 71.155 197.682c.018.29-.282.594-1.362 2.716c-22.612-77.293-63.404-142.735-115.872-201.39c.274-.952.545-1.906.819-2.86zM8 161.029c18.09-.658 33.39-1.318 48.692-1.602c1.541-.03 3.36 2.009 4.65 3.443c29.848 33.202 56.936 68.281 73.633 110.235c3.177 7.98 5.351 16.36 7.989 24.555C108.379 243.235 60.254 202.538 8 161.028Zm194.474 275.77c-31.481-50.066-61.803-98.29-92.128-146.513l1.112-1.428c2.542 2.047 56.622 45.412 80.91 65.302c6.766 5.541 11.878 5.441 18.915-.274c82.584-67.085 174.737-117.862 272.583-158.809c5.223-2.185 10.64-3.916 15.983-5.816c1.186-.42 2.44-.654 4.151-.222c-113.623 65.987-222.022 138.239-301.526 247.76Z"
              />
            </svg>
            <p className="text-gray-500">
              To produce skilled manpower that is globally competitive and are
              required by large companies, as well as the nation's micro, small
              and medium enterprises.
            </p>
          </li>
          {/* <li className="bg-white shadow-md rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="55"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="m252.879 446.324l-94.223 25.247c-6.713 1.798-13.676-2.222-15.475-8.935c-1.798-6.712 2.222-13.676 8.934-15.474l94.223-25.247c6.713-1.798 13.676 2.221 15.475 8.934c1.8 6.713-2.222 13.676-8.934 15.475zm-43.626-289.558c-.844 11.486-7.341 17.96-17.428 17.796c-10.043-.162-17.352-7.045-17.111-17.526c.234-10.198 6.628-16.897 17.505-16.778c10.87.117 16.258 6.54 17.034 16.508zm120.795-38.71C292.565 56.148 218.325 26.069 149.354 46.22C88.995 63.856 49.64 103.71 35.33 165.003c-14.164 60.666 3.466 112.846 48.085 156.545c10.464 10.249 20.085 22.663 25.984 35.91c5.914 13.278 7.81 17.43 22.215 13.944c20.006-4.841 39.744-10.787 59.746-15.646c10.254-2.491 14.15-8.216 14.082-18.553c-.274-41.72-.182-83.443-.03-125.164c.033-9.444-2.935-17.22-13.096-17.456c-10.286-.239-13.435 7.277-13.349 16.905c.238 27.049.072 54.1.07 81.15c-.001 43.515 0 43.515-42.787 49.767c-16.266-18.638-31.078-35.392-45.653-52.351c-52.31-60.866-42.744-150.842 22.543-197.443c46.904-33.481 97.29-35.344 147.525-7.075c46.644 26.25 72.02 80.33 65.294 132.645c-4.493 34.948-21.181 62.845-45.933 86.826c-14.938 14.473-28.55 30.055-33.45 50.982c-2.292 9.788-7.78 14.643-17.262 16.98c1.772-1.647-102.202 27.486-102.202 27.486c-6.578 1.762-10.517 8.586-8.754 15.163l.271 1.017c1.763 6.577 8.586 10.517 15.164 8.755c0 0 119.3-32.058 120.864-32.501c11.048-3.05 17.061-10.915 17.313-22.141c.376-16.759 7.658-29.803 19.508-40.938c6.344-5.962 12.66-11.977 18.63-18.306c49.276-52.263 57.408-131.562 19.94-193.449z"
              />
            </svg>
            <p className="text-gray-500">
              We are committed to developing confident leaders who demonstrate
              integrity, empathy, and a strong sense of responsibility in their
              communities.
            </p>
          </li> */}
        </ul>
      </section>
      <hr />
      <section
        id="vision"
        className="bg-no-repeat bg-cover  text-gray-500 px-10 md:px-20 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h4 className={`text-[#003DA5] py-3 text-xl ${gemsbuck.className}`}>
            OUR VISION
          </h4>
          <hr className="w-32 border-[#f1ab00] mx-auto" />
          <p className="text-[1.1rem] py-4">
            To be a trail-blazer in raising Champions, who will become first
            class professionals in the field of Science, Technology and
            Management.
          </p>
        </div>
      </section>
      <FollowUs />
    </Layout>
  );
}
