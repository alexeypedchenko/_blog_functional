import { getArticle, getArticleSlugList } from "@/api/articles.api";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import RichText from "@/components/UI/RichText/RichText";
import { PageProps } from "@/types/PageProps";
import Link from "next/link";

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

  return (
    <div>
      <Breadcrumbs
        list={[
          {
            name: "Статьи",
            href: "/articles",
          },
        ]}
        current={article.title}
      />
      <div className="flex items-start justify-between mb-5">
        <Link
          className="text-sm flex items-center gap-1 border-b"
          href={`/categories/${article.category.slug}`}
        >
          {article.category.title}
        </Link>
        <span className="text-sm">
          {new Date(article.publishedAt).toLocaleDateString()}
        </span>
      </div>
      <div className="mb-10">
        <h1 className="text-xl font-bold mb-5">{article.title}</h1>
        <p>{article.description}</p>
      </div>
      {article.body && <RichText body={article.body} />}
    </div>
  );
};

export default page;
