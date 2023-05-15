"use client";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Icon from "@/components/UI/Icon";
import Logo from "../Logo/Logo";
import { links } from "../constants/links";
import styles from "./MobileNav.module.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.head}>
        <Logo />
        <button className={styles.btn} onClick={() => setOpen((prev) => !prev)}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      <div className={clsx(styles.nav, open && styles.navOpen)}>
        <div className={styles.links}>
          {links.map((link, idx) => (
            <Link className="link text" key={idx} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
