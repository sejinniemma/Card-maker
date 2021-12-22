import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goToMaker = (userId) => {
    navigate({
      pathname: "/maker",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    const provider = event.target.innerText;
    authService //
      .login(provider)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
