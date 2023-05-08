import { PortableText } from "@portabletext/react";
import React from "react";
import styles from "./RichText.module.css";

const RichText = ({ body }: { body: any }) => {
  return (
    <div id="rich-text" className={styles.box}>
      <PortableText value={body} />
    </div>
  );
};

export default RichText;
