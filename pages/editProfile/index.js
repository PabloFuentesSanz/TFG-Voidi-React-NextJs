import Head from "next/head";
import useUser, { USER_STATES } from "../../hooks/useUser";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import AsideHome from "../../components/AsideHome";
import Carga from "../../components/Carga";
import { useState } from "react";

import makeAnimated from 'react-select/animated';

import { getCurrentUser } from "../../firebase";


const animatedComponents = makeAnimated();


export default function editProfile() {
	const [name, setName] = useState('');
	const [userImg, setUserImg] = useState('');
	const [userDesc, setUserDesc] = useState('');
    const user = useUser()
	const getUser = async () => {
		if (user) {
			const currentUser = await getCurrentUser(user.uid);
			const { userName, img, desc } = await currentUser;
			setName(userName)
			setUserImg(img)
			setUserDesc(desc)
		}
	}

	getUser();

    const containerStyle = `${styles.container} row`

    return (
        <>
        <Head>
            <title>Editar Perfil / Voidi</title>
            <link rel="icon" href="/favicon.png" />
            <meta name="google" content="notranslate" />
        </Head>
        {user && (
            <div className={styles.page}>

                <Navbar img={userImg} name={name}></Navbar>
                <div className={containerStyle}>
                    <AsideHome name={name} img={userImg} desc={userDesc} edit="1"></AsideHome>
                   
                </div>

            </div>
        )}
        {user === USER_STATES.NOT_KNOWN && <Carga></Carga>}
    </>
    )
}