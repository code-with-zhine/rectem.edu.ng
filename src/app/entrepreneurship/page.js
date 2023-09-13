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
          <div className="md:col-span-2">
            <div className="space-y-4 ">
              <h2
                className={`text-[#003DA5] py-4 text-lg tracking-wider ${gemsbuck.className}`}
              >
                ENTREPRENEURSHIP PROGRAMMES
              </h2>
              <hr className="border-[#f1ab00]" />
              <div className="text-gray-500">
                <p>
                  {`We are committed to empowering the next generation of
                  entrepreneurs and equipping them with essential skills for
                  success in today's dynamic business landscape. Our mission is
                  to foster a culture of innovation, creativity, and
                  entrepreneurship, ensuring that our students are well-prepared
                  to thrive in an ever-evolving world of business and
                  technology.`}
                </p>
                <article className="py-4">
                  <h6 className="font-semibold">Entrepreneurship Education</h6>
                  <p>
                    {`Entrepreneurship is at the heart of our academic programs.
                    We believe that entrepreneurship is not just a career path;
                    it's a mindset. Our curriculum is designed to cultivate this
                    entrepreneurial spirit in our students, whether they aspire
                    to start their own businesses or excel in existing
                    enterprises. Here's what you can expect from our
                    entrepreneurship education:`}
                  </p>
                  <ol className="py-5 pl-12 list-decimal">
                    <li>Web Development</li>
                    <li>Mobile Application Development</li>
                    <li>Graphics Design</li>
                    <li>Cake and Snacks production</li>
                    <li>Shoe Making</li>
                    <li>Tailoring</li>
                  </ol>
                </article>
                <article className="py-4">
                  <h6 className="font-semibold">
                    Learn more about our Entrepreneurship and skills acquisition
                    programmes
                  </h6>
                  <p>
                    Our commitment to excellence ensures that our graduates are
                    well-equipped to succeed in their chosen paths, whether as
                    innovative entrepreneurs, industry leaders, or skilled
                    professionals.
                  </p>
                  <address className="py-4">
                    <p>For any enquires visit:</p>
                    <p>
                      Entrepreneurship and skills acquisition, Administrative
                      Block, KM 46 Lagos - Ibadan Expressway, Redemption City,
                      Mowe, Ogun State, Nigeria.
                    </p>
                  </address>
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
    </Layout>
  );
}
