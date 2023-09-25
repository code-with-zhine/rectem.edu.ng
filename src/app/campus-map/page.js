import { gemsbuck } from "@/app/page";
import Image from "next/image";
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
                CAMPUS MAP
              </h2>
              <hr className="border-[#f1ab00]" />
              <div className="text-gray-500">
                <p className="">
                  {`Welcome to Redeemers College of Technology and Management! Our
                  vibrant campus offers a dynamic learning environment where
                  students, faculty, and visitors can thrive. To help you
                  navigate our extensive facilities, we have created this
                  comprehensive campus map. Whether you're a new student,
                  faculty member, or a guest, this guide will assist you in
                  finding your way around our beautiful campus.`}
                </p>
              </div>
              <div className="grid grid-cols-1 py-5 text-gray-500">
                <article className="grid grid-cols-1 sm:grid-cols-3 py-4 gap-4 items-center">
                  <div className="col-span-2">
                    <h6 className="font-semibold text-gray-600">
                      Administration Building
                    </h6>
                    <p className="sm:line-clamp-[7] md:line-clamp-[8] lg:line-clamp-[10] ">
                      {`Start your journey at the Administration Building, where
                      you'll find our administrative offices, including
                      admissions, finance, and academic services. Our friendly
                      staff is here to assist you with any inquiries or support
                      you may need.`}
                    </p>
                    <a
                      className="text-[#D6336B] text-xs uppercase w-full tracking-wider font-semibold"
                      href="https://www.linkedin.com/in/pastorjfodesola/?originalSubdomain=ng"
                    >
                      See on map
                      <svg
                        className="inline"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
                        />
                      </svg>
                    </a>
                  </div>
                  <Image
                    className="col-span-1 hover:bg-[#003DA5] hover:bg-opacity-30 hover:border cursor-pointer"
                    src=""
                    alt=""
                    width={250}
                    height={250}
                  />
                </article>
                <article className="grid grid-cols-1 sm:grid-cols-3 py-4 gap-4 items-center">
                  <div className="col-span-2">
                    <h6 className="font-semibold text-gray-600">
                      Academic Buildings
                    </h6>
                    <p className="sm:line-clamp-[7] md:line-clamp-[8] lg:line-clamp-[10] ">
                      Our academic facilities include modern classrooms, lecture
                      halls, and laboratories spread across the campus. Explore
                      our specialized buildings for technology, engineering,
                      management, and more.
                    </p>
                    <a
                      className="text-[#D6336B] text-xs uppercase w-full tracking-wider font-semibold"
                      href="https://www.linkedin.com/in/pastorjfodesola/?originalSubdomain=ng"
                    >
                      See on map
                      <svg
                        className="inline"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
                        />
                      </svg>
                    </a>
                  </div>
                  <Image
                    className="col-span-1 hover:bg-[#003DA5] hover:bg-opacity-30 hover:border cursor-pointer"
                    alt=""
                    src=""
                    width={250}
                    height={250}
                  />
                </article>
                <article className="grid grid-cols-1 sm:grid-cols-3 py-4 gap-4 items-center">
                  <div className="col-span-2">
                    <h6 className="font-semibold text-gray-600">Library</h6>
                    <p className="sm:line-clamp-[7] md:line-clamp-[8] lg:line-clamp-[10] ">
                      {`The heart of academic research, our library houses an
                      extensive collection of books, journals, and digital
                      resources. It's also a quiet space for studying and group
                      collaboration.`}
                    </p>
                    <a
                      className="text-[#D6336B] text-xs uppercase w-full tracking-wider font-semibold"
                      href="https://www.linkedin.com/in/pastorjfodesola/?originalSubdomain=ng"
                    >
                      See on map
                      <svg
                        className="inline"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
                        />
                      </svg>
                    </a>
                  </div>
                  <Image
                    className="col-span-1 hover:bg-[#003DA5] hover:bg-opacity-30 hover:border cursor-pointer"
                    src=""
                    alt=""
                    width={250}
                    height={250}
                  />
                </article>
                <article className="grid grid-cols-1 sm:grid-cols-3 py-4 gap-4 items-center">
                  <div className="col-span-2">
                    <h6 className="font-semibold text-gray-600">
                      Residence Halls
                    </h6>
                    <p className="sm:line-clamp-[7] md:line-clamp-[8] lg:line-clamp-[10] ">
                      On-campus housing options are available for students who
                      want the convenience of living close to their classes and
                      campus activities.
                    </p>
                    <a
                      className="text-[#D6336B] text-xs uppercase w-full tracking-wider font-semibold"
                      href="https://www.linkedin.com/in/pastorjfodesola/?originalSubdomain=ng"
                    >
                      See on map
                      <svg
                        className="inline"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
                        />
                      </svg>
                    </a>
                  </div>
                  <Image
                    className="col-span-1 hover:bg-[#003DA5] hover:bg-opacity-30 hover:border cursor-pointer"
                    src=""
                    alt=""
                    width={250}
                    height={250}
                  />
                </article>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 space-y-4 pt-6">
            <hr className="border-[#f1ab00]" />
            <h4
              className={`text-sm text-[#003DA5] tracking-wider ${gemsbuck.className}`}
            >
              Quick links
            </h4>
            <hr className="w-20 border-[#f1ab00]" />
            <div className="flex flex-col text-[#D6336B]">
              {/* links */}

              <a
                href="https://onlineapp.rectem.edu.ng"
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
                About Rectem
              </a>
              <hr />
              <a
                href="https://onlineapp.rectem.edu.ng"
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
                Center & Facilities
              </a>
              <hr />
              <a
                href="https://onlineapp.rectem.edu.ng"
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
                Governing Board
              </a>
              <hr />
              <a
                href="https://onlineapp.rectem.edu.ng"
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
                Housing
              </a>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
