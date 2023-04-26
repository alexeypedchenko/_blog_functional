import ArticleList from "@/components/Article/ArticleList";

const page = () => {
  return (
    <div className="py-10">
      <h1 className="text-xl font-bold mb-5">Articles</h1>

      <ArticleList />
    </div>
  );
};

export default page;
