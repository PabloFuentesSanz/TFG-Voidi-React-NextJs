import Head from "next/head";
import useUser, { USER_STATES } from "../../hooks/useUser";
import { logout } from "../../firebase";
import { useEffect, useState } from "react";

export default function RegisterPage(){
    const user = useUser();

    return(
        <>
            <Head>
                <title>Registro / Voidi</title>
            </Head>
            Registro
        </>
    );
}