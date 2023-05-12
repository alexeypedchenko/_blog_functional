import clsx from "clsx";
import Link from "next/link";
import Logo from "./Logo/Logo";
import MobileNav from "./MobileNav/MobileNav";
import styles from "./Header.module.css";
import { links } from "./constants/links";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Logo />
        <nav className={styles.nav}>
          {links.map((link, idx) => (
            <Link className="link" key={idx} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>
        <Link className={clsx("btn", styles.contactsBtn)} href="/contacts">
          Контакты
        </Link>
      </header>
      <MobileNav />
    </>
  );
};

export default Header;
