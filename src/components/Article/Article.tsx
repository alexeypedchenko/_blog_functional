import React from "react";

const Article = () => {
  return (
    <div className="border flex flex-col gap-5 min-h-[250px] p-4 rounded-xl">
      <div className="flex items-start justify-between">
        <button className="text-sm flex items-center gap-1 border-b">
          {/* • */}Category
        </button>
        <span className="text-sm">{new Date().toLocaleDateString()}</span>
      </div>
      <h3 className="text-xl font-bold">Some article title</h3>

      <p className="mt-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        rerum...
      </p>

      <div className="flex justify-between items-center">
        {/* <div className="flex flex-wrap gap-2">
          <div className="px-4 py-[2px] text-sm border rounded-2xl">Tagtag</div>
          <div className="px-4 py-[2px] text-sm border rounded-2xl">Tagtag</div>
          <div className="px-4 py-[2px] text-sm border rounded-2xl">Tagtag</div>
        </div> */}

        <button className="ml-auto text-sm flex items-center gap-1 border-b">
          Подробнее
          <svg width={24} height={24}>
            <use xlinkHref="./icons-sprite.svg#icon-arrow-right" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Article;
