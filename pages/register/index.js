import Head from "next/head";
import styles from "../../styles/Register.module.css";
import useUser, { USER_STATES } from "../../hooks/useUser";
import { createUser,getCurrentUser } from "../../firebase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


export default function RegisterPage() {
    const router = useRouter();

    const user = useUser();
    useEffect(() => {
        document.getElementById("imgProfile").style.backgroundImage = "url('../profile.jpg')"

    });

    const [data, setData] = useState({
        img: "",
        userName:"",
        surName: "",
        desc: ""
    })

    const handleClick = (e)=>{
        e.preventDefault();
        createUser(data.userName,data.surName,data.desc, data.img);
        router.replace("/home");

    }

    const handleInput = (e)=>{
        setData({
			...data,
			[e.target.name]: e.target.value,
		});
    }

    return (
        <>
            <Head>
                <title>Registro / Voidi</title>
                <link rel="icon" href="/favicon.png" />
				<meta name="google" content="notranslate" />
            </Head>
            <div className={styles.image} id="imgProfile" >

            </div>
            <div className={styles.container}>
                <input
                    className={styles.input__field}
                    type="text"
                    name="userName"
                    placeholder="Nombre"
                    onChange={handleInput}
                    value={data.userName}
                />
                <input
                    className={styles.input__field}
                    type="text"
                    name="surName"
                    placeholder="Apellidos"
                    onChange={handleInput}
                    value={data.surName}
                />
                <textarea
                    className={styles.textarea__field}
                    type="text"
                    name="desc"
                    placeholder="¿Quién eres?"
                    onChange={handleInput}
                    value={data.desc}
                />
                <button onClick={handleClick} className={styles.btn}>
                    Guardar
				</button>
            </div>
        </>
    );
}