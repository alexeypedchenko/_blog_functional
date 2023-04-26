import Article from "@/components/Article/Article";
import { getArticles } from "@/api";
import Pagination from "@/components/Pagination/Pagination";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
};

const PAGE_SIZE = 3;

const page = async ({ params, searchParams }: Props) => {
  const { page } = searchParams;

  const currentPage = page !== undefined ? +page : 1;
  const start = currentPage * PAGE_SIZE - PAGE_SIZE;
  const end = currentPage * PAGE_SIZE;

  const { articles, total } = await getArticles(start, end);

  return (
    <div>
      <h1 className="text-xl font-bold mb-5">Articles</h1>

      <div className="grid grid-cols-3 gap-10">
        {articles.map((item: any) => (
          <Article key={item._id} {...item} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalCount={total}
        pageSize={PAGE_SIZE}
        // onPageChange={(page) => console.log("page:", page)}
      />
    </div>
  );
};

export default page;
