"use client";
import React, { FC } from "react";
import clsx from "clsx";
import { usePagination, DOTS } from "@/hooks/usePagination";
import styles from "./Pagination.module.css";
import Link from "next/link";

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
    <div className={styles.pagination}>
      {/* arrowLeft */}
      {currentPage === 1 ? (
        <div className={clsx(styles.item, styles.disabled)}>
          <svg width={24} height={24} className="rotate-180">
            <use xlinkHref="./icons-sprite.svg#icon-arrow-right" />
          </svg>
        </div>
      ) : (
        <Link className={styles.item} href={`/${url}?page=${currentPage - 1}`}>
          <svg width={24} height={24} className="rotate-180">
            <use xlinkHref="./icons-sprite.svg#icon-arrow-right" />
          </svg>
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
          <svg width={24} height={24}>
            <use xlinkHref="./icons-sprite.svg#icon-arrow-right" />
          </svg>
        </div>
      ) : (
        <Link className={styles.item} href={`/${url}?page=${currentPage + 1}`}>
          <svg width={24} height={24}>
            <use xlinkHref="./icons-sprite.svg#icon-arrow-right" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
