import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/NavbarHome";
import Form from "./components/FormHome";
import Aside from "./components/AsideHome";

export default function Home() {
  
  return (
    <div className={styles.container} id="container">
      <Head>
        <title>Voidi</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Aside type="sign"/>
      <Aside type="log"/>
      <main className={styles.main}>
        <Form type="sign"/>
        <Form type="log"/>
      </main>
    </div>
  );
}
