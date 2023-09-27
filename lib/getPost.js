export async function getPost(slug) {
  const res = await fetch(
    `https://backend-rectem.onrender.com/api/posts/${slug}?populate=*`
  );

  if (!res.ok) throw new Error(`Encounter error while fetching ${slug}`);

  const posts = await res.json();
  return posts.data;
}
