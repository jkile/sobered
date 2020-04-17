import React, {useContext} from "react";
import { nav, flexEnd, flexItemStart } from "../Nav/Nav.module.scss";
import UserContext from '../UserContext/UserContext'

function Nav() {
  const {username} = useContext(UserContext)
  return (
    <div className={nav}>
      <div className="flexitem">
        <h1>sobered.</h1>
      </div>
      <div className={flexEnd}>
        <img src="https://www.placehold.it/45x45"></img>
        <p>Hi, {username}</p>
        <a href="/">Sign Out</a>
      </div>
    </div>
  );
}

export default Nav;
