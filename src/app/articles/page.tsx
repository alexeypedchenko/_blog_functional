import { redirect } from "next/navigation";
import { getArticles } from "@/api/articles.api";
import { PageProps } from "@/types/PageProps";
import Article from "@/components/Article/Article";
import Pagination from "@/components/Pagination/Pagination";
import ArticleCard from "@/components/Card/ArticleCard/ArticleCard";

const PAGE_SIZE = 6;

const FIRST_PAGE = "/articles?page=1";

const page = async ({ params, searchParams }: PageProps) => {
  const { page } = searchParams;

  // if (page === undefined) {
  //   redirect(FIRST_PAGE);
  // }

  const currentPage = page !== undefined ? +page : 1;
  const start = currentPage * PAGE_SIZE - PAGE_SIZE;
  const end = currentPage * PAGE_SIZE;

  const { articles, total } = await getArticles(start, end);

  // prevent empty page with incorrect page number
  // if (total > 0 && articles.length === 0) {
  //   redirect(FIRST_PAGE);
  // }

  return (
    <div className="pb-[100px]">
      <h1 className="h1 mb-[100px]">Статьи</h1>

      <div className="grid grid-cols-3 gap-10">
        {articles?.map((item: any) => (
          <ArticleCard key={item._id} {...item} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalCount={total}
        pageSize={PAGE_SIZE}
        url="articles"
      />
    </div>
  );
};

export default page;
