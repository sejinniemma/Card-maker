import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Emma",
      company: "Samsung",
      theme: "light",
      title: "front-end enginner",
      email: "jsj0471@naver.com",
      message: "To do yout best",
      fileName: "ellie",
      fileURL: null,
    },
    {
      id: "2",
      name: "Ellie",
      company: "Fanng",
      theme: "colorful",
      title: "front-end enginner",
      email: "ellie0471@naver.com",
      message: `Don't forget to code your dream`,
      fileName: "ellie",
      fileURL: null,
    },
    {
      id: "3",
      name: "Emma",
      company: "Samsung",
      theme: "dark",
      title: "front-end enginner",
      email: "jsj0471@naver.com",
      message: "Life is challenge",
      fileName: "ellie",
      fileURL: null,
    },
  ]);

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <section className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
