import React from "react";
import Link from "next/link";
import { getCategories } from "@/api/categories.api";

const page = async () => {
  const categories = await getCategories();

  return (
    <div>
      <h1 className="h1 mb-[100px]">Категории</h1>
      <div className="grid grid-cols-4 gap-5">
        {categories.map((el: any) => (
          <Link
            className="border p-5 flex flex-col gap-5 hover:bg-gray-100"
            key={el._id}
            href={`/categories/${el.slug}`}
          >
            <h2 className="text-xl font-bold">{el.title}</h2>
            <p>{el.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
