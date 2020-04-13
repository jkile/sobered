import React from "react";
import styles from "./Button.module.scss";

function Button(props){

    return(
        <button className={`${styles.btn} ${props.variant ==="accent" ? styles.btnAccent : styles.btnPrimary}`} onClick={props.onClick}>{props.buttonText}</button>
    )
}

export default Button;