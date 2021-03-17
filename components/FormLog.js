import styles from "../styles/Log/FormLog.module.css";
import { loginWithGoogle, loginWithMail, signinWithMail } from "../firebase";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Form(props) {
	//Variables usadas en el jsx
	let type = props.type;
	let title = "";
	let userName = "";
	let pass = "";
	let style = "";
	let id = "";
	let valueEmail = "";
	let valuePass = "";
	let textButton = "";
	let titleSp = "";

	//HOOKS
	const router = useRouter();

	//useState declarar variables de estado
	const [data, setData] = useState({
		["email" + type]: "",
		["pass" + type]: "",
		userName: "",
	});


	//Manejo de Inputs onChange
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	//Configuración de las variables en función del props
	if (type == "log") {
		title = "Login";
		titleSp = "haz Login";
		pass = (
			<p>
				¿Has olvidado <a className={styles.enlace}>tu contraseña?</a>
			</p>
		);
		style = styles.log;
		id = "formLog";
		valueEmail = data.emaillog;
		valuePass = data.passlog;
		textButton = "Continúa";
	} else {
		title = "Sign up";
		titleSp = "regístrate";
		valueEmail = data.emailsign;
		valuePass = data.passsign;
		userName = (
			<input
				className={styles.input__field}
				type="text"
				name="userName"
				placeholder="Username"
				onChange={handleInputChange}
				value={data.userName}
			/>
		);
		style = styles.sign;
		id = "formSign";
		textButton = "Regístrate";
	}

	//INICIO DE SESIÓN --> Pasarlo a useUser() Hook propio??
	//Inicio de sesión por mail
	const handleClickMail = (e) => {
		e.preventDefault();
		if (type == "log") { //LOGIN WITH MAIL
			loginWithMail(data.emaillog, data.passlog)
				.then((user) => {
					router.replace("/home");
				})
				.catch((error) => {
					var errorMessage = error.message;
					alert(errorMessage);
				});
		} else { // SIGN UP WITH MAIL
			e.preventDefault();
			signinWithMail(data.userName, data.emailsign, data.passsign)
				.then((user) => {
					alert("Sign up correcto");
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
			console.log(user)
			if (user.additionalUserInfo.isNewUser) {
				router.replace("/register");
			} else {
				router.replace("/home"); //Crear Route en index.js
			}
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
					name={`email${type}`}
					placeholder="Email"
					onChange={handleInputChange}
					value={valueEmail}
				/>
				<input
					className={styles.input__field}
					type="password"
					name={`pass${type}`}
					placeholder="Password"
					onChange={handleInputChange}
					value={valuePass}
				/>
				<button onClick={handleClickMail} className={styles.btn}>
					{textButton}
				</button>
				<p>O {titleSp} con:</p>
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
