export async function getAllPosts() {
  const res = await fetch(
    "https://backend-rectem.onrender.com/api/posts?populate=*"
  );

  if (!res.ok) throw new Error("Encounter error while fetching posts");

  const posts = await res.json();
  return posts.data;
}
