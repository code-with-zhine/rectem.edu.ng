"use client";

import React, { createContext, useEffect, useState } from "react";

export const revalidate = 0; // revalidate at most every 24 hour - 86400

const STRAPI_ENDPOINT = "https://backend-rectem.onrender.com/api";
const OPTIONS = {
  method: "GET",
};

async function getPosts() {
  const response = await fetch(`${STRAPI_ENDPOINT}/posts?populate=*`, OPTIONS);
  const posts = await response.json();
  return posts?.data;
}

export const PostContext = createContext();

export const PostContextProvider = async ({ children }) => {
  const [posts, setPosts] = useState();

  useEffect(async () => {
    const posts = await getPosts();
    setPosts(posts);
  });

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
};
