import React, { FC } from "react";
import Link from "next/link";
import styles from "./ArticleCard.module.css";
import { IArticle } from "@/types/ArticleType";

const ArticleCard: FC<IArticle> = ({
  title,
  description,
  slug,
  category,
  publishedAt,
}) => {
  return (
    <div className={styles.сard}>
      <div className={styles.info}>
        <Link className={styles.category} href={`/categories/${category.slug}`}>
          {category.title}
        </Link>
        <p>{new Date(publishedAt).toLocaleDateString()}</p>
      </div>
      <Link className={styles.link} href={`/articles/${slug}`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
