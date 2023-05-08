import React, { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  title: string;
  description?: string;
  slug?: string;
  url?: string;
  className?: string;
};

const Card: FC<PropsWithChildren<Props>> = ({
  title,
  description,
  slug = "",
  url,
  className,
  children,
}) => {
  return (
    <Link href={`/${url}/${slug}`} className={clsx(styles.сard, className)}>
      <h3 className={styles.title}>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </Link>
  );
};

export const PlaceholderCard: FC<
  PropsWithChildren<Omit<Props, "url" | "slug">>
> = ({ title, description, children }) => {
  return (
    <div className={clsx(styles.сard, "cursor-default")}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
    </div>
  );
};

export default Card;
