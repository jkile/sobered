import React, { useState } from 'react'
import Button from "../../components/Button/Button";
import styles from "./Hero.module.scss";
import LoginModal from "../../components/LoginModal/LoginModal"
import anime from "animejs";

export default function Hero() {

    const [show, setShow] = useState(false);

    function closeModal() {
        setShow(false);
    }

    function openModal(){
        setShow(true);
        anime({
            targets: ".loginModal",
            opacity: 1,
            duration: 200
        })
    }

    return (
        <div className={styles.hero}>
            <h1 className={styles.heroHeader}>Sobered.</h1>
            <h2 className={styles.heroSubtitle}>A Virtual Community For Addicts</h2>
            <div className={styles.buttonContainer}>
                <div className={styles.button}>
                    <Button buttonText="Login" onClick={openModal} size="large"/>
                </div>
                <div className={styles.button}>
                    <Button buttonText="Sign Up" onClick={openModal} size="large"/>
                </div>
            </div>
            <LoginModal show={show} modalClose={closeModal}/>
        </div>
    )
}
