import { getCategory } from "@/api/categories.api";
import { getArticlesByCat } from "@/api/articles.api";
import { PageProps } from "@/types/PageProps";
import Pagination from "@/components/Pagination/Pagination";
import ArticleCard from "@/components/Card/ArticleCard/ArticleCard";

const PAGE_SIZE = 3;

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const category = await getCategory(slug);
  return {
    title: category.title,
    description: category.description,
  };
}

const page = async ({ params, searchParams }: PageProps) => {
  const { slug } = params;
  const { page } = searchParams;
  const category = await getCategory(slug);

  const currentPage = page !== undefined ? +page : 1;
  const start = currentPage * PAGE_SIZE - PAGE_SIZE;
  const end = currentPage * PAGE_SIZE;

  const { articles, total } = await getArticlesByCat(start, end, slug);

  return (
    <div>
      <div className="mb-20">
        <h1 className="h1">{category.title}</h1>
        <p className="caption">{category.description}</p>
      </div>

      <div className="card-grid">
        {articles?.map((item: any) => (
          <ArticleCard key={item._id} {...item} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalCount={total}
        pageSize={PAGE_SIZE}
        url={`categories/${category.slug}`}
      />
    </div>
  );
};

export default page;
