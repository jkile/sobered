import React, { useState, useEffect } from "react";
import styles from "./Checkbox.module.scss";

function Checkbox(props) {
 

  return (
    <div className={styles.checkbox}>
      <label>
        <input
        type='checkbox'
          checked={props.setChecked}
          onClick={props.onClick}
          value={props.value}
        />
        <span>{props.text}</span>
      </label>
    </div>
  );
}
export default Checkbox;
