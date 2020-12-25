import styles from "../../styles/FormHome.module.css";

import { loginWithGoogle } from "../../firebase/client";

export default function Form(props) {
  let type = props.type;
  let title = "";
  let mail = "";
  let pass = "";
  let style = "";
  let id = "";

  if (type == "log") {
    title = "Login";
    pass = (
      <p>
        ¿Has olvidado <a className={styles.enlace}>tu contraseña?</a>
      </p>
    );
    style = styles.log;
    id = "formLog";
  } else {
    title = "Sign in";
    mail = (
      <input
        className={styles.input__field}
        type="email"
        name="email"
        id=""
        placeholder="email"
      />
    );
    style = styles.sign;
    id = "formSign";
  }

  const handleClick = () => {
    loginWithGoogle().then((user) => {
      console.log(user);
    });
  };

  return (
    <div className={styles.form__container + ` ` + style} id={id}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <input
          className={styles.input__field}
          type="text"
          name="username"
          id=""
          placeholder="Username"
        />
        {mail}
        <input
          className={styles.input__field}
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <button className={styles.btn}>CONTINUE</button>
        <p>Or {title} with:</p>
      <button onClick={handleClick} className={styles.button_google}>
        <img src="/googleIcon.png" height="25px" />
        <span>Google</span>
      </button>
        {pass}
      </div>
    </div>
  );
}
