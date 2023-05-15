import React from "react";
import clsx from "clsx";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div>
      <h1 className={styles.title}>Про Финансы</h1>
      <p className={clsx("text", styles.caption)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit
        molestiae quibusdam nam doloremque omnis non maiores incidunt!
      </p>
    </div>
  );
};

export default Hero;
