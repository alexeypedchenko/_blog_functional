import React, { FC, PropsWithChildren } from "react";
import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  title: string;
  description?: string;
  slug?: string;
  url: string;
};

const Card: FC<PropsWithChildren<Props>> = ({
  title,
  description,
  slug = "",
  url,
  children,
}) => {
  return (
    <Link href={`/${url}/${slug}`} className={styles.сard}>
      <h3 className={styles.title}>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </Link>
  );
};

export default Card;
