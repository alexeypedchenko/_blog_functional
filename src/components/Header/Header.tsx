import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const links = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Статьи",
    href: "/articles",
  },
  {
    name: "Категории",
    href: "/categories",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 mb-20 h-[60px] flex items-center bg-white">
      <Link href="/" className={styles.logo}>
        <span>Finance</span>
        .pro
      </Link>
      <nav className="flex gap-10 items-center">
        {links.map((link, idx) => (
          <Link
            className="text-xl cursor-pointer hover:underline"
            key={idx}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
