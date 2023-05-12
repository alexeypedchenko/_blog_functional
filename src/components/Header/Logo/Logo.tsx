import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <span>Finance</span>
      <span>.pro</span>
    </Link>
  );
};

export default Logo;
