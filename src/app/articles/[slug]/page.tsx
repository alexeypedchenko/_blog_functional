import { getArticle } from "@/api";
import Link from "next/link";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const article = await getArticle(slug);

  return (
    <div>
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
      <h1 className="text-xl font-bold mb-5">{article.title}</h1>
      <p>{article.description}</p>
    </div>
  );
};

export default page;
