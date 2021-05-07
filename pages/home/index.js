import Head from "next/head";
import useUser, { USER_STATES } from "../../hooks/useUser";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import AsideHome from "../../components/AsideHome";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getCurrentUser } from "../../firebase";
import Mensages from "../../components/Mensages";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'



export default function Home() {

	const [userName, setUserName] = useState('');
	const user = useUser()

	const getUser = async () => {
		const currentUser = await getCurrentUser(user.uid);
		const { userName } = currentUser.data();
		setUserName(userName)
	}

	getUser();

	return (
		<>
			<Head>
				<title>Inicio / Voidi</title>
				<link rel="icon" href="/favicon.png" />
				<meta name="google" content="notranslate" />
			</Head>
			{user && (
				<div className={styles.page}>
					<Navbar></Navbar>
					<div className={styles.container}>
						<AsideHome name={userName}></AsideHome>
						<main className={styles.main}>
							<Card></Card>
						</main>
						{/*COMPONENTE Publi*/}
						<div className={styles.video}>
							<video loop width="100%" autoPlay muted  >
								<source src="voidi.mp4" type="video/mp4" />
							</video>
						</div>
						{/*COMPONENTE Filtros*/}
						<div className={styles.filters}>
							<h2><FontAwesomeIcon id="icon" className={styles.icon} icon={faFilter} /> Filtros</h2>
						</div>
						<Mensages></Mensages>
					</div>
				</div>
			)}
			{user === USER_STATES.NOT_KNOWN && <p>Cargando</p>}
		</>
	);
}
