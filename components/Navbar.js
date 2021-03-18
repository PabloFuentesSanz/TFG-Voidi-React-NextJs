import styles from "../styles/Navbar.module.css";
import Info from "../components/infoProfile";
import { useState } from "react";



export default function Navbar() {
    const [isUp, setIsUp] = useState(false);
    const handleInfoClick = (e) => {
        if (isUp) {
            document.getElementById("info").style.top = "-500px";
            
            setIsUp(false);
        } else {
            document.getElementById("info").style.top = "70px";
            ;
            setIsUp(true);
        }
    }

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logoIzq}>
                    <img src="../logo.png" alt="logo" />
                </div>
                <div id="perfil" onClick={handleInfoClick} className={styles.perfil}>
                    <img className={styles.logoPerfil} src="../profile.jpg" alt="logo" />
                </div>

            </nav>
            <Info></Info>
        </>
    );
}
