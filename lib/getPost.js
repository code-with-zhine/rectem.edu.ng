export async function getPost(slug) {
  const res = await fetch(
    `https://backend-rectem.onrender.com/api/posts/${slug}?populate=*`
  );

  if (!res.ok) undefined;

  const posts = await res.json();
  return posts.data;
}
