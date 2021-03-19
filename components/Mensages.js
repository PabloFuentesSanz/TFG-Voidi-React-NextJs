import styles from "../styles/Mensages.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";



export default function Mensages() {
    const [isUp, setIsUp] = useState(false);
    const [icon, setIcon] = useState(faAngleUp);
    const handleArrowClick = (e) => {
        if (isUp) {
            setIcon(faAngleUp);
            document.getElementById("mensages").style.height = "50px";
            setIsUp(false);
        } else {
            setIcon(faAngleDown);
            document.getElementById("mensages").style.height = "400px";
            setIsUp(true);
        }
    }
    return (
        <div className={styles.msg} id="mensages">
            <div className={styles.titleContainer}>
                <h3 className={styles.title}><FontAwesomeIcon id="icon" className={styles.iconMen} icon={faEnvelope} /> Mensajes <FontAwesomeIcon id="icon" className={styles.icon} onClick={handleArrowClick} icon={icon} /></h3>
            </div>
                <h1>Mensaje 1</h1>
                <h1>Mensaje 2</h1>
                <h1>Mensaje 3</h1>
                <h1>Mensaje 4</h1>

        </div>
    );
}