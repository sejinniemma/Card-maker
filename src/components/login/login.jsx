import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";
const Login = ({ authService }) => {
  const onLogin = (event) => {
    const value = event.target.innerText;
    authService.login(value);
  };

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
