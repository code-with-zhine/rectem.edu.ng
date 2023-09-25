import moment from "moment";
import Link from "next/link";




export default function Blog({ href, date, title, body, imageUrl }) {
  return (
    <div className="relative sm:min-w-[200px] sm:max-w-[350px] border-[1px] rounded-t-lg  shadow-md hover:shadow-[#f1ab00] transition duration-500 ease-in-out cursor-pointer">
      <div>
        <img
          src={imageUrl}
          alt=""
          className="w-full h-[200px] rounded-t-lg"
          width={200}
          height={200}
        />
      </div>
      <div className="p-4">
        <div class="flex justify-between text-xs text-gray-500 font-medium">
          <span>
            <svg
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5v-5Z"
              />
            </svg>
            {`Published: ${moment(date).format("DD/MMM/YYYY")}`}
          </span>

          <h6 className="underline underline-offset-8 decoration-[#f1ab00] decoration-4 mb-5">
            {moment(date).fromNow()}
          </h6>
        </div>
        <h6 className="text-[#003DA5] font-medium mb-3 line-clamp-2 uppercase">
          {title}
        </h6>
        <p className="text-gray-500 line-clamp-5 mb-10">{body}</p>
      </div>
      <Link
        href={`/blogs/${href}`}
        className="absolute bottom-0 w-full text-xs font-medium bg-[#003DA5] hover:bg-[#003DA5] text-white text-left tracking-wider px-4 py-1 m-0"
      >
        Read More
        <svg
          className="inline"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
        </svg>
      </Link>
    </div>
  );
}
