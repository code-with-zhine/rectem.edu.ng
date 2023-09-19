import {blogsData} from "../../../../data/blogs-data";

// "use client";

export default function Home({params}) {
const slug = params.slug * 1;
const data = blogsData.find((blogData) => blogData.id === slug);

  return (
      <>


      </>
  );
}
