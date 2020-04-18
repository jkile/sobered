import React, { useState, useContext, useRef } from 'react';
import ReactDOM from "react-dom";
import styles from "./GroupCard.module.scss";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";
import anime from 'animejs';
import axios from "axios";
import UserContext from "../UserContext/UserContext"

export default function GroupCard(props) {

    const currentModal = useRef(null);
    const {userId} = useContext(UserContext);
    const [show, setShow] = useState(false);
    const openModal = () => {
  
        setShow(true);
        setTimeout(() => {
            let currentPosition = currentModal.current.getBoundingClientRect();
            let currentWidth = window.innerWidth;
            let currentHeight = window.innerHeight;  
            anime({
                targets: currentModal.current,
                height: "80vh",
                width: "80vw",
                duration: 150,
                easing: 'easeInOutExpo'
            })      
            anime({
                targets: currentModal.current,
                translateY:  currentHeight * .1 - currentPosition.top,
                translateX: currentWidth * .1 - currentPosition.left,
                duration: 150,
                easing: 'easeInOutExpo'
            })
            
        }, 20)

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
            <div className={show ? styles.show : styles.card} ref={currentModal}>

                <h1 className={show ? styles.modalHeader : styles.cardHeader}>{props.name}</h1>
                <div className={show ? styles.modalDays : styles.daysContainer}>
                    {props.days.map(item => {
                        return <Tags text={item} />
                    })}
                </div>
                <p className={show ? styles.modalDescription : styles.description}>{props.description}</p>
                <div className={show ? styles.modalTags : styles.tagsContainer}>
                    {props.tags.map(item => {
                        return <Tags text={item} />
                    })}
                </div>
                <div className={show ? styles.modalButton : styles.closeButton}>

                    {show ? <Button buttonText="Close" onClick={closeModal} variant="accent"/> : <Button buttonText="View" onClick={openModal}/>}
                    {show && <div className={styles.joinButton} ><Button buttonText="Join" onClick={handleJoin} /></div>}
                </div>
            </div>
            <div className={show ? styles.card : styles.none}></div>
            <div className={show ? styles.overlay : styles.hide} onClick={closeModal}></div>
        </>
    )
}
