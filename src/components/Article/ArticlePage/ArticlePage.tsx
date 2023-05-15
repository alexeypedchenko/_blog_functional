import React, { FC } from "react";
import styles from "./ArticlePage.module.scss";
import Link from "next/link";
import RichText from "../../UI/RichText/RichText";
import ArticleContent from "./../ArticleContent";
import Card, { PlaceholderCard } from "../../Card/Card";
import ContentAside from "./ContentAside";
import Icon from "../../UI/Icon";

type AdditionalArticle = {
  title: string;
  description: string;
  slug: string;
};

type Props = {
  current: {
    title: string;
    description: string;
    category: {
      slug: string;
      title: string;
    };
    publishedAt: string;
    body: any;
  };
  previous: AdditionalArticle | null;
  next: AdditionalArticle | null;
};

const ArticlePage: FC<Props> = ({ current, previous, next }) => {
  const { title, description, category, publishedAt, body } = current;

  return (
    <div>
      <h1 className="h1">{title}</h1>

      <div className={styles.info}>
        <div>
          <Link className="link" href={`/categories/${category.slug}`}>
            #{category.title}
          </Link>
        </div>
        <p className="text">{description}</p>
        <p className={styles.date}>
          {new Date(publishedAt).toLocaleDateString()}
        </p>
      </div>

      {body && (
        <div className={styles.content}>
          <ArticleContent />
          <RichText body={body} />
          <ContentAside />
        </div>
      )}
      {(previous || next) && (
        <div className={styles.otherArticles}>
          {previous ? (
            <Card {...previous} url="articles" className="text-right">
              <div className="mt-5 flex items-start justify-between">
                <Icon
                  width={48}
                  height={48}
                  name="arrow-right"
                  className="rotate-45 -scale-100"
                />
                <p>Предыдущая статья</p>
              </div>
            </Card>
          ) : (
            <PlaceholderCard title="" description="" />
          )}
          {next ? (
            <Card {...next} url="articles">
              <div className="mt-5 flex items-start justify-between">
                <p>Следующая статья</p>
                <Icon
                  width={48}
                  height={48}
                  name="arrow-right"
                  className="-rotate-45"
                />
              </div>
            </Card>
          ) : (
            <PlaceholderCard title="" description="" />
          )}
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
