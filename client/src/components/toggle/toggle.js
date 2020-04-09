import React from "react";
import styles from "./toggle.module.scss";

function Switch({ isOn, handleToggle, onColor }) {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.reactToggle}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className={styles.reactToggleLabel}
        htmlFor={`react-switch-new`}
      >
        <span className={styles.reactButton} />
      </label>
    </>
  );
}

export default Switch;
