"use client";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./MobileNav.module.css";
import Logo from "../Logo/Logo";
import { links } from "../constants/links";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.head}>
        <Logo />
        <button className={styles.btn} onClick={() => setOpen((prev) => !prev)}>
          {open ? "close" : "menu"}
        </button>
      </div>
      <div className={clsx(styles.nav, open && styles.navOpen)}>
        <div className={styles.links}>
          {links.map((link, idx) => (
            <Link className="link txt" key={idx} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
