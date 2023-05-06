import React, { FC } from "react";
import Link from "next/link";
import styles from "./ArticleCard.module.css";
import Icon from "@/components/UI/Icon";
import clsx from "clsx";

const ArticleCardShowAll: FC = () => {
  return (
    <Link className={clsx(styles.сard, styles.сardAll)} href={`/articles`}>
      <div className={styles.info}>
        <p>Смотреть все</p>
        <p>{new Date().toLocaleDateString()}</p>
      </div>
      <div className={styles.link}>
        <h3 className={styles.title}>Show All</h3>
        <div className="flex justify-end">
          <Icon
            width={48}
            height={48}
            name="arrow-right"
            className="-rotate-45"
          />
        </div>
      </div>
    </Link>
  );
};

export default ArticleCardShowAll;
