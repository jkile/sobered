import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./LoginModal.module.scss";
import axios from "axios";
import { Redirect } from "react-router-dom";
import UserContext from "../UserContext/UserContext";


export default function LoginModal(props) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [resState, setResState] = useState("");
  const [resSignState, setResSignState] = useState("");
  const [incorrectPass, setIncorrectPass] = useState(false);

  const userInfo = useContext(UserContext);

  const handleLoginSubmit = (e) => {
    const user = {
      email: emailValue,
      password: passwordValue,
    };
    e.preventDefault();
    axios
      .post("/users/login", user)
      .then((res) => {
        setIncorrectPass(false);
        if (res.data) {
          const defaultThumbnail = "default";
          userInfo.onLogin(
            res.data._id,
            res.data.username,
            defaultThumbnail,
            true
          );
          setResState(res);
        } else {
          console.log("error");
        }
      })
      .catch((e) => setIncorrectPass(true));
  };

  const handleSignUpSubmit = (e) => {
    if (passwordValue === confirmPasswordValue) {
      const user = {
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
      };
      e.preventDefault();
      axios
        .post("/users/signup", user)
        .then((res) => {
          if (res.data == "OK") {
            setResSignState(res.data);
          }
        })
        .catch((e) => console.log(e));
    } else {
      console.log("passwords dont match");
    }
  };

  const handleUsername = (e) => {
    setUsernameValue(e.target.value)
  }


  const handleConfirmPassword =  e => { 
    setConfirmPasswordValue(e.target.value)   

  }



  const switchModal = () => {
    props.setModalType(!props.modalType);
  };
  if (resSignState) {
    props.modalClose;
  } else if (resState) {
    return <Redirect to="/home" />;
  } else if (!props.modalType) {
    return (
      <div>
        <div
          className={props.show ? styles.overlay : styles.hide}
          onClick={props.modalClose}
        ></div>
        <div className={props.show ? styles.loginModal : styles.hide}>
          <h1 className={styles.loginModalHeader}>Login</h1>
          <form onSubmit={handleLoginSubmit}>
            <SearchBar
              inputText={"Email"}
              width="15"
              type="text"
              name="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <SearchBar
              inputText={"Password"}
              width="15"
              type="password"
              name="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </form>
          {incorrectPass && <div className={styles.incorrectPass}>Incorrect email or password</div>}
          <div className={styles.formButtons}>
            <div className={styles.signUpButton}>
              <Button
                variant="accent"
                buttonText="Sign Up"
                onClick={switchModal}
              />
            </div>

            <div className={styles.signInButton}>
              <Button
                variant="primary"
                buttonText="Login"
                onClick={handleLoginSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          className={props.show ? styles.overlay : styles.hide}
          onClick={props.modalClose}
        ></div>
        <div className={props.show ? styles.signUpModal : styles.hide}>
          <h1 className={styles.loginModalHeader}>Sign Up</h1>
          <form onSubmit={handleLoginSubmit}>
            <SearchBar
              inputText={"Username"}
              width="15"
              type="text"
              name="username"
              value={usernameValue}
              onChange={handleUsername}
            />
            <SearchBar
              inputText={"Email"}
              width="15"
              type="text"
              name="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <SearchBar
              inputText={"Password"}
              width="15"
              type="password"
              name="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <SearchBar
              inputText={"Confirm Password"}
              width="15"
              type="password"
              name="confirmPassword"
              value={confirmPasswordValue}
              onChange={handleConfirmPassword}
            />
          </form>
          {confirmPasswordValue !== passwordValue && <div className={styles.passValues} >Password values do not match </div>}
          <div className={styles.formButtons}>
            <div className={styles.signUpButton}>
              <Button
                variant="accent"
                buttonText="Login"
                onClick={switchModal}
              />
            </div>

            <div className={styles.signInButton}>
              <Button
                variant="primary"
                buttonText="Sign Up"
                onClick={handleSignUpSubmit}
                disabled={confirmPasswordValue !== passwordValue}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
