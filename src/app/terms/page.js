"use client";
import Layout from "@/components/Layout";
import { useState } from "react";
import { gemsbuck } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import Slider from "@/components/Slider";
import NewsCard from "@/components/NewsCard";
import Event from "@/components/Event";

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
                Terms and Conditions
              </h2>
              <hr className="border-[#f1ab00]" />
              <div className="text-gray-500 ">
                <article className="py-4 grid gap-5">
                  <div>
                    <h6 className="font-semibold">
                      Acceptance of Terms and Conditions
                    </h6>
                    <p>
                      By accessing and using the Redeemers College of Technology
                      and Management (RECTEM) website, you agree to comply with
                      and be bound by these Terms and Conditions. If you do not
                      agree to these Terms and Conditions, please refrain from
                      using the Website.
                    </p>
                  </div>

                  <div>
                    <h6 className="font-semibold">
                      Changes to Terms and Conditions
                    </h6>
                    <p>
                      RECTEM reserves the right to modify, revise, or update
                      these Terms and Conditions at any time. Any such changes
                      will be effective immediately upon posting on the Website.
                      It is your responsibility to review these Terms and
                      Conditions periodically, and continued use of the Website
                      after any changes constitute your acceptance of the
                      revised Terms and Conditions.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold">Use of Website</h6>
                    <p>
                      You may use the Website for informational and educational
                      purposes only. You agree not to engage in any activity
                      that disrupts, damages, or interferes with the
                      functionality of the Website or the servers and networks
                      connected to it.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold">Privacy</h6>
                    <p>
                      RECTEM use of your personal information is governed by our
                      Privacy Policy.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold"> Intellectual Property</h6>
                    <p>
                      All content, including text, graphics, logos, images, and
                      software, on the Website is the property of RECTEM and is
                      protected by copyright and other intellectual property
                      laws. You may not reproduce, distribute, or modify any
                      content from the Website without prior written consent
                      from RECTEM.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold">
                      Links to Third-Party Websites
                    </h6>
                    <p>
                      The Website may contain links to third-party websites.
                      RECTEM does not endorse or control the content of these
                      websites and is not responsible for any information,
                      products, or services provided by them. Your use of
                      third-party websites is subject to their respective Terms
                      and Conditions.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold">Privacy</h6>
                    <p>
                      RECTEM use of your personal information is governed by our
                      Privacy Policy.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold">Disclaimer</h6>
                    <p>
                      The information on the Website is provided for general
                      informational purposes only. RECTEM makes no warranties or
                      representations regarding the accuracy, completeness, or
                      suitability of the content. RECTEM disclaims all liability
                      for any damages or losses resulting from your use of the
                      Website or reliance on its content.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold"> Contact Information</h6>
                    <p>
                      If you have any questions or concerns regarding these
                      Terms and Conditions, please contact us.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 space-y-4 pt-6">
            <hr className="border-[#f1ab00]" />
            <h4
              className={`text-sm text-[#003DA5] tracking-wider ${gemsbuck.className}`}
            >
              Quicklinks
            </h4>
            <hr className="w-20 border-[rgb(241,171,0)]" />
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
                href="facilities"
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
                href="/housing"
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
              </Link>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
