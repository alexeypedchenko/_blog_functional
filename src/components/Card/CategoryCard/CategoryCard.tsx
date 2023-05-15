import React, { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./CategoryCard.module.scss";

type Props = {
  title: string;
  description: string;
  slug: string;
  row?: boolean;
};

const CategoryCard: FC<Props> = ({ title, description, slug, row }) => {
  return (
    <Link
      href={`/categories/${slug}`}
      className={clsx(styles.сard, row && styles.row)}
    >
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </Link>
  );
};

export default CategoryCard;
