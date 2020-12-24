import styles from "../../styles/FormHome.module.css";

export default function Form(props) {
  let type = props.type;
  let title = "";
  let mail = "";
  let pass = "";
  let style = "";
  let id = "";
  if (type == "log") {
    title = "Login";
    pass = <p>¿Has olvidado <a className={styles.enlace}>tu contraseña?</a></p>;
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
  return (
    <div className={styles.form__container + ` ` + style} id={id}>
      <form action="">
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
        {pass}
      </form>
    </div>
  );
}
