import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import styles from "../styles/Home/Card.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function ModalOffer(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div className={styles.modal}>
            <span onTouchStart={handleShow}>
                <Button className={styles.button} variant="primary" onClick={handleShow} >
                    <p><FontAwesomeIcon id="icon" className={styles.iconMore} icon={faAngleUp} /> Ver más</p>
                </Button>
            </span>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>{props.job}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>{props.company} · {props.place}<small> - publicada el {props.date}</small></h6>
                    {props.desc}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}