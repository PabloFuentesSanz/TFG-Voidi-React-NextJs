import styles from "../styles/Home/AsideHome.module.css";
import React, { useEffect } from 'react';

export default function AsideHome(props) {
    

    
    useEffect(() => {
        document.getElementById("imgProfile").style.backgroundImage = "url('../profile.jpg')"
    });
    const handleImg = () => {

        document.getElementById("imgUpload").dispatchEvent(new MouseEvent("click"));
    }


    return (
        <aside className={styles.aside}>
            <form action="" >
                <input className={styles.file} type="file" id="imgUpload"/>
            </form>
            <div className={styles.image} onClick={handleImg} id="imgProfile" >

            </div>
            <h1>{props.name}</h1>
        </aside>
    );
}
