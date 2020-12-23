import styles from "../../styles/AsideHome.module.css";

export default function Aside(props) {
  function showSignin() {
    document.getElementById("container").classList.add(styles.animation);
    document.getElementById("buttonSign").style.opacity = "0";
    document.getElementById("buttonLog").style.opacity = "1";
  }
  function showLogin() {
    document.getElementById("container").classList.remove(styles.animation);
    document.getElementById("buttonSign").style.opacity = "1";
    document.getElementById("buttonLog").style.opacity = "0";
  }
  let type = props.type;
  let title = "";
  let content = "";
  let boton = "";
  let style = "";
  let id = "";
  let call = "";

  if (type == "log") {
    title = "¿Eres nuevo aquí?";
    content =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quod";
    boton = "Sign in";
    style = styles.sign;
    id = "buttonSign";
    call = showSignin;
  } else {
    title = "¿Ya eres de los nuestros?";
    content =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quod";
    boton = "Log in";
    style = styles.log;
    id = "buttonLog";
    call = showLogin;
  }
  return (
    <aside className={styles.aside + " " + style} id={id}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button className={styles.button} onClick={call}>
        {boton}
      </button>
    </aside>
  );
}
