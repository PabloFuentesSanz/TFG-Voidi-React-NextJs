import styles from "../styles/Home/AsideHome.module.css";
import React, { useEffect } from 'react';

export default function AsideHome(props) {
    useEffect(() => {
            document.getElementById("imgProfile").style.backgroundImage = "url('../profile.jpg')"
        
      });

    
    return (
        <aside className={styles.aside}>
            <div className={styles.image} id="imgProfile" >

            </div>
            <h1>{props.name}</h1>
        </aside>
    );
}
