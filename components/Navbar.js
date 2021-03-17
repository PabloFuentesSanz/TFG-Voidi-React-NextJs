import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoIzq}>
                <img src="../logo.png" alt="logo" />
            </div>
        </nav>
    );
}
