import Head from "next/head";
import useUser, { USER_STATES } from "../../hooks/useUser";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import AsideHome from "../../components/AsideHome";
import Card from "../../components/Card";
import { useState } from "react";
import { updateName } from "../../firebase";
import Mensages from "../../components/Mensages";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'





export default function Home() {

	const user = useUser();


	const update = (e) => {
		e.preventDefault();
		updateName(name)
	}

	const dale = (e) => {
		e.preventDefault();
		alert(user.displayName);
	}

	const [name, setName] = useState();
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
						<AsideHome name={user.displayName}></AsideHome>
						<main className={styles.main}>
							<Card></Card>
						</main>
						{/*COMPONENTE*/}
						<div className={styles.video}>
							<video loop width="100%" autoPlay muted  >
								<source src="voidi.mp4" type="video/mp4" />
							</video>
						</div>
						{/*COMPONENTE*/}
						<div className={styles.filters}>
							<h2><FontAwesomeIcon id="icon" className={styles.icon} icon={faFilter} /> Filtros</h2>
						</div>
						<Mensages></Mensages>
					</div>
					{/*
					
					<input type="text" value={name} onChange={e => setName(e.target.value)}/>
					<button onClick={update}>Enviar</button>
					<button onClick={dale}>dale</button>*/}
				</div>
			)}
			{user === USER_STATES.NOT_KNOWN && <p>Cargando</p>}
		</>
	);
}
