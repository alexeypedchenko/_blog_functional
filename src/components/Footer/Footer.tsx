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
      <div className={styles.links}>
        <div className="flex flex-col gap-5 items-start">
          <p className="text">Контент</p>
          {headerLinks.map((link) => (
            <Link className="link !text-base" key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-5 items-start">
          <p className="text">Информация</p>
          {links.map((link) => (
            <Link className="link !text-base" key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
        <div></div>
        <div className="flex flex-col gap-5">
          <p className="text">Сообщество</p>
          <Telegram className="w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10 items-center text-center">
        <Logo />
        <p>© Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;
