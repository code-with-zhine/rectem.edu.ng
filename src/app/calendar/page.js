"use client";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { gemsbuck } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import Calendar from "@/components/Calendar";
import calendarData  from "../../../data/calendar-data";

export default function Home() {
  const [calendar, setCalendar] = useState(null);

    useEffect(() => {
      fetchCalendar();
    }, []);

  const fetchCalendar = async () => {
    const data = await calendarData;
    setCalendar(data);
  };

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
          <div className="md:col-span-2 space-y-4">
            <hr className="border-[#f1ab00]" />
            <h1 className={`text-[#003DA5] pt-4 text-xl ${gemsbuck.className}`}>
              ACADEMIC CALENDAR
            </h1>
            <hr className="w-32 border-[#f1ab00]" />
            <Tabs calendar={calendar} />
          </div>
          <div className="sm:col-span-1 space-y-4">
            <hr className="border-[#f1ab00]" />
            <h4
              className={`text-[#003DA5] text-sm tracking-wider ${gemsbuck.className}`}
            >
              Quick links
            </h4>
            <hr className="w-20 border-[#f1ab00]" />
            <div className="flex flex-col">
              {/* links */}
              <Link
                href="/events"
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
                EVENTS
              </Link>
              <hr />
              <Link
                href="/national-diploma"
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
                ND PROGRAMMES
              </Link>
              <hr />
              <Link
                href="/higher-diploma"
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
                HND PROGRAMMES
              </Link>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const Tabs = ({ calendar }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-4">
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
            2023/2024
          </button>
          <button
            onClick={() => handleTabChange("tab2")}
            className={`tracking-wider py-2 px-4 text-sm font-medium ${
              activeTab === "tab2"
                ? "text-[#003DA5] border-b-2 border-[#003DA5]"
                : "text-gray-500"
            }`}
          >
            2022/2023
          </button>
        </div>
      </div>
      {activeTab === "tab1" && (
        <div>
          <div className="py-5 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {calendar
              ? calendar.current.map((c, index) => (
                  <Calendar
                    key={index}
                    month={c.month}
                    date={c.date}
                    activity={c.activity}
                  />
                ))
              : null}
          </div>
        </div>
      )}
      {activeTab === "tab2" && (
        <div className="py-5 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {calendar
            ? calendar.last.map((c, index) => (
                <Calendar
                  key={index}
                  month={c.month}
                  date={c.date}
                  activity={c.activity}
                />
              ))
            : null}
        </div>
      )}
    </div>
  );
};
