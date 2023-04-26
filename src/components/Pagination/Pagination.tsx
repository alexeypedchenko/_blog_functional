"use client";
import React, { FC } from "react";
import clsx from "clsx";
import { usePagination, DOTS } from "@/hooks/usePagination";
import styles from "./Pagination.module.css";

type Props = {
  onPageChange: (page: number | string) => void;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  siblingCount?: number;
};

const Pagination: FC<Props> = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul className={styles.pagination}>
      {/* arrowLeft */}
      <li
        className={clsx(styles.item, {
          [styles.disabled]: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <svg width={24} height={24} className="rotate-180">
          <use xlinkHref="./icons-sprite.svg#icon-arrow-right" />
        </svg>
      </li>

      {paginationRange.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return (
            <li key={idx} className={clsx(styles.item, styles.dots)}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={idx}
            className={clsx(styles.item, {
              [styles.selected]: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      {/* arrowRight */}
      <li
        className={clsx(styles.item, {
          [styles.disabled]: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <svg width={24} height={24}>
          <use xlinkHref="./icons-sprite.svg#icon-arrow-right" />
        </svg>
      </li>
    </ul>
  );
};

export default Pagination;
