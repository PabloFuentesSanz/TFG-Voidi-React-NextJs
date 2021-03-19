import styles from "../styles/Home/Card.module.css";
import TinderCard from 'react-tinder-card';
import React, { useState, useEffect } from "react";

export default function Card() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function getData() {
            const req = [
                {
                    job: "Desarrollador web", company: "Zalcu", place: "Madrid, España", date: '1 día', imgUrl: ""
                }, {
                    job: "Ingeniero Software", company: "Indra", place: "Madrid, España",date: '3 días', imgUrl: ""
                }, {
                    job: "FullStack", company: "Accenture", place: "Madrid, España", date: '2 días',imgUrl: ""
                }, {
                    job: "Front-end developer", company: "Xiaomi", place: "Madrid, España",date: '1 día',imgUrl: ""
                }
            ]
            setPeople(req);
        }
        getData();
    }, []);

    const swiped = (dir, name) => {
        console.log("removing" + name);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    };

    return (
        <>
            {people.map((person) => (
                <TinderCard
                    className={styles.swipe}
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                        className={styles.card}
                    >
                        <div className={styles.row}>
                            <div className={styles.image} id="img" >
                            </div>
                            <h2 className={styles.jobtype}>{person.job}</h2>
                            <h5 className={styles.company}> {person.company} <span className={styles.place}>{person.place}</span><span className={styles.date}> - hace {person.date}</span></h5>
                        </div>
                    </div>
                </TinderCard>
            ))}
        </>
    );
}
