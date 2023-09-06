import { gemsbuck } from "@/app/page";

export default function Event({ month, date, time, event, location }) {
  return (
    <>
      <article className="flex items-center gap-5 py-2 cursor-pointer">
        <div className="text-white">
          <h2
            className="px-3 py-2 text-center bg-yellow-500 text-white font-extrabold"
          >
            {month}
          </h2>
          <h2 className="px-3 py-2 text-center bg-blue-800 font-semibold">{date}</h2>
        </div>
        <div>
          <h6 className="text-blue-800 font-semibold tracking-wider line-clamp-2">
            {event}
          </h6>
          <div className="flex flex-col gap-1 text-xs tracking-wider">
            <div>
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
                />
              </svg>
              <p className="ml-1 inline line-clamp-1">{location}</p>
            </div>
            <div>
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
                />
                <path
                  fill="currentColor"
                  d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
                />
              </svg>
              <p className="ml-1 inline">{time}</p>
            </div>
          </div>
        </div>
      </article>
      <hr />
    </>
  );
}
