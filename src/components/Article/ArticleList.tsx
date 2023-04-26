"use client";
import React, { useEffect, useState } from "react";
import Article from "./Article";
import Pagination from "../Pagination/Pagination";

const pages = Array(100)
  .fill(1)
  .map((el, idx) => idx + 1);

const PAGE_SIZE = 10;

const ArticleList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const start = currentPage * PAGE_SIZE - PAGE_SIZE;
    const end = currentPage * PAGE_SIZE;
    console.log("start:", start);
    console.log("end:", end);
  }, [currentPage]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {Array(5)
          .fill(1)
          .map((el, idx) => (
            <Article key={idx} />
          ))}
        <div className="border flex flex-col min-h-[250px] p-4 rounded-xl cursor-pointer">
          <div className="text-xl font-bold">See All</div>
          <svg width={90} height={90} className="ml-auto mt-auto -rotate-45">
            <use xlinkHref="./icons-sprite.svg#icon-arrow-right" />
          </svg>
        </div>
      </div>

      {/* <Pagination
        currentPage={currentPage}
        totalCount={pages.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => setCurrentPage(page as number)}
      /> */}
    </div>
  );
};

export default ArticleList;
