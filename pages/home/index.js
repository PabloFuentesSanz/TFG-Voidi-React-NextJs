import Head from "next/head";
import useUser, { USER_STATES } from "../../hooks/useUser";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import AsideHome from "../../components/AsideHome";
import Carga from "../../components/Carga";
import Card from "../../components/Card";
import {useState } from "react";


import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { getCurrentUser } from "../../firebase";
import Mensages from "../../components/Mensages";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

const animatedComponents = makeAnimated();


export default function Home() {

	const [name, setName] = useState('');
	const [userImg, setUserImg] = useState('');
	const [userDesc, setUserDesc] = useState('');
	const [salario, setSalario] = useState(24000);
	const user = useUser()

	const handleChangeSalar = (e) => {
		setSalario(e.target.value)
	}

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
	const videoStyle = `${styles.video} d-none d-sm-none d-md-block`
	const filterStyle = `${styles.filters} d-none d-sm-none d-md-block`
	const cardStyle = `${styles.main} col-12 col-sm-12 col-md-6`

	return (
		<>
			<Head>
				<title>Inicio / Voidi</title>
				<link rel="icon" href="/favicon.png" />
				<meta name="google" content="notranslate" />
			</Head>
			{user && (
				<div className={styles.page}>

					<Navbar img={userImg} name={name}></Navbar>
					<div className={containerStyle}>
						<AsideHome name={name} img={userImg} desc={userDesc}></AsideHome>
						<main className={cardStyle}>
							<Card></Card>
							<div className={styles.noMore}>
								<p>De momento no tenemos más ofertas para usted.</p>
								<p>Descanse mientras buscamos las últimas ofertas que mejor se ajusten a sus gustos.</p>
								<p><FontAwesomeIcon id="icon" className={styles.iconWait} icon={faHourglassHalf} /> </p>
							</div>
						</main>
						{/*COMPONENTE Publi*/}
						<div className="col-sm-3">
							<div className={videoStyle}>
								<video width="100%" autoPlay muted  >
									<source src="voidi.mp4" type="video/mp4" />
								</video>
							</div>
							{/*COMPONENTE Filtros*/}
							<div className={filterStyle}>
								<form >
									<h4><FontAwesomeIcon id="icon" className={styles.icon} icon={faFilter} /> Filtros</h4>
									<div className="input-group mb-1 mt-3">
										<input type="text" class="form-control" placeholder="Buscar..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
										<div class="input-group-append">
											<span class="input-group-text" id="basic-addon2">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
													<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
												</svg>
											</span>
										</div>
									</div>
									<label className="mt-3">Categoría:</label>
									<Select
										closeMenuOnSelect={false}
										components={animatedComponents}
										isMulti
										options={[{value:'Becario', label:'Becario'},{value:'Ingeniero', label:'Ingeniero'},{value:'Informática', label:'Informática'},
										{value:'Telecomunicaciones', label:'Telecomunicaciones'},{value:'Prácticas', label:'Prácticas'}]}
									/>
									<label className="mt-3">{'Salario: ' + salario + ' €/año'} </label>
									<input
										className={styles.salar}
										type="range"
										min="0" max="100000"
										value={salario}
										onChange={handleChangeSalar}
										step="500" />
									<div className="form-group">
										<label className="mt-3" for="exampleFormControlSelect1">Ciudad:</label>
										<select className="form-control" id="exampleFormControlSelect1">
											<option>Madrid</option>
											<option>Barcelona</option>
											<option>Valencia</option>
											<option>San Sebastian</option>
											<option>Toledo</option>
										</select>
									</div>
									
								</form>
							</div>
						</div>
						<Mensages></Mensages>
					</div>

				</div>
			)}
			{user === USER_STATES.NOT_KNOWN && <Carga></Carga>}
		</>
	);
}
