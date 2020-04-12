import React from 'react';
import styles from "./GroupModal.module.scss"

export default function GroupModal(props) {

    return (
        <div>
            <div className={props.show ? styles.overlay : styles.hide} onClick={props.closeModal}></div>
            <div className={props.show ? styles.modal : styles.hide}>
                <button onClick={props.closeModal} className={styles.modalClose}>x</button>
                
            </div>
        </div>
    )
}
