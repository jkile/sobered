import React from 'react';
import GroupCard from "../../components/GroupCard/GroupCard";
import styles from "./CardContainer.module.scss";

export default function CardContainer(props) {
    return (
        <div className={styles.cardContainer}>
            {props.results.map(item => {
                return <div className={styles.card}><GroupCard {...item} /></div>
            })}
        </div>
    )
}
