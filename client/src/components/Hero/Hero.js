import React, { useState } from 'react'
import Button from "../../components/Button/Button";
import styles from "./Hero.module.scss";
import LoginModal from "../../components/LoginModal/LoginModal"
import anime from "animejs";

export default function Hero() {

    const [show, setShow] = useState(false);
    const [modalType, setModalType] = useState(false);

    function closeModal() {
        setShow(false);
    }

    function openLoginModal(){
        setModalType(false)
        setShow(true);
    }

    function openSignUpModal(){
        setModalType(true)
        setShow(true);
    }


    return (
        <div className={styles.hero}>
            <div className={styles.buttonContainer}>
                <div className={styles.button}>
                    <Button buttonText="Login" onClick={openLoginModal}/>
                </div>
                <div className={styles.button}>
                    <Button buttonText="Sign Up" onClick={openSignUpModal} variant="accent"/>
                </div>
            </div>
            <h1 className={styles.heroHeader}>Sobered.</h1>
            <h2 className={styles.heroSubtitle}>A Virtual Community For Addicts</h2>
            
            <LoginModal show={show} modalClose={closeModal} modalType={modalType} setModalType={setModalType}/>
        </div>
    )
}
