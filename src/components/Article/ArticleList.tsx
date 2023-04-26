"use client";
import React, { useEffect, useState } from "react";
import { getArticles } from "@/api";
import Article from "./Article";
import Pagination from "../Pagination/Pagination";

const PAGE_SIZE = 3;

const ArticleList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const start = currentPage * PAGE_SIZE - PAGE_SIZE;
    const end = currentPage * PAGE_SIZE;

    setIsLoading(true);
    getArticles(start, end)
      .then((resp) => {
        console.log("resp:", resp);
        setArticles(resp);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {isLoading ? (
          <>
            <p className="text-xl font-bold">Loading...</p>
          </>
        ) : (
          <>
            {articles.map((item, idx) => (
              <Article key={idx} {...item} />
            ))}
          </>
        )}
        <div className="border flex flex-col min-h-[250px] p-4 rounded-xl cursor-pointer">
          <div className="text-xl font-bold">See All</div>
          <svg width={90} height={90} className="ml-auto mt-auto -rotate-45">
            <use xlinkHref="./icons-sprite.svg#icon-arrow-right" />
          </svg>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalCount={10}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => setCurrentPage(page as number)}
      />
    </div>
  );
};

export default ArticleList;
