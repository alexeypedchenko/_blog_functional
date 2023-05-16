import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Logo from "../Header/Logo/Logo";
import { links as headerLinks } from "../Header/constants/links";
import Telegram from "../Other/Telegram/Telegram";

const links = [
  {
    name: "О нас",
    href: "about-us",
  },
  {
    name: "Контакты",
    href: "contacts",
  },
  {
    name: "Политика конфиденциальности",
    href: "privacy-policy",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="flex flex-col gap-5 items-start justify-between">
        <Logo />
        <p>© Все права защищены</p>
      </div>
      <div className="flex flex-col gap-5">
        {headerLinks.map((link) => (
          <Link className="link !text-base" key={link.href} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        {links.map((link) => (
          <Link className="link !text-base" key={link.href} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex">
        <Telegram className="w-full" />
      </div>
    </footer>
  );
};

export default Footer;
