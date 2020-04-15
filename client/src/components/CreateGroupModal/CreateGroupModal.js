import React, { useState } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./CreateGroupModal.module.scss";
import axios from "axios";

export default function CreateGroupModal(props) {



    return (
        <div>
            <div className={props.show ? styles.overlay : styles.hide} onClick={props.modalClose}></div>
            <div className={props.show ? styles.loginModal : styles.hide}>
                <h1 className={styles.loginModalHeader}>Create a Group</h1>
                <form>
                    <input>
                    </input>

                </form>
            </div>
        </div>
    )
}

