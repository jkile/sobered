import React from 'react';
import styles from "./SearchBar.module.scss";




export default function SearchBar() {
    return (
        <form className={styles.form}>
            
            <input name="search" className={styles.search} type="text"></input>
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label htmlFor="search">
                Search Groups
            </label>
        </form>
    )
}
