import React, { useState } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./CreateGroupButton.module.scss";
import axios from "axios";
import anime from "animejs"
import CreateGroupModal from "../CreateGroupModal/CreateGroupModal"

export default function CreateGroupButton(props) {
    const [show, setShow] = useState(false);

    function closeModal() {
        setShow(false);
    }

    function openModal(){
        setShow(true);
        anime({
            targets: ".CreateGroupModal",
            opacity: 1,
            duration: 200
        })
    }

    return (
        <div className={styles.groupFlex}>
        <Button variant="accent" buttonText="Create A Group" size='large' onClick={openModal}/>
        <CreateGroupModal show={show} modalClose={closeModal}/>
        </div>
    

             
    )
}
