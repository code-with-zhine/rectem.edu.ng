export async function getPost(slug) {
  const res = await fetch(`http://localhost:1337/api/posts/${slug}?populate=*`);

  if (!res.ok) throw new Error(`Encounter error while fetching ${slug}`);

  const posts = await res.json();
  return posts.data;
}
