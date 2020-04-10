import React from 'react';
import {tag} from "./Tags.module.scss";

export default function Tags(props) {
    return (
        <div className={tag}>
            {props.text}
        </div>
    )
}
