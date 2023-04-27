import { getArticlesByCat, getCategory } from "@/api";
import Article from "@/components/Article/Article";
import Pagination from "@/components/Pagination/Pagination";
const PAGE_SIZE = 1;

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
};

const page = async ({ params, searchParams }: Props) => {
  const { slug } = params;
  const { page } = searchParams;
  const category = await getCategory(slug);
  console.log("category:", category);

  const currentPage = page !== undefined ? +page : 1;
  const start = currentPage * PAGE_SIZE - PAGE_SIZE;
  const end = currentPage * PAGE_SIZE;

  const { articles, total } = await getArticlesByCat(start, end, slug);
  console.log("articles:", articles);

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-5">{category.title}</h1>
        <p>{category.description}</p>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {articles?.map((item: any) => (
          <Article key={item._id} {...item} />
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
