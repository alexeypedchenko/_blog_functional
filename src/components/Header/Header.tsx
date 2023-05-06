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
    <header className="sticky top-0 mb-20 pt-5 pb-[5px] flex items-center  bg-white">
      <Link href="/" className={styles.logo}>
        <span>Finance</span>
        <span>.pro</span>
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
      <Link className="btn ml-auto" href="/contacts">
        Контакты
      </Link>
    </header>
  );
};

export default Header;
