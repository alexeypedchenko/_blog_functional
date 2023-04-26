"use client";
import React, { useState } from "react";
import Article from "./Article";
import Pagination from "../Pagination/Pagination";

const pages = Array(100)
  .fill(1)
  .map((el, idx) => idx + 1);

const PageSize = 10;

const ArticleList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {Array(6)
          .fill(1)
          .map((el, idx) => (
            <Article key={idx} />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={pages.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page as number)}
      />
    </div>
  );
};

export default ArticleList;
