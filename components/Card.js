import styles from "../styles/Home/Card.module.css";
import TinderCard from 'react-tinder-card';
import React, { useState, useEffect } from "react";

export default function Card() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function getData() {
            const req = [
                {
                    job: "Desarrollador web",company: "Zalcu", imgUrl: ""
                }, {
                    job: "Ingeniero Software", company:"Indra" ,imgUrl: ""
                }, {
                    job: "FullStack", company:"Accenture" ,imgUrl: ""
                }, {
                    job: "Front-end developer",company: "Xiaomi" ,imgUrl: ""
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
                        style={{ backgroundImage: `url(${person.imgUrl})` }}
                    >
                        <h3 className={styles.personName}>{person.job} ({person.company})</h3>
                    </div>
                </TinderCard>
            ))}
        </>
    );
}
