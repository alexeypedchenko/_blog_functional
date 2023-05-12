import React, { FC } from "react";
import CategoryCard from "../Card/CategoryCard/CategoryCard";
import Card from "../Card/Card";
import Icon from "../UI/Icon";

type Props = {
  list: any[];
};

const LatestCategories: FC<Props> = ({ list }) => {
  return (
    <div className="my-[100px]">
      <h2 className="h2 mb-5">Категории</h2>
      <div className="card-grid">
        {list?.map((item) => (
          <CategoryCard key={item._id} {...item} />
        ))}
        <Card title={"Show all"} url={"categories"}>
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

export default LatestCategories;
