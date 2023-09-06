"use client";
import Layout from "@/components/Layout";
import { useState } from "react";
import { gemsbuck } from "@/app/page";
import Image from "next/image";
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
            <div className="space-y-4 ">
              <h2
                className={`text-[#003DA5] py-4 text-lg tracking-wider ${gemsbuck.className}`}
              >
                Rectem Esteemed Visitors
              </h2>
              <hr className="border-[#f1ab00]" />
              <div className="text-gray-500 text-justify">
                <p>
                  Redeemer's College of Technology and Management (RECTEM) is a
                  distinguished institution that stands at the intersection of
                  education and spirituality. Founded on the principles of
                  academic excellence and faith-based values, RECTEM has become
                  a symbol of quality education in Nigeria and beyond. At the
                  heart of this institution's success are its distinguished
                  visitors, Pastor E.A. Adeboye and Mrs. Folu Adeboye, who
                  exemplify a commitment to both education and spirituality.
                </p>
              </div>
              <div className="grid grid-cols-1 py-5 text-gray-500">
                <article className="grid grid-cols-1 sm:grid-cols-3 py-4 gap-4">
                  <Image
                    className="col-span-1 hover:bg-[#003DA5] hover:bg-opacity-30 hover:border cursor-pointer"
                    src=""
                    width={250}
                    height={300}
                  />
                  <div className="col-span-2">
                    <h6 className="font-semibold text-gray-600">
                      The Chairman - J.F. Odesola, PhD
                    </h6>
                    <p className="sm:line-clamp-[7] md:line-clamp-[8] lg:line-clamp-[10] text-justify">
                      Pastor J.F. Odesola is the Assistant General
                      Overseer(Admin/Personnel) in the Redeemed Christian Church
                      of God, an HIV/AIDS and Economic Justice Activist. An
                      accomplished Author of more than 50 books and many
                      bresearches on Education, Theology, Law, Sociology,
                      HIV/AIDS, Cultural-issues, Missiology, History and Health
                      related issues. A Civil Engineer turned Clergy; he holds
                      BA(Honours) degree in Theology from Greenwich School of
                      Theology, London, LLB (Hons), MTh in
                      Missiology/Anthropology from Queen's University of
                      Belfast, A PhD in Christian Education from Ashland
                      University and another PhD in Intercultural Studies from
                      Trinity International University, a Professor of Divinity
                      with Trinity International Institute of Advance Studies.
                    </p>
                    <a
                      className="text-[#D6336B] text-xs uppercase w-full tracking-wider font-semibold"
                      href="https://www.linkedin.com/in/pastorjfodesola/?originalSubdomain=ng"
                    >
                      Connect on Linkedn
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
                </article>
                <article className="grid grid-cols-1 sm:grid-cols-3 py-4 gap-4">
                  <Image
                    className="col-span-1 hover:bg-[#003DA5] hover:bg-opacity-30 hover:border cursor-pointer"
                    src=""
                    width={250}
                    height={300}
                  />
                  <div className="col-span-2">
                    <h6 className="font-semibold text-gray-600">
                      The Chairman - J.F. Odesola, PhD
                    </h6>
                    <p className="sm:line-clamp-[7] md:line-clamp-[8] lg:line-clamp-[10] text-justify">
                      Pastor J.F. Odesola is the Assistant General
                      Overseer(Admin/Personnel) in the Redeemed Christian Church
                      of God, an HIV/AIDS and Economic Justice Activist. An
                      accomplished Author of more than 50 books and many
                      bresearches on Education, Theology, Law, Sociology,
                      HIV/AIDS, Cultural-issues, Missiology, History and Health
                      related issues. A Civil Engineer turned Clergy; he holds
                      BA(Honours) degree in Theology from Greenwich School of
                      Theology, London, LLB (Hons), MTh in
                      Missiology/Anthropology from Queen's University of
                      Belfast, A PhD in Christian Education from Ashland
                      University and another PhD in Intercultural Studies from
                      Trinity International University, a Professor of Divinity
                      with Trinity International Institute of Advance Studies.
                    </p>
                    <a
                      className="text-[#D6336B] text-xs uppercase w-full tracking-wider font-semibold"
                      href="https://www.linkedin.com/in/pastorjfodesola/?originalSubdomain=ng"
                    >
                      Connect on Linkedn
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
                </article>

                <hr />
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

              <Link
                href="/about"
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
              </Link>
              <hr />
              <Link
                href="/about#mission"
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
                Mission
              </Link>
              <hr />
              <Link
                href="/about#vision"
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
                Vision
              </Link>
              <hr />
              <Link
                href="/governing-board"
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
              </Link>
              <hr />
              <Link
                href="/principal-officers"
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
                Principal Officers
              </Link>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
