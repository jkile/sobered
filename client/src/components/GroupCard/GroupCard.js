import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import styles from "./GroupCard.module.scss";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";
import GroupModal from "../GroupModal/GroupModal";
import anime from 'animejs';

export default function GroupCard(props) {

    const currentModal = useRef(null);

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
                easing: 'easeInOutBounce'
            })      
            anime({
                targets: currentModal.current,
                translateY:  currentHeight * .1 - currentPosition.top,
                translateX: currentWidth * .1 - currentPosition.left,
                duration: 150,
                easing: 'easeInOutBounce'
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


    return (
        <>
            <div className={show ? styles.show : styles.card} ref={currentModal}>

                <h1 className={show ? styles.modalHeader : styles.cardHeader}>{props.groupName}</h1>
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
                <div className={show ? styles.modalButton : styles.joinButton}>

                    {show ? <Button buttonText="Close" onClick={closeModal} variant="accent"/> : <Button buttonText="View" onClick={openModal}/>}
                </div>

                <GroupModal closeModal={closeModal} show={false} />
            </div>
            <div className={show ? styles.card : styles.none}></div>
            <div className={show ? styles.overlay : styles.hide} onClick={closeModal}></div>
        </>
    )
}
