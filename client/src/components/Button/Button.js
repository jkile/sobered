import React from "react";
import { btn } from "./Button.module.scss";

function Button(props){

    return(
        <button className={btn}>{props.buttonText}</button>
    )
}

export default Button;