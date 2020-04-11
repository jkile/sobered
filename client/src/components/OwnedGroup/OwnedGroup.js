import React from "react";
import styles from "./OwnedGroup.module.scss";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";

export default function GroupCard(props) {
  return (
    <div className={styles.card}>
      <h1 className={styles.ownedCardHeader}>{props.groupName}</h1>
    
        <img className={styles.thumbnail} src={props.thumbnail}></img>
     
      <div className={styles.daysContainer}>
        {props.days.map((item) => {
          return <Tags text={item} />;
        })}
      </div>
      <div className={styles.information}>
      <p>Location: {props.location}</p>
      <p>Time: {props.time}</p>
      </div>
      <div className={styles.tagsContainer}>
        {props.tags.map((item) => {
          return <Tags text={item} />;
        })}
      </div>
    </div>
  );
}
