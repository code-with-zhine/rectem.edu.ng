export async function getAllPosts() {
  const res = await fetch("http://localhost:1337/api/posts?populate=*");

  if (!res.ok) throw new Error("Encounter error while fetching posts");

  const posts = await res.json();
  return posts.data;
}
