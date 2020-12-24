import styles from "../../styles/NavbarHome.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoIzq}>
        <img src="../logo.png" alt="logo" height="45px"  />
      </div>
      <div className={styles.logoDer}>
        <img src="../logo.png" alt="logo" height="45px" />
      </div>
    </nav>
  );
}
