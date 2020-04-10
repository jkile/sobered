import React from 'react';
import styles from "./GroupCard.module.scss";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";

export default function GroupCard() {
    return (
        <div className={styles.card}>
            <h1 className={styles.cardHeader}>Group Name</h1>
            <div className={styles.daysContainer}>
                <h2 className={styles.cardSubHeader}>Meeting Days: </h2>
                <Tags text="Mon" />
                <Tags text="Wed" />
                <Tags text="Fri" />
            </div>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dolore ab quisquam doloremque est.  rerum necessitatibus non, molestiae est?</p>
            <div className={styles.bottomCardSection}>
                <div className={styles.tagsContainer}>
                    <Tags text="HA" />
                    <Tags text="AA" />
                </div>
                <div className={styles.joinButton}>
                    <Button buttonText="Join" />
                </div>
            </div>


        </div>
    )
}
