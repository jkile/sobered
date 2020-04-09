import React from "react";
import styles from "./Button.module.scss";

function Button(props){

    return(
        <button className={styles.btn}>{props.buttonText}</button>
    )
}

export default Button;