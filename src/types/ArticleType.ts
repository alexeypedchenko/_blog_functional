export interface IArticle {
  _id: string;
  title: string;
  description: string;
  slug: string;
  category: {
    title: string;
    slug: string;
  };
  publishedAt: string;
}
