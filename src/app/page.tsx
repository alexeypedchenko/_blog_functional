import ArticleList from "@/components/Article/ArticleList";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="py-20">
        <h1 className="text-4xl font-bold">Finance Pro</h1>
      </div>
      <ArticleList />
    </div>
  );
};

export default page;
