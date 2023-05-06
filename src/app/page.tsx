import { getLatestArticles } from "@/api/articles.api";
import { getLatestCategories } from "@/api/categories.api";
import Hero from "@/components/Hero/Hero";
import LatestArticles from "@/components/Latest/LatestArticles";
import LatestCategories from "@/components/Latest/LatestCategories";
import React from "react";

const page = async () => {
  const articles = await getLatestArticles(5);
  const categories = await getLatestCategories(2);

  return (
    <div>
      <Hero />
      <LatestArticles list={articles} />
      <LatestCategories list={categories} />
    </div>
  );
};

export default page;
