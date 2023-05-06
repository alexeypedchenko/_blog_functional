import React, { FC } from "react";
import Link from "next/link";
import styles from "./ArticleCard.module.css";
import Icon from "@/components/UI/Icon";

const ArticleCardShowAll: FC = () => {
  return (
    <div className={styles.сard}>
      <Link className={styles.link} href={`/articles`}>
        <h3 className={styles.title}>Show All</h3>
        <div className="flex justify-end">
          <Icon
            width={48}
            height={48}
            name="arrow-right"
            className="-rotate-45"
          />
        </div>
      </Link>
    </div>
  );
};

export default ArticleCardShowAll;
