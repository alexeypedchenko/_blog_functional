import { client } from "@/lib/sanity/sanity";

export const getArticlesCount = async () => {};

export const getArticles = async (start?: number, end?: number) => {
  const paginate =
    start !== undefined && end !== undefined ? `[${start}...${end}]` : "";

  const fields = ``;
  const total = ``;

  const GROQ = `{
    "articles": *[_type == "article"] | order(publishedAt asc) ${paginate} {
      _id,
      title,
      description,
      category -> {
        title,
        "slug": slug.current
      },
      publishedAt,
      "slug": slug.current
    },
    "total": count(*[_type == "article"])
  }`;
  const articles = await client.fetch(GROQ);
  return articles;
};

export const getArticle = async (slug: string) => {
  const GROQ = `*[_type == "article" && slug.current == "${slug}"][0] {
    title,
    description,
    category -> {
      title,
      "slug": slug.current
    },
    publishedAt,
  }`;
  const article = await client.fetch(GROQ);
  return article;
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
