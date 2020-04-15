import React, { useState, useEffect } from "react";
import styles from "./Checkbox.module.scss";

function Checkbox(props) {
 

  return (
    <div>
      <label>
        <input
        type='checkbox'
          checked={props.setChecked}
          onChange={props.onChange}
          value={props.value}
        />
        <span>{props.text}</span>
      </label>
    </div>
  );
}
export default Checkbox;
