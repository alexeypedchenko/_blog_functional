import React, { FC } from "react";
import { IArticle } from "@/types/ArticleType";
import ArticleCard from "../Card/ArticleCard/ArticleCard";
import Card from "../Card/Card";
import Icon from "../UI/Icon";

type Props = {
  list: IArticle[];
};

const Latest: FC<Props> = ({ list }) => {
  return (
    <div className="my-[100px]">
      <h2 className="h2 mb-5">Статьи</h2>
      <div className="grid grid-cols-3 gap-y-5 gap-x-10">
        {list?.map((item) => (
          <ArticleCard key={item._id} {...item} />
        ))}
        <Card title={"Show all"} url={"articles"}>
          <div className="flex justify-end">
            <Icon
              width={48}
              height={48}
              name="arrow-right"
              className="-rotate-45"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Latest;