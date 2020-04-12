import React from 'react'
import Button from "../../components/Button/Button";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <h1 className={styles.heroHeader}>Sobered.</h1>
            <h2 className={styles.heroSubtitle}>A Virtual Community For Addicts</h2>
            <div className={styles.buttonContainer}>
                <div className={styles.button}>
                    <Button buttonText="Log In" />
                </div>
                <div className={styles.button}>
                    <Button buttonText="Sign Up" />
                </div>
            </div>
        </div>
    )
}
