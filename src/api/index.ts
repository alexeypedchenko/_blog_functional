import { clientFetch } from "@/lib/sanity/sanity";

export const getArticlesCount = async () => {};

export const getArticles = async (start?: number, end?: number) => {
  const paginate =
    start !== undefined && end !== undefined ? `[${start}...${end}]` : "";

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
  const articles = await clientFetch(GROQ);
  return articles;
};
export const getArticlesByCat = async (
  start?: number,
  end?: number,
  category?: string
) => {
  const paginate =
    start !== undefined && end !== undefined ? `[${start}...${end}]` : "";

  const GROQ = `{
    "articles": *[_type == "article" && category->slug.current == "${category}" ] | order(publishedAt asc) ${paginate} {
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
    "total": count(*[_type == "article" && category->slug.current == "${category}"])
  }`;
  const articles = await clientFetch(GROQ);
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
  const article = await clientFetch(GROQ);
  return article;
};

export const getCategories = async () => {
  const GROQ = `*[_type == "category"] {
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
