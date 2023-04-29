import { redirect } from "next/navigation";
import { getArticles } from "@/api/articles";
import { PageProps } from "@/types/PageProps";
import Article from "@/components/Article/Article";
import Pagination from "@/components/Pagination/Pagination";

const PAGE_SIZE = 3;

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
  if (total > 0 && articles.length === 0) {
    redirect(FIRST_PAGE);
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-5">Articles</h1>

      <div className="grid grid-cols-3 gap-10">
        {articles?.map((item: any) => (
          <Article key={item._id} {...item} />
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
