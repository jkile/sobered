import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import styles from "./GroupCard.module.scss";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";
import GroupModal from "../GroupModal/GroupModal";
import anime from 'animejs/lib/anime.es.js';

export default function GroupCard(props) {

    const currentModal = useRef(null);
    const [show, setShow] = useState(false);
    const openModal = () => {
        let currentPosition = currentModal.current.getBoundingClientRect();
        let currentWidth = window.innerWidth;
        let currentHeight = window.innerHeight;
        console.log(currentPosition)
        anime({
            targets: currentModal.current,
            translateY: currentHeight * .1 - currentPosition.top,
            translateX: currentWidth * .1 - currentPosition.left,
            height: "80vh",
            width: "80vw",
            duration: 50,
            easing: 'easeInOutQuad'
        })
        setShow(true);
    }
    const closeModal = () => {
        let currentPosition = currentModal.current.getBoundingClientRect();
        anime({
            targets: currentModal.current,
            height: "18rem",
            width: "18rem",
            translateY: [currentPosition.top, 0],
            translateX: [currentPosition.left, 0],
            duration: 50,
            easing: 'easeInOutQuad'
        })
        setShow(false);
    }
    
    return (
        <div className="modal">
            <div className={show ? styles.show : styles.card} ref={currentModal}>

                <h1 className={styles.cardHeader}>{props.groupName}</h1>
                <div className={styles.daysContainer}>
                    {props.days.map(item => {
                        return <Tags text={item} />
                    })}
                </div>
                <p className={styles.description}>{props.description}</p>
                <div className={styles.tagsContainer}>
                    {props.tags.map(item => {
                        return <Tags text={item} />
                    })}
                </div>
                <div className={styles.joinButton}>
                    <Button buttonText="View" onClick={openModal} />
                </div>

                <GroupModal closeModal={closeModal} show={false} />
            </div>
            <div className={show ? styles.overlay : styles.hide} onClick={closeModal}></div>
        </div>
    )
}
