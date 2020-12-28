import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/NavbarHome";
import Form from "./components/FormHome";
import Aside from "./components/AsideHome";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const container = useRef(0);

  useEffect(()=>{
    container.current.style.opacity = "1";
  }, [])

  return (
    <div className={styles.container} id="container" ref={container} style={{ opacity: '0' }}>
      <Head>
        <title>Voidi</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="google" content="notranslate" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Form type="sign" />
        <Form type="log" />
      </main>
      <div className={styles.aside__container}>
        <Aside type="log" />
        <Aside type="sign" />
      </div>
    </div>
  );
}
