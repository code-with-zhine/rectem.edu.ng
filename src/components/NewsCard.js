import Image from "next/image";

export default function NewsCard() {
  return (
    <a className="relative sm:min-w-[200px] sm:max-w-[350px] border-[1px] rounded-t-lg  shadow-md hover:shadow-yellow-500 transition duration-500 ease-in-out cursor-pointer">
      <div>
        <Image
          src="/footer.png"
          alt=""
          className="w-full h-[200px] rounded-t-lg"
          width={200}
          height={200}
        />
      </div>
      <div className="p-4">
        <h6 className="underline underline-offset-8 decoration-yellow-500 decoration-4 text-xs text-gray-500 font-medium mb-5">
          DECEMBER 1, 2022
        </h6>
        <h6 className="text-blue-800 font-semibold mb-3 line-clamp-2">
          Admissions for 2022/2023 Now Open!
        </h6>
        <p className="text-gray-500 line-clamp-5 mb-10">
          Are you ready to embark on a transformative educational journey? Look
          no further than REDEEMER'S COLLEGE, where doors are opening for the
          2022/2023 academic year. With a legacy of excellence in education and
          a commitment to fostering future leaders, RECTEM invites you to join
          our vibrant community and unlock the path to a brighter future.
        </p>
      </div>
      <button className="absolute bottom-0 w-full text-xs font-medium bg-blue-800 hover:bg-blue-900 text-white text-left tracking-wider px-4 py-1 m-0">
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
      </button>
    </a>
  );
}
