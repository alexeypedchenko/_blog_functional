import React, { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePagination, DOTS } from "@/hooks/usePagination";
import Icon from "@/components/UI/Icon";
import styles from "./Pagination.module.css";

type Props = {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  url: string;
  siblingCount?: number;
};

const Pagination: FC<Props> = (props) => {
  const { totalCount, currentPage, pageSize, url, siblingCount = 1 } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const lastPage = paginationRange[paginationRange.length - 1];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <>
      <div className={styles.pagination}>
        {/* arrowLeft */}
        {currentPage === 1 ? (
          <div className={clsx(styles.item, styles.disabled)}>
            <Icon className="rotate-180" name="arrow-right" />
          </div>
        ) : (
          <Link
            className={styles.item}
            href={`/${url}?page=${currentPage - 1}`}
          >
            <Icon className="rotate-180" name="arrow-right" />
          </Link>
        )}

        {paginationRange.map((pageNumber, idx) => {
          if (pageNumber === DOTS) {
            return (
              <div key={idx} className={clsx(styles.item, styles.dots)}>
                &#8230;
              </div>
            );
          }

          return (
            <Link
              key={idx}
              className={clsx(styles.item, {
                [styles.selected]: pageNumber === currentPage,
              })}
              href={`/${url}?page=${pageNumber}`}
            >
              {pageNumber}
            </Link>
          );
        })}

        {/* arrowRight */}
        {currentPage === lastPage ? (
          <div className={clsx(styles.item, styles.disabled)}>
            <Icon name="arrow-right" />
          </div>
        ) : (
          <Link
            className={styles.item}
            href={`/${url}?page=${currentPage + 1}`}
          >
            <Icon name="arrow-right" />
          </Link>
        )}
      </div>
      {/* <div className="flex justify-center gap-5">
        <p>
          <span className="font-bold">totalCount:</span> {totalCount}
        </p>
        <p>
          <span className="font-bold">currentPage:</span> {currentPage}
        </p>
        <p>
          <span className="font-bold">pageSize:</span> {pageSize}
        </p>
      </div> */}
    </>
  );
};

export default Pagination;
