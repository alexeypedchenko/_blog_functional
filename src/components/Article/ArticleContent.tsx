"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { createElement, useEffect, useState } from "react";

const ArticleContent = () => {
  const pathName = usePathname();
  const [titles, setTitles] = useState<
    { tag: string; content: string; id: string }[]
  >([]);
  useEffect(() => {
    const richText = document.querySelector("#rich-text");
    // @ts-ignore
    const all = richText?.querySelectorAll("h2, h3, h4, h5, h6");
    const arr: any[] = [];
    all?.forEach((el, idx) => {
      const id = `${el.textContent?.replaceAll(" ", "-") || ""}-${idx}`;
      el.id = id;
      arr.push({
        tag: el.tagName,
        content: `${idx + 1}. ${el.textContent}`,
        id,
      });
    });
    setTitles(arr);
  }, []);

  if (titles.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="top-5 sticky flex flex-col gap-2">
        <p className="txt">Содержание:</p>
        {titles?.map((el, idx) => (
          <a key={idx} href={`#${el.id}`} className="link">
            {el.content}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArticleContent;
