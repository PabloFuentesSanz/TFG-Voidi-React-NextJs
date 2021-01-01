import Head from "next/head";
import useUser, { USER_STATES } from "../../hooks/useUser";
import { logout } from "../../firebase";
import { useEffect, useState } from "react";

export default function HomePage() {
  const user = useUser();
  console.log(user);
  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <>
      <Head>
        <title>Inicio / Voidi</title>
      </Head>
      {user && (
        <>
          <p>Hola {user.displayName} esta página aún no está disponible</p>
          <button onClick={handleClick}>Log out</button>
        </>
      )}
      {user === USER_STATES.NOT_KNOWN && <p>Cargando</p>}
    </>
  );
}
