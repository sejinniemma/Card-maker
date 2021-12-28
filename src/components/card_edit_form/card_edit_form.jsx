import React from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ FileInput, card, updatedCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileURL, fileName } =
    card;

  const onSubmit = () => {
    deleteCard(card);
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updatedCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onFileChange = (file) => {
    updatedCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>

      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} name={fileName} />
      </div>
      <div className={styles.delete}>
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
