import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

export default function ModalOffer(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Ver más
            </Button>
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
        </>
    );
}