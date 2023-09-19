import { gemsbuck } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ href, date, title, body, imageUrl }) {
  return (
    <div className="relative sm:min-w-[200px] sm:max-w-[350px] border-[1px] rounded-t-lg  shadow-md hover:shadow-[#f1ab00] transition duration-500 ease-in-out cursor-pointer">
      <div>
        <Image
          src={imageUrl}
          alt=""
          className="w-full h-[200px] rounded-t-lg"
          width={200}
          height={200}
        />
      </div>
      <div className="p-4">
        <h6 className="underline underline-offset-8 decoration-[#f1ab00] decoration-4 text-xs text-gray-500 font-medium mb-5">
          {date}
        </h6>
        <h6 className="text-[#003DA5] font-medium mb-3 line-clamp-1">
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
