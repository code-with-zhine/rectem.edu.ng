import Link from "next/link";
import { blogsData } from "../../../../data/blogs-data";
import Image from "next/image";
import { gemsbuck } from "@/app/page";
import { MDXRemote } from "next-mdx-remote/rsc";
import moment from "moment";

export const revalidate = 0; // revalidate at most every 24 hour - 86400

const STRAPI_ENDPOINT = "https://backend-rectem.onrender.com/api/posts";
const OPTIONS = {
  method: "GET",
};

async function getPost(slug) {
  const response = await fetch(
    `${STRAPI_ENDPOINT}/${slug}?populate=*`,
    OPTIONS
  );
  const post = await response?.json();
  return post?.data;
}

const STRAPI_ENDPOINTS = "https://backend-rectem.onrender.com/api";

async function getPosts() {
  const response = await fetch(`${STRAPI_ENDPOINTS}/posts?populate=*`, OPTIONS);
  const posts = await response.json();
  return posts.data;
}

export default async function Home({ params }) {
  const slug = params.slug;

  const post = await getPost(slug);
  const posts = await getPosts();

  const result = posts?.slice(0, 3).filter((current) => {
    return current.id !== post.id;
  });


  return (
    <main>
      <section className="grid grid-cols-1 lg:grid-cols-5 py-10 px-5">
        <div className="col-span-3 border p-1">
          <div className="flex divide-x ">
            <Link href="/">
              <svg
                className="text-[#003DA5]"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
                />
              </svg>
            </Link>
            <div className="flex items-center px-2 text-xs text-gray-500 font-bold">
              <div className="whitespace-nowrap">
                <Link className="px-2 hover:text-[red]" href="/blogs">
                  NEWS
                </Link>
                <span>{`>>`}</span>
              </div>
              <div>
                <Link
                  className="px-2 hover:text-[red] line-clamp-1"
                  href={`/blogs/${post.id}`}
                >
                  {post.attributes.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex justify-end items-center uppercase text-xs font-semibold">
            <p className="px-1"> Follow us:</p>
            <a
              target="_blank"
              href="https://www.facebook.com/rectemofficial?mibextid=LQQJ4d"
            >
              <svg
                className="text-[#3B5998]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a target="_blank" href="http://twitter.com/rectemofficial">
              <svg
                className="text-[#1D9BF0]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m12.71 6.33c.48-.4 1.04-.88 1.29-1.41c-.41.21-.9.34-1.44.41c.5-.36.91-.83 1.12-1.47c-.52.28-1.05.52-1.71.64c-1.55-1.87-5.26-.35-4.6 2.45c-2.61-.16-4.2-1.34-5.52-2.79c-.75 1.22-.1 3.07.79 3.58c-.46-.03-.81-.17-1.14-.33c.04 1.54.89 2.28 2.08 2.68c-.36.07-.76.09-1.14.03c.37 1.07 1.14 1.74 2.46 1.88c-.9.76-2.56 1.29-3.9 1.08c1.15.73 2.46 1.31 4.28 1.23c4.41-.2 7.36-3.36 7.43-7.98z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCrchUquuLMBSDHhB6C2FMjA"
            >
              <svg
                className="text-[#C4302B]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
                />
              </svg>
            </a>
            <a target="_blank" href="http://instagram.com/rectemofficial">
              <svg
                className="text-[#C4302B]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/redeemer-s-college-of-technology-management-rectem/"
            >
              <svg
                className="text-[#0072B1]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <article>
        <div className="relative">
          <img
            className="w-full max-h-[450px]"
            src={post.attributes.image.data.attributes.url}
            alt=""
            width={800}
            height={450}
          />
          <div className="w-full absolute bottom-0 px-4 py-8 bg-black bg-opacity-60 text-white ">
            <h1 className="max-w-3xl text-xl md:text-3xl font-extrabold uppercase line-clamp-2">
              {post.attributes.title}
            </h1>
          </div>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-5 gap-5 py-10 px-5">
          <div className="col-span-3">
            <article className="space-y-2 prose max-w-none dark:prose-invert text-gray-500 prose-a:text-red-600 prose-h2:text-gray-600 prose-h3:text-gray-600 prose-h4:text-gray-600 prose-h5:text-gray-600 prose-h6:text-gray-600 prose-strong:text-gray-600 prose-strong:text-sm prose-strong:uppercase">
              <MDXRemote source={post.attributes.content} />
            </article>
          </div>
          <div className="col-span-2 not-prose">
            <hr className="border-[#f1ab00]" />
            <h4
              className={`py-4 text-[#003DA5] text-sm tracking-wider ${gemsbuck.className}`}
            >
              RELATED ARTICLES
            </h4>
            <hr className="w-20 border-[#f1ab00]" />
            {result
              ? result.map((post, index) => {
                  return (
                    <section key={index} className="grid gap-2 pt-2 divide-y">
                      <Link href={`/blogs/${post.id}`}>
                        <article className="text-gray-500 p-2">
                          <img
                            className="rounded-md md:max-h-[200px]"
                            src={post.attributes.image.data.attributes.url}
                            alt=""
                            width={800}
                            height={400}
                          />
                          <h1 className="text-[#003DA5] text-base font-semibold pt-4 uppercase line-clamp-2">
                            {post.attributes.title}
                          </h1>
                          <h6 className="py-3 underline underline-offset-8 decoration-[#f1ab00] decoration-4 text-xs text-gray-500 font-medium mb-5">
                            {moment(post.attributes.createdAt).fromNow()}
                          </h6>
                        </article>
                      </Link>
                    </section>
                  );
                })
              : null}
          </div>
        </section>
      </article>
    </main>
  );
}
