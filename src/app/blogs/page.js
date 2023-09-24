import { gemsbuck } from "@/app/page";
import Link from "next/link";

import Event from "@/components/Event";
import Blog from "@/components/Blog";

import { eventsData } from "../../../data/event-data";

export const revalidate = 0; // revalidate at most every 24 hour - 86400

const STRAPI_ENDPOINT = "https://backend-rectem.onrender.com/api";
const OPTIONS = {
  method: "GET",
};

async function getPosts() {
  const response = await fetch(
    `${STRAPI_ENDPOINT}/posts?populate=*&sort=createdAt:desc`,
    OPTIONS
  );
  const posts = await response.json();
  return posts.data;
}


export default async function Home() {
  const events = eventsData;
  const posts = await getPosts();

  return (
    <>
      {/* <Slider /> */}
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
                Latest News
              </h2>
              <hr className="border-[#f1ab00]" />
              <div className="grid sm:grid-cols-2 gap-5 py-10">
                {posts
                  ? posts.map((post, index) => (
                      <Blog
                        key={index}
                        href={post.id}
                        date={post.attributes.createdAt}
                        title={post.attributes.title}
                        imageUrl={post.attributes.image.data.attributes.url}
                        body={post.attributes.description}
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 space-y-4 pt-6">
            <hr className="border-[#f1ab00]" />
            <h4
              className={`text-sm text-[#003DA5] tracking-wider ${gemsbuck.className}`}
            >
              Latest Events
            </h4>
            <hr className="w-20 border-[rgb(241,171,0)]" />
            <div>
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
        </div>
      </section>
    </>
  );
}
