import styles from "../styles/Log/NavbarLog.module.css";

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.logoIzq}>
				<img src="../logo.png" alt="logo" />
			</div>
			<div className={styles.logoDer}>
				<img src="../logo.png" alt="logo" />
			</div>
		</nav>
	);
}
