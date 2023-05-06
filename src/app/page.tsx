import { getLatestArticles } from "@/api/articles.api";
import { getLatestCategories } from "@/api/categories.api";
import Hero from "@/components/Hero/Hero";
import Latest from "@/components/Latest/LatestArticles";
import React from "react";

const page = async () => {
  const articles = await getLatestArticles(5);
  const categories = await getLatestCategories(2);

  return (
    <div>
      <Hero />
      <Latest list={articles} />
    </div>
  );
};

export default page;
