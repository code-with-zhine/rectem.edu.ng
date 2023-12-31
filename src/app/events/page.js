"use client";
import { useState, useEffect } from "react";
import { gemsbuck } from "@/app/page";
import Link from "next/link";
import FollowUs from "@/components/Follow-us";
import Event from "@/components/Event";

import { eventsData } from "../../../data/event-data";

export default function Home() {
  const events = eventsData;

  return (
    <>
      <section className="px-5 md:px-10">
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
      </section>
      <section className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <section>
            <div className="p-4">
              <h1
                className={`mb-4 text-[#003DA5] tracking-wider ${gemsbuck.className}`}
              >
                FILTER RESULTS
              </h1>
              <div className="w-full"></div>
              <div className="grid gap-4 py-4 text-gray-600">
                <a
                  href=""
                  className="w-full text-center border-2 text-[#D6336B] border-[#D6336B] text-xs tracking-wider font-semibold hover:text-white cursor-pointer hover:bg-[#D6336B] py-2 px-6"
                >
                  UPCOMING
                </a>
                <a
                  href=""
                  className="w-full text-center border-2 text-[#D6336B] border-[#D6336B] text-xs tracking-wider font-semibold hover:text-white cursor-pointer hover:bg-[#D6336B] py-2 px-6"
                >
                  COMPLETED
                </a>
              </div>
            </div>
          </section>
          <div>
            <hr className="border-[#f1ab00]" />
            <h1 className={`text-[#003DA5] pt-4 text-xl ${gemsbuck.className}`}>
              EVENTS
            </h1>
            <hr className="w-32 border-[#f1ab00]" />
            <div className="py-5 gap-5 grid">
              {events
                ? events.map((event, index) => (
                    <Event
                      key={index}
                      month={event.month}
                      date={event.date}
                      time={event.time}
                      event={event.event}
                      location={event.location}
                    />
                  ))
                : null}
            </div>
          </div>

          <section className="sm:col-span-1">
            <hr className="border-[#f1ab00]" />
            <h1 className={`text-[#003DA5] pt-4 text-lg ${gemsbuck.className}`}>
              QUICK LINKS
            </h1>
            <hr className="border-[#f1ab00]" />

            <div className="flex flex-col">
              {/* links */}
              <Link
                href="/calendar"
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
                Calendar
              </Link>
              <hr />
              <Link
                href="/blogs"
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
                News
              </Link>
              <hr />
              <Link
                href="/housing"
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
                Housing
              </Link>
              <hr />
            </div>
          </section>
        </div>
      </section>
      <FollowUs />
    </>
  );
}
