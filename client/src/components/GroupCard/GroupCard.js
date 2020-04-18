import React, { useState, useContext, useRef } from 'react';
import ReactDOM from "react-dom";
import styles from "./GroupCard.module.scss";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";
import anime from 'animejs';
import axios from "axios";
import UserContext from "../UserContext/UserContext";
import { useMediaQuery } from 'react-responsive';


export default function GroupCard(props) {

    const currentModal = useRef(null);
    const { userId } = useContext(UserContext);
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState(false);
    const isMedium = useMediaQuery({ query: "(min-width: 768px" });
    let size;
    let multiplier;

    if (isMedium) {
        size = 60;
        multiplier = .2;
    } else {
        size = 80;
        multiplier = .1;
    }

    const openModal = () => {
        setShow(true);
        setTimeout(() => {
            let currentPosition = currentModal.current.getBoundingClientRect();
            let currentWidth = window.innerWidth;
            let currentHeight = window.innerHeight;
            anime({
                targets: currentModal.current,
                height: `${size}vh`,
                width: `${size}vw`,
                duration: 150,
                easing: 'easeInOutExpo'
            })
            anime({
                targets: currentModal.current,
                translateY: currentHeight * multiplier - currentPosition.top,
                translateX: currentWidth * multiplier - currentPosition.left,
                duration: 150,
                easing: 'easeInOutExpo'
            })

        }, 20)

        setTimeout(() => {
            setModalContent(true)
        }, 300)

    }
    const closeModal = () => {
        let currentPosition = currentModal.current.getBoundingClientRect();
        anime({
            targets: currentModal.current,
            height: "18rem",
            width: "18rem",
            duration: 100,
            easing: 'easeInOutExpo'
        })
        anime({
            targets: currentModal.current,
            translateY: [currentPosition.top, 0],
            translateX: [currentPosition.left, 0],
            delay: 50,
            duration: 50,
            easing: 'easeInOutExpo'

        })
        setModalContent(false)
        setTimeout(() => {
            setShow(false);
        }, 430)

    }

    const handleJoin = () => {
        console.log(props._id);
        console.log(userId)
        axios.put(`/api/groups/${props._id}/${userId}`)
            .then(res => {
                console.log(res);
            })
            .catch(e => console.log(e));
    }

    return (
        <>
            <div className={`${show ? styles.show : styles.card} ${props.darkMode ? styles.darkModeBackground : styles.lightBackground}`} ref={currentModal}>

                <h1 className={show ? styles.modalHeader : styles.cardHeader}>{props.name}</h1>
                <div className={show ? styles.modalDays : styles.daysContainer}>
                    {props.days.map(item => {
                        return <Tags text={item} />
                    })}
                </div>
                <div className={modalContent ? styles.modalDescriptionContainer : styles.descriptionContainer}>
                    {modalContent && <h1 className={styles.modalDescriptionHeader}>Description</h1>}
                    <p className={show ? styles.modalDescription : styles.description}>{props.description}</p>
                    {modalContent && <h1 className={styles.locationHeader}>Location</h1>}
                    {modalContent && <p className={styles.location}>{props.location}</p>}

                </div>
                {modalContent &&
                <div className={styles.timeContainer}>
                        {modalContent && <h1 className={styles.timeHeader}>Meeting Time</h1>}
                        {modalContent && <p className={styles.time}>{props.time}</p>}
                </div>
                }
                <div className={show ? styles.modalTags : styles.tagsContainer}>
                    {props.tags.map(item => {
                        return <Tags text={item} />
                    })}
                </div>
                <div className={show ? styles.modalButton : styles.closeButton}>
                    {modalContent && <div className={styles.joinButton}><Button buttonText="Join" onClick={handleJoin} /></div>}
                    {show ? <Button buttonText="Close" onClick={closeModal} variant="accent" /> : <Button buttonText="View" onClick={openModal} />}

                </div>
            </div>
            <div className={`${show ? styles.card : styles.none} ${props.darkMode ? styles.darkModeBackground : {}}`}></div>
            <div className={show ? styles.overlay : styles.hide} onClick={closeModal}></div>
        </>
    )
}
