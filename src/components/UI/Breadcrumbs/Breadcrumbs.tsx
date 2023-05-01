import Link from "next/link";
import React, { FC } from "react";

type Item = {
  name: string;
  href: string;
};

type Props = {
  list: Item[];
  current: string;
};

const Breadcrumbs: FC<Props> = ({ list, current }) => {
  return (
    <div className="flex gap-2 text-sm mb-10">
      <Link className="hover:underline" href="/">
        Главная
      </Link>
      <span className="text-gray-400">/</span>
      {list.map((item) => (
        <>
          <Link className="hover:underline" key={item.href} href={item.href}>
            {item.name}
          </Link>
          <span className="text-gray-400">/</span>
        </>
      ))}
      <span className="text-gray-600">{current}</span>
    </div>
  );
};

export default Breadcrumbs;
