import React from 'react';
import styles from "./GroupCard.module.scss";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";

export default function GroupCard(props) {
    return (
        <div className={styles.card}>
            <h1 className={styles.cardHeader}>{props.groupName}</h1>
            <div className={styles.daysContainer}>
                {props.days.map(item => {
                    return <Tags text={item}/>
                })}
            </div>
            <p className={styles.description}>{props.description}</p>
                <div className={styles.tagsContainer}>
                {props.tags.map(item => {
                   return <Tags text={item}/>
                })}
                </div>
                <div className={styles.joinButton}>
                    <Button buttonText="View" />
                </div>


        </div>
    )
}
