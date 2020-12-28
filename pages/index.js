import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/NavbarHome";
import Form from "./components/FormHome";
import Aside from "./components/AsideHome";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const container = useRef(0);
  const imagen = useRef(0);

  useEffect(() => {
    container.current.style.opacity = "1";
    imagen.current.style.opacity = "0";
    imagen.current.style.transform = "translate(0, -500%)";
  }, []);

  return (
    <>
    <div
      className={styles.container}
      id="container"
      ref={container}
      style={{ opacity: "0" }}
    >
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
      <img
        src="/logo.png"
        alt=""
        ref={imagen}
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: "40%",
          zIndex: 50,
          transition: "2s ease-in-out",
          transitionDelay: "1.5s"
        }}
      />
    </>
  );
}
