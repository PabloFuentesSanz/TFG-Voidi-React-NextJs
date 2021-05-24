import styles from "../styles/infoProfile.module.css";
import useUser from "../hooks/useUser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'


import { logout } from "../firebase";

export default function Info(props) {
    const user = useUser();

    const clickLogout = (e) => {
        e.preventDefault();
        logout();
    };
    return (
        <div className={styles.container} id="info">
            <p className={styles.options}><FontAwesomeIcon id="icon" className={styles.icon} icon={faUser} />Editar Perfil</p>
            <p className={styles.options}><FontAwesomeIcon id="icon" className={styles.icon} icon={faCog} />Ajustes</p>
            <button className={styles.logout} onClick={clickLogout}>Cerrar Sesión<FontAwesomeIcon id="icon" className={styles.icon} icon={faSignOutAlt} /></button>
        </div>
    );
}
