import Image from "next/image";
import Link from "next/link";
import { gemsbuck } from "@/app/page";

import googlemap from "../../public/images/googlemap.webp";

export default function Footer() {
  return (
    <>
      <section>
        <div className="px-5 md:px-10 w-full h-full bg-[#003DA5] py-10">
          <hr className="border-yellow-500" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-white pt-10 sm:divide-x">
            <article className="text-xs px-2 ">
              <h2 className={`text-4xl -tracking-wider ${gemsbuck.className}`}>
                RECTEM
              </h2>
              <address className="w-40 not-italic">
                <p className="mb-4">
                  KM 46 Lagos - Ibadan Expressway, Redemption City, Mowe, Ogun
                  State, Nigeria.
                </p>
                <div className="mt-5">
                  <p className="cursor-pointer">
                    Tel:
                    <a href="tel:+2347025427441" className="ml-1">
                      07025427441
                    </a>
                  </p>
                  <p className="cursor-pointer">
                    Tel:
                    <a href="tel:+2349160895510" className="ml-1">
                      09160895510
                    </a>
                  </p>
                  <p className="cursor-pointer flex">
                    <a
                      href="malito:admin@rectem.edu.ng"
                      className="underline ml-1"
                    >
                      admin@rectem.edu.ng
                    </a>
                  </p>
                </div>
              </address>
              <ul className="pt-5">
                <li className="font-bold text-sm">OUR PHILOSOPHY</li>
                <hr className="border-yellow-500" />
                <p className="py-4 text-[0.9rem]">
                  {`The philosophy of RECTEM is to attain the ultimate height in
                  providing middle and high level technical and vocational
                  training of the highest standard in order to create a pool of
                  highly trained technicians and technologists that will support
                  the Nation's Engineering Infrastructural Development.`}
                </p>
              </ul>
              <hr className="border-yellow-500" />
            </article>
            <article className="text-xs font-semibold px-2 ">
              <div className="mb-5">
                <p className="mb-1 font-bold">ADMISSION DEPARTMENT</p>
                <hr className="border-yellow-500" />
              </div>
              <address className="not-italic">
                <p className="mb-1">
                  Admission Office, Administrative Block, KM 46 Lagos - Ibadan
                  Expressway, Redemption City, Mowe, Ogun State, Nigeria.
                </p>
                <hr className="border-white" />
                <div className="mt-5">
                  <p className="cursor-pointer">
                    Tel:
                    <a href="tel:+2347025427441" className="ml-1">
                      07025427441
                    </a>
                  </p>
                  <p className="cursor-pointer">
                    Tel:
                    <a href="tel:+2349160895510" className="ml-1">
                      09160895510
                    </a>
                  </p>
                  <p className="cursor-pointer">
                    <a
                      href="malito:admissions@rectem.edu.ng"
                      className="underline line-clamp-1"
                    >
                      admissions@rectem.edu.ng
                    </a>
                  </p>
                </div>
              </address>
              <a
                href="https://goo.gl/maps/n3Mfi7Xkxqy1Tx6W6"
                target="_blank"
                className="cursor-pointer hover:text-yellow-500 pt-10"
              >
                <h6 className="mb-5">
                  <svg
                    className="inline mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
                    />
                  </svg>
                  FIND US
                </h6>
                <Image
                  src={googlemap}
                  alt="google map"
                  className="w-full"
                  width={200}
                  height={200}
                />
              </a>
            </article>
            <article className="text-xs font-semibold px-2 ">
              <div>
                <p className="mb-1 font-bold">HOT LINKS</p>
                <hr className="border-yellow-500" />
              </div>
              <ul className="py-4 text-xs font-semibold">
                <li className="p-3">
                  <a
                    href="https://onlineapp.rectem.edu.ng"
                    target="_blank"
                    className="cursor-pointer hover:text-[#f1ab00]"
                  >
                    APPLICATION PORTAL
                  </a>
                </li>
                <hr className="border-yellow-500" />
                <li className="p-3">
                  <a
                    href="https://portal.rectem.edu.ng"
                    target="_blank"
                    className="cursor-pointer hover:text-[#f1ab00]"
                  >
                    STUDENT PORTAL
                  </a>
                </li>
                <hr className="border-yellow-500" />
                <li className="p-3">
                  <Link
                    href="/entrepreneurship"
                    className="cursor-pointer hover:text-[#f1ab00]"
                  >
                    ENTREPRENEURSHIP
                  </Link>
                </li>
                <hr className="border-yellow-500" />
                <li className="p-3">
                  <Link
                    href="/national-diploma"
                    className="cursor-pointer hover:text-[#f1ab00]"
                  >
                    ND PROGRAMMES
                  </Link>
                </li>
                <hr className="border-yellow-500" />
                <li className="p-3">
                  <a
                    href="/higher-diploma"
                    className="cursor-pointer hover:text-[#f1ab00]"
                  >
                    HND PROGRAMMES
                  </a>
                </li>
                <hr className="border-yellow-500" />
                <li className="p-3">
                  <Link
                    href="/calendar"
                    className="cursor-pointer hover:text-[#f1ab00]"
                  >
                    CALENDAR
                  </Link>
                </li>
                <hr className="border-yellow-500" />
                <li className="p-3">
                  <Link
                    href="/blogs"
                    className="cursor-pointer hover:text-[#f1ab00]"
                  >
                    NEWS
                  </Link>
                </li>
                <hr className="border-yellow-500" />
                <li className="p-3">
                  <a
                    href="campus-map"
                    className="cursor-pointer hover:text-[#f1ab00]"
                  >
                    CAMPUS MAP
                  </a>
                </li>
                <hr className="border-yellow-500" />
              </ul>
            </article>
            <article className="text-xs font-semibold px-2">
              <div>
                <p className="mb-1 font-bold">FOLLOW US</p>
                <hr className="border-yellow-500" />
              </div>
              <div className="py-5 flex items-center gap-2 text-yellow-500">
                <a
                  target="_blank"
                  href="https://www.facebook.com/rectemofficial?mibextid=LQQJ4d"
                  className="hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="http://twitter.com/rectemofficial"
                  className="hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m12.71 6.33c.48-.4 1.04-.88 1.29-1.41c-.41.21-.9.34-1.44.41c.5-.36.91-.83 1.12-1.47c-.52.28-1.05.52-1.71.64c-1.55-1.87-5.26-.35-4.6 2.45c-2.61-.16-4.2-1.34-5.52-2.79c-.75 1.22-.1 3.07.79 3.58c-.46-.03-.81-.17-1.14-.33c.04 1.54.89 2.28 2.08 2.68c-.36.07-.76.09-1.14.03c.37 1.07 1.14 1.74 2.46 1.88c-.9.76-2.56 1.29-3.9 1.08c1.15.73 2.46 1.31 4.28 1.23c4.41-.2 7.36-3.36 7.43-7.98z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCrchUquuLMBSDHhB6C2FMjA"
                  className="hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="http://instagram.com/rectemofficial"
                  className="hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/redeemer-s-college-of-technology-management-rectem/"
                  className="hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                    />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <div className="px-5 md:px-10 bg-yellow-500 py-3 text-xs text-blue-800 font-semibold">
        <ul className="flex flex-wrap sm:divide-x-2">
          <li className="px-2">
            <Link href="/privacy" className="cursor-pointer">
              Privacy and Accessibility
            </Link>
          </li>
          <li className="px-2">
            <Link href="terms" className="cursor-pointer">
              Terms and Conditions
            </Link>
          </li>
          <li className="px-2">© 2023 CITM RECTEM</li>
        </ul>
      </div>
    </>
  );
}
