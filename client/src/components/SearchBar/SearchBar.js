import React, { useState } from 'react';
import styles from "./SearchBar.module.scss";





export default function SearchBar(props) {


    return (
        <div className={styles.form}>
            
            <input name="search" className={styles.search} type={props.type} style={{width: props.width + "rem"}} value={props.value} onChange={props.onChange}></input>
            <span className={styles.highlight}></span>
            <span className={styles.bar} style={{width: props.width + ".5rem"}}></span>
            <label htmlFor="search" style={props.value ? {top:"-1.25rem", fontSize:".85rem", color: "#5264AE"} : {}}>
                {props.inputText}
            </label>
        </div>
    )
}
