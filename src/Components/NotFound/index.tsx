import React, { FC } from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😓</span> <br />
        Nothing found
      </h1>
      <p className={styles.description}>
        Unfortunately this page is not available on our website
      </p>
    </div>
  );
};

export default NotFoundBlock;
