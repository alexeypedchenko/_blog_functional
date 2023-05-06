import React from "react";
import { getCategories } from "@/api/categories.api";
import CategoryCard from "@/components/Card/CategoryCard/CategoryCard";

const page = async () => {
  const categories = await getCategories();

  return (
    <div>
      <h1 className="h1">Категории</h1>
      <div className="grid grid-cols-1 gap-y-5 gap-x-10">
        {categories?.map((item: any) => (
          <CategoryCard key={item._id} {...item} row />
        ))}
      </div>
    </div>
  );
};

export default page;
