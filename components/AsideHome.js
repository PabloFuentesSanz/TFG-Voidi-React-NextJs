import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Home/AsideHome.module.css";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { updateName, updateImg } from '../firebase';
import axios from 'axios';
import { useRef } from "react";


export default function AsideHome(props) {

    const [name, setName] = useState({ ...props.name })
    const fileInputRef = useRef();

    useEffect(() => {
        setName(props.name)
    }, [props.name])


    const [createObjectURL, setCreateObjectURL] = useState({ ...props.img });

    useEffect(() => {
        setCreateObjectURL(props.img)
    }, [props.img])

    useEffect(() => {
        document.getElementById("imgProfile").style.backgroundImage = "url('" + createObjectURL + "')";
    })

    const handleImg = () => {

        document.getElementById("imgUpload").dispatchEvent(new MouseEvent("click"));
    }

    const handleBlur = () => {
        updateName(name)
    }

    function handleClick() {
        const input = document.getElementById("inputName")
        input.focus()
    }

    const handleInputChange = (e) => {
        setName(e.target.value)
    };

    const inputStyle = `${styles.inputRead} form-control`

    const asideStyle = `${styles.aside} d-none d-sm-block col-sm-3`

    const uploadToClient = async (event) => {
        const files = fileInputRef.current.files;
        if (fileInputRef.current.files && fileInputRef.current.files[0]) {
            const body = new FormData();

            for (let index = 0; index <= files.length; index++) {
                const element = files[index];
                body.append('file', element)
            }

            setCreateObjectURL(URL.createObjectURL(files[0]));
            const response = await axios.post("/api/file", body);
            updateImg(response.data.url)


        }
    };

    const uploadToServer = async (imagen) => {
        const body = new FormData();
        body.append("file", imagen);
    };

    return (
        <aside className={asideStyle}>
            <form action="" >
                <input className={styles.file} type="file" ref={fileInputRef} id="imgUpload" accept="image/png, image/jpg, image/jpeg" onChange={uploadToClient} />
            </form>
            <div className={styles.image} onClick={handleImg} id="imgProfile" >

            </div>


            <div class="form-group row p-3">
                <div className="col-sm-2 "></div>
                <div className="col-sm-8">
                    <input className={inputStyle} id="inputName" name="userName" type="text" onClick={handleClick} onBlur={handleBlur} onChange={handleInputChange} value={name} ></input>
                </div>
                <label className="col-sm-2 control-label"><FontAwesomeIcon id="icon" onClick={handleClick} className={styles.icon} icon={faEdit} /></label>
            </div>

            <p>{props.desc}</p>
        </aside>
    );
}
