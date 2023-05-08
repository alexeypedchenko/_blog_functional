import { clientFetch } from "@/lib/sanity/sanity";
import { IArticle } from "@/types/ArticleType";

// *[!(_id in path("drafts.**"))] // _id matches anything that is *not* in the drafts-path
const isPublished = '!(_id in path("drafts.**"))';

export const getArticleSlugList = async () => {
  const GROQ = `*[_type == "article" && ${isPublished}] {
    "slug": slug.current
  }`;
  const articles = await clientFetch(GROQ);
  return articles;
};

export const getLatestArticles = async (count: number) => {
  const paginate = `[0...${count}]`;
  const GROQ = `*[_type == "article" && ${isPublished}] | order(publishedAt asc) ${paginate} {
    _id,
    title,
    description,
    category -> {
      title,
      "slug": slug.current
    },
    publishedAt,
    "slug": slug.current
  }`;
  const articles = await clientFetch<IArticle[]>(GROQ);
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

// *[_type == $type && slug.current == $slug]{
//   "current": {
//     "slug": slug.current, title, publicReleaseDate, "tags": tags[]->tag
//   },
// "previous": *[_type == $type && count((tags[]->tag)[@ in ^.^.tags[]->tag]) > 0 && ^.publicReleaseDate > publicReleaseDate]|order(publicReleaseDate desc)[0]{
//     "slug": slug.current, title, publicReleaseDate, "tags": tags[]->tag
// },
// "next": *[_type == $type && count((tags[]->tag)[@ in ^.^.tags[]->tag]) > 0 && ^.publicReleaseDate < publicReleaseDate]|order(publicReleaseDate asc)[0]{
//     "slug": slug.current, title, publicReleaseDate, "tags": tags[]->tag
// },
// }|order(publicReleaseDate)[0]

export const getArticle = async (slug: string) => {
  const type = "article";
  const GROQ = `*[_type == $type && slug.current == "${slug}"][0] {
    "current": {
      title,
      description,
      category -> {
        title,
        "slug": slug.current
      },
      publishedAt,
      body
    },
    "previous": *[_type == $type && ${isPublished} && ^.publishedAt > publishedAt]|order(publishedAt desc)[0]{
      title,
      description,
      "slug": slug.current
    },
    "next": *[_type == $type && ${isPublished} && ^.publishedAt < publishedAt]|order(publishedAt asc)[0]{
      title,
      description,
      "slug": slug.current
    },
  }`;
  const article = await clientFetch(GROQ, { type });
  return article;
};
