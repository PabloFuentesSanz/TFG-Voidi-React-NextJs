import styles from "../styles/Home/Card.module.css";
import TinderCard from 'react-tinder-card';
import React, { useState, useEffect } from "react";
import { getAllOffers } from '../firebase';
import ModalOffer from '../components/ModalOffer.js'
export default function Card() {
    const [people, setPeople] = useState([]);



    useEffect(() => {
        async function getData() {

            const req = await getAllOffers();
            console.log(req)

            setPeople(req);
            console.log(req)
        }
        getData();
    }, []);

    const swiped = (dir, name) => {
        console.log("removing" + name);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    };

    const rowStyle = `${styles.row} row`
    const textStyle = `${styles.text} col-8`



    return (
        <>
            {people.map((person) => (
                <TinderCard
                    className={styles.swipe}
                    key={person.id}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.id)}
                    onCardLeftScreen={() => outOfFrame(person.id)}
                >
                    <div
                        className={styles.card}
                    >
                        <div className={rowStyle}>
                            <div className="col-2">
                                <div className={styles.image} id="img"  >
                                </div>
                                <img src={person.data().img}></img>
                            </div>
                            <div className={textStyle}>
                                <h2 className={styles.jobtype}>{person.data().job}</h2>
                                <h5 className={styles.company}> {person.data().company} <span className={styles.place}>{person.data().place}</span><span className={styles.date}> - publicada el {person.data().date}</span></h5>
                            </div>
                            <p className="mt-5">{person.data().desc}</p>

                        </div>
                        <ModalOffer id={person.id} company={person.data().company} job={person.data().job} desc={person.data().desc} place={person.data().place} date={person.data().date}></ModalOffer>
                    </div>

                </TinderCard>
            ))}
        </>
    );
}
