import React, {useContext} from "react";
import { nav, flexEnd, flexItemStart } from "../Nav/Nav.module.scss";
import UserContext from '../UserContext/UserContext'

function Nav() {
  const {username, thumbnail} = useContext(UserContext)
  return (
    <div className={nav}>
      <div className="flexitem">
        <h1>sobered.</h1>
      </div>
      <div className={flexEnd}>
        <img src="./default.png"></img>
        <p>Hi, {username}</p>
        <a href="/">Sign Out</a>
      </div>
    </div>
  );
}

export default Nav;
