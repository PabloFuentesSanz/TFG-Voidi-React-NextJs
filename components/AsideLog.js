import styles from "../styles/Log/AsideLog.module.css";

export default function Aside(props) {
	function showSignin() {
		document.getElementById("container").classList.add(styles.animation);
		document.getElementById("formLog").style.opacity = "0";
		document.getElementById("formSign").style.opacity = "1";
		document.getElementById("formLog").style.transform = "translateX(400px)";
		document.getElementById("formSign").style.transform = "translateX(0px)";
		document.getElementById("buttonSign").style.opacity = "0";
		document.getElementById("buttonLog").style.opacity = "1";
		document.getElementById("buttonLog").style.transform = "translateX(0px)";
		document.getElementById("buttonSign").style.transform =
			"translateX(-800px)";
	}
	function showLogin() {
		document.getElementById("container").classList.remove(styles.animation);
		document.getElementById("formLog").style.opacity = "1";
		document.getElementById("formSign").style.opacity = "0";
		document.getElementById("formLog").style.transform = "translateX(0px)";
		document.getElementById("formSign").style.transform = "translateX(-400px)";
		document.getElementById("buttonSign").style.opacity = "1";
		document.getElementById("buttonLog").style.opacity = "0";
		document.getElementById("buttonSign").style.transform = "translateX(0px)";
		document.getElementById("buttonLog").style.transform = "translateX(800px)";
	}
	let type = props.type;
	let title = "";
	let content = "";
	let boton = "";
	let style = "";
	let id = "";
	let call = "";
	let imagen = "";

	if (type == "log") {
		title = "¿Eres nuevo aquí?";
		content =
			"Regístrate y busca tu empleo perfecto, o pon tus propias ofertas y encuentra los mejores candidatos para tu puesto.";
		boton = "Sign up";
		style = styles.sign;
		id = "buttonSign";
		call = showSignin;
		imagen = "../undrawHomeLeft.svg";
	} else {
		title = "¿Ya eres de los nuestros?";
		content =
			"No esperes más, entra y continúa con tu experiencia Voidi.";
		boton = "Log in";
		style = styles.log;
		id = "buttonLog";
		call = showLogin;
		imagen = "../undrawHomeRight.svg";
	}
	return (
		<aside className={styles.aside + " " + style} id={id}>
			<div>
				<h1>{title}</h1>
				<p className={styles.contenido}>{content}</p>
				<button className={styles.button} onClick={call}>
					{boton}
				</button>
			</div>
			<img src={imagen} alt="" className={styles.image} />
		</aside>
	);
}
