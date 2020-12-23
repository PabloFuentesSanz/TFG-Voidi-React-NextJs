import styles from "../../styles/FormHome.module.css";

export default function Form(props) {
  let title = "";
  let mail = "";
  let pass = "";
  if (props.type == "log") {
    title = "Login";
    pass = <p>¿Has olvidado tu contraseña?</p>
  } else {
    title = "Sign in";
    mail = <input className={styles.input__field} type="email" name="email" id="" placeholder="email"/>
  }
  return (
    <div className={styles.form__container}>
      <form action="">
        <h1 className={styles.title}>{title}</h1>
        <input className={styles.input__field} type="text" name="username" id="" placeholder="Username" />
        {mail}
        <input className={styles.input__field} type="password" name="password" id="" placeholder="Password" />
        <button className={styles.btn}>CONTINUE</button>
        {pass}
      </form>
    </div>
  );
}
