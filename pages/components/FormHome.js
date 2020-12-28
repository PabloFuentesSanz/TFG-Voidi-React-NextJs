import styles from "../../styles/FormHome.module.css";
import {
  loginWithGoogle,
  loginWithMail,
  signinWithMail,
} from "../../firebase/client";
import { useState } from "react";

export default function Form(props) {
  //Variables usadas en el jsx
  let type = props.type;
  let title = "";
  let userName = "";
  let pass = "";
  let style = "";
  let id = "";
  
  
  //HOOKS
  //State
  const [data, setData] = useState({
    ["email" + type.charAt(0).toUpperCase() + type.slice(1)]: "",
    ["pass" + type.charAt(0).toUpperCase() + type.slice(1)]: "",
    userName: ""
  });

  //Manejo de Inputs
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //Configuración de las variables en función del props
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
    userName = (
      <input
        className={styles.input__field}
        type="text"
        name="userName"
        placeholder="Username"
        onChange={handleInputChange}
      />
    );
    style = styles.sign;
    id = "formSign";
  }

  //INICIO DE SESIÓN
  //Inicio de sesión por mail
  const handleClickMail = (e) => {
    e.preventDefault();
    if (type == "log") {
      loginWithMail(data.emailLog, data.passLog)
        .then((user) => {
          alert("Login correcto");
        })
        .catch((error) => {
          var errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      e.preventDefault();
      signinWithMail(data.emailSign, data.passSign)
        .then((user) => {
          alert("Signin correcto");
        })
        .catch((error) => {
          var errorMessage = error.message;
          alert(errorMessage);
        });
    }
  };

  //Inicio de sesión por Google
  const handleClickGoogle = (e) => {
    e.preventDefault();
    loginWithGoogle().then((user) => {
      console.log(user);
    });
  };

  //Inicio de sesión por Facebook
  const handleClickFacebook = (e) => {
    e.preventDefault();
    alert("hola");
  };

  //JSX CODE
  return (
    <div className={styles.form__container + ` ` + style} id={id}>
      <form>
        <h1 className={styles.title}>{title}</h1>

        {userName}
        <input
          className={styles.input__field}
          type="email"
          name={`email${type.charAt(0).toUpperCase() + type.slice(1)}`}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          className={styles.input__field}
          type="password"
          name={`pass${type.charAt(0).toUpperCase() + type.slice(1)}`}
          placeholder="Password"
          onChange={handleInputChange}
        />
        <button onClick={handleClickMail} className={styles.btn}>
          CONTINUE
        </button>
        <p>Or {title} with:</p>
        <button onClick={handleClickGoogle} className={styles.button_google}>
          <img src="/googleIcon.png" height="25px" />
          <span>Google</span>
        </button>
        <button onClick={handleClickFacebook} className={styles.button_google}>
          <img src="/faceIcon.png" height="25px" />
          <span>Facebook</span>
        </button>
        {pass}
      </form>
    </div>
  );
}
