import React, { useState } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./LoginModal.module.scss";
import axios from "axios";

export default function LoginModal(props) {

    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const handleFormSubmit = e => {
        const user = {
            email: emailValue,
            password: passwordValue
        }
        e.preventDefault();
        axios.post("/users/login", user)
            .then(res => {
                console.log(res)
            })
            .catch(e => console.log(e))
    }

    return (
        <div>
            <div className={props.show ? styles.overlay : styles.hide} onClick={props.modalClose}></div>
            <div className={props.show ? styles.loginModal : styles.hide}>
                <h1 className={styles.loginModalHeader}>Login</h1>
                <form onSubmit={handleFormSubmit}>
                    <SearchBar inputText={"Email"} width="15" type="text" name="email" value={emailValue} onChange={e => setEmailValue(e.target.value)} />
                    <SearchBar inputText={"Password"} width="15" type="password" name="password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
                    <div className={styles.signInButton}>
                        <Button variant="primary" buttonText="Sign In" />
                    </div>

                </form>
            </div>
        </div>
    )
}
