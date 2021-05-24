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
	const videoStyle = `${styles.video} d-none d-sm-block`
	const filterStyle = `${styles.filters} d-none d-sm-block `
	const cardStyle = `${styles.main} col-12 col-sm-6`

	return (
		<>
			<Head>
				<title>Inicio / Voidi</title>
				<link rel="icon" href="/favicon.png" />
				<meta name="google" content="notranslate" />
			</Head>
			{user && (
				<div className={styles.page}>

					<Navbar img={userImg}></Navbar>
					<div className={containerStyle}>
						<AsideHome name={name} img={userImg} desc={userDesc}></AsideHome>
						<main className={cardStyle}>
							<Card></Card>
						</main>
						{/*COMPONENTE Publi*/}
						<div className="col-sm-3">
							<div className={videoStyle}>
								<video loop width="100%" autoPlay muted  >
									<source src="voidi.mp4" type="video/mp4" />
								</video>
							</div>
							{/*COMPONENTE Filtros*/}
							<div className={filterStyle}>
								<h4><FontAwesomeIcon id="icon" className={styles.icon} icon={faFilter} /> Filtros</h4>
							</div>
						</div>
						<Mensages></Mensages>
					</div>
				</div>
			)}
			{user === USER_STATES.NOT_KNOWN && <p>Cargando</p>}
		</>
	);
}
