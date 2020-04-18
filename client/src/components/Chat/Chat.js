import React, { useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./Chat.module.scss";
import UserContext from "../UserContext/UserContext";
const socket = io.connect("http://localhost");

function Chat(props) {
  const [socketState, openSocket] = useState(0);
  const [formVal, setVal] = useState();
  const [message, setMessage] = useState("");
  const [val, setValue] = useState(0);
  const [chatBox, setChatBox] = useState([]);
  const [liToRender, setLi] = useState([]);

  const user = useContext(UserContext);

  function sendMessage(e) {
    socket.emit("sendmsg", { username: user.username, message: formVal });
  }

  function socketConnect() {
    console.log("initiating connection");
    // socket.on("connect", () => {
    console.log("connected to websocket");
    socket.on("recMessage", function (data) {
      console.log(data);
      liToRender.push(data);
      setChatBox(data);
    });
    // });
  }

  function handleButtonSubmit(e) {
    e.preventDefault();
    setVal("");
    sendMessage();
  }

  useEffect(() => {
    socketConnect();
  }, []);

  useEffect(() => {
    console.log(liToRender);
  }, [chatBox]);

  return (
    <div className={styles.chat}>
      <h1 className={props.darkMode ? styles.darkModeHeader : styles.chatHeader}>Chat</h1>
      <div className={props.darkMode ? styles.darkModeChatContainer : styles.chatContainer}>
        <div className={props.darkMode ? styles.darkModeChatBox : styles.chatBox}>
          <ol>
            {liToRender.map((item) => (
              <div className={item.username == user.username ? styles.usermessageContainer : styles.messageContainer}>
                <p className={styles.username}>{item.username}</p>

                <li
                  className={
                    item.username == user.username
                      ? styles.usermessage
                      : styles.message
                  }
                >
                  {item.message}
                </li>
              </div>
            ))}
          </ol>
        </div>
        <form className={styles.inputContainer}>
          <SearchBar
            inputText="Message"
            width="12"
            type="text"
            name="message"
            value={formVal}
            onChange={(e) => setVal(e.target.value)}
            darkMode={props.darkMode}
          />
          <div className={styles.btn}>
            <Button onClick={(e) => handleButtonSubmit(e)} buttonText="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
