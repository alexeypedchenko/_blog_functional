import { clientFetch } from "@/lib/sanity/sanity";

// *[!(_id in path("drafts.**"))] // _id matches anything that is *not* in the drafts-path
const isPublished = '!(_id in path("drafts.**"))';

export const getCategories = async () => {
  const GROQ = `*[_type == "category" && ${isPublished}] | order(publishedAt asc) {
    _id,
    title,
    description,
    "slug": slug.current
  }`;
  const categories = await clientFetch(GROQ);
  return categories;
};

export const getCategory = async (slug: string) => {
  const GROQ = `*[_type == "category" && slug.current == "${slug}"][0] {
    title,
    description,
    "slug": slug.current
  }`;
  const category = await clientFetch(GROQ);
  return category;
};

// export class Api {
//   static getPosts = async () => {
//     const GROQ_POSTS = `*[_type == "post"] | order(publishedAt)`
//     const posts = await client.fetch(GROQ_POSTS)
//     return posts
//   }

// static getPost = async (slug: string) => {
//   const GROQ_POST = `*[_type == "post" && slug.current == "${slug}"][0]`
//   const post = await client.fetch(GROQ_POST)
//   return post
// }
// }

// "category": category -> title,
