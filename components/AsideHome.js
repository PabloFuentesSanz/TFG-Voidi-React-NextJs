import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Home/AsideHome.module.css";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { updateName, uploadImage, updateImg } from '../firebase';
import axios from 'axios';


export default function AsideHome(props) {

    const [name, setName] = useState({ ...props.name })
    const [task, setTask] = useState(null)
    const [imgURL, setImgURL] = useState(null)

    useEffect(() => {
        setName(props.name)
    }, [props.name])

    useEffect(() => {
        if (task) {
            const onProgress = () => { }
            const onError = () => { }
            const onComplete = () => {
                console.log("onComplete")
                task.snapshot.ref.getDownloadURL().then(setImgURL)
                alert(imgURL)
                updateImg(imgURL)

            }

            task.on("state_changed", onProgress, onError, onComplete)
        }
    }, [task])


    useEffect(() => {
        document.getElementById("imgProfile").style.backgroundImage = "url('" + imgURL + "')";
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
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            await uploadToServer(i);
            
        }
    };

    const uploadToServer = async (imagen) => {
        const task = uploadImage(imagen)
        setTask(task)
    };

    return (
        <aside className={asideStyle}>
            <form action="" >
                <input className={styles.file} type="file" id="imgUpload" accept="image/png, image/jpg, image/jpeg" onChange={uploadToClient} />
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
