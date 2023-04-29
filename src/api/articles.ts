import { clientFetch } from "@/lib/sanity/sanity";

// *[!(_id in path("drafts.**"))] // _id matches anything that is *not* in the drafts-path
const isPublished = '!(_id in path("drafts.**"))';

export const getArticleSlugList = async () => {
  const GROQ = `*[_type == "article" && ${isPublished}] {
    "slug": slug.current
  }`;
  const articles = await clientFetch(GROQ);
  return articles;
};

export const getArticles = async (start?: number, end?: number) => {
  const paginate =
    start !== undefined && end !== undefined ? `[${start}...${end}]` : "";

  const GROQ = `{
    "articles": *[_type == "article" && ${isPublished}] | order(publishedAt asc) ${paginate} {
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
    "total": count(*[_type == "article" && ${isPublished}])
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
    "articles": *[_type == "article" && ${isPublished} && category->slug.current == "${category}" ] | order(publishedAt asc) ${paginate} {
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
    "total": count(*[_type == "article" && ${isPublished} && category->slug.current == "${category}"])
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
    body
  }`;
  const article = await clientFetch(GROQ);
  return article;
};
