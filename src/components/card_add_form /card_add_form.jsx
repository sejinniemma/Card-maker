import React, { useRef, useState } from "react";
import Button from "../button/button";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({
    fileName: null,
    fileURL: null,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({
      fileName: null,
      fileURL: null,
    });
    onAdd(card);
  };

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        ref={nameRef}
        placeholder="Name"
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={companyRef}
        placeholder="Company"
      />
      <select className={styles.select} name="theme" ref={themeRef}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        ref={titleRef}
        placeholder="Title"
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        ref={emailRef}
        placeholder="Email"
      />
      <textarea
        className={styles.textarea}
        name="message"
        ref={messageRef}
        placeholder="Message"
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} name={file.fileName} />
      </div>
      <div className={styles.addBtn}>
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardAddForm;
