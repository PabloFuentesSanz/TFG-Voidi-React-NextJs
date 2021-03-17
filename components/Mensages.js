import styles from "../styles/Mensages.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";



export default function Mensages() {
    let isUp = true;
    const [icon, setIcon] = useState(faAngleDown);
    const handleClick = (e) => {
        e.preventDefault();
        if (isUp) {
            setIcon(faAngleUp);
            document.getElementById("mensages").style.bottom = "-345px";
            isUp = false;
        } else {
            setIcon(faAngleDown);
            document.getElementById("mensages").style.bottom = "-10px";
            isUp = true;
        }
    }
    return (
        <div className={styles.msg} id="mensages">
            <div>

                <h3 className={styles.title}>Mensajes <FontAwesomeIcon id="icon" className={styles.icon} onClick={handleClick} icon={icon} /></h3>
            </div>

        </div>
    );
}
