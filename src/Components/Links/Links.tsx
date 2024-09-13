import React, { FC } from "react";
import github from "./imgs/github.png";
import gmail from "./imgs/gmail.png";
import linkedin from "./imgs/linkedin.png";
import styles from "./Links.module.scss";

const Links: FC = () => {
  return (
    <div className={styles.container__links}>
      <a href="https://github.com/Nijekt/react_pizza" target="_blank">
        <img src={github} alt="" />
      </a>

      <img
        onClick={() => alert("nikitasnizko111@gmail.com")}
        src={gmail}
        alt=""
      />

      <a
        href="https://www.linkedin.com/in/snizhko-nikita-639805252/"
        target="_blank"
      >
        <img src={linkedin} alt="" />
      </a>
    </div>
  );
};

export default Links;
