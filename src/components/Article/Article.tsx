import React, { FC } from "react";
import Link from "next/link";
import Icon from "@/components/UI/Icon";

type Props = {
  slug: string;
  title: string;
  description: string;
  category: { title: string; slug: string };
  publishedAt: string | Date;
};

const Article: FC<Props> = (props) => {
  const { slug, title, description, category, publishedAt } = props;

  return (
    <div className="border flex flex-col gap-5 min-h-[250px] p-4 rounded-xl">
      <div className="flex items-start justify-between">
        <Link
          className="text-sm flex items-center gap-1 border-b"
          href={`/categories/${category.slug}`}
        >
          {category.title}
        </Link>
        <span className="text-sm">
          {new Date(publishedAt).toLocaleDateString()}
        </span>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-auto">{description}</p>

      <div className="flex justify-between items-center">
        <Link
          className="ml-auto text-sm flex items-center gap-1 border-b"
          href={`/articles/${slug}`}
        >
          Подробнее
          <Icon name="arrow-right" />
        </Link>
      </div>
    </div>
  );
};

export default Article;
