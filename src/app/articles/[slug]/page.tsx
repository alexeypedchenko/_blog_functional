import { getArticle, getArticleSlugList } from "@/api/articles.api";
import ArticlePage from "@/components/Article/ArticlePage/ArticlePage";
import { PageProps } from "@/types/PageProps";

// Return a list of `params` to populate the [slug] dynamic segment
// https://beta.nextjs.org/docs/api-reference/generate-static-params
// export async function generateStaticParams() {
//   const articles = await getArticleSlugList();

//   return articles.map((article: { slug: string }) => ({
//     slug: article.slug,
//   }));
// }

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const article = await getArticle(slug);
  return {
    title: article.title,
    description: article.description,
  };
}

const page = async ({ params }: PageProps) => {
  const { slug } = params;
  const article = await getArticle(slug);

  return <ArticlePage {...article} />;
};

export default page;
