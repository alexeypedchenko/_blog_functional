"use client";
import { useEffect, useState } from "react";

const ArticleContent = () => {
  const [titles, setTitles] = useState<
    { tag: string; content: string; id: string }[]
  >([]);
  useEffect(() => {
    const richText = document.querySelector("#rich-text");
    // @ts-ignore
    const all = richText?.querySelectorAll("h2, h3, h4, h5, h6");
    const arr: any[] = [];
    all?.forEach((el, idx) => {
      const id = `${
        el.textContent?.replaceAll(" ", "-") || ""
      }-${idx}`.toLocaleLowerCase();
      el.id = id;
      arr.push({
        tag: el.tagName,
        content: el.textContent,
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
        <p className="text">Содержание:</p>
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
