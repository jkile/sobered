import React from "react";
import { nav, flexEnd, flexItemStart } from "../Nav/Nav.module.scss";

function Nav() {
  return (
    <div className={nav}>
      <div className="flexitem">
        <h1>sobered.</h1>
      </div>
      <div className={flexEnd}>
        <img src="https://www.placehold.it/45x45"></img>
        <p>xX420PraiseHimXx</p>
      </div>
    </div>
  );
}

export default Nav;
