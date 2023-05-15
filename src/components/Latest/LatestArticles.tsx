import React, { FC } from "react";
import { IArticle } from "@/types/ArticleType";
import ArticleCard from "../Card/ArticleCard/ArticleCard";
import ArticleCardShowAll from "../Card/ArticleCard/ArticleCardShowAll";

import styles from "./Latest.module.scss";

type Props = {
  list: IArticle[];
};

const Latest: FC<Props> = ({ list }) => {
  return (
    <div className={styles.wrap}>
      <h2 className="h2 mb-5">Статьи</h2>
      <div className="card-grid">
        {list?.map((item) => (
          <ArticleCard key={item._id} {...item} />
        ))}
        <ArticleCardShowAll />
        {/* <Card title={"Show all"} url={"articles"}>
          <div className="flex justify-end">
            <Icon
              width={48}
              height={48}
              name="arrow-right"
              className="-rotate-45"
            />
          </div>
        </Card> */}
      </div>
    </div>
  );
};

export default Latest;
