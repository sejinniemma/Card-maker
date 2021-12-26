import React from "react";
import Cards from "../card/card";
import styles from "./preview.module.css";
const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Preview</h1>
    <ul className={styles.cards}>
      {cards.map((card) => (
        <Cards card={card} />
      ))}
    </ul>
  </section>
);

export default Preview;
