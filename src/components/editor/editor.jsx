import React from "react";
import CardAddForm from "../card_add_form /card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ FileInput, cards, addCard, updatedCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        FileInput={FileInput}
        key={key}
        card={cards[key]}
        updatedCard={updatedCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm FileInput={FileInput} onAdd={addCard} />
  </section>
);

export default Editor;
