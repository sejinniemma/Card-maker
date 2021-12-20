import Header from "../header/header";
import Footer from "../footer/footer";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    const value = event.target.innerText;
    authService.login(value);
  };

  return (
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
