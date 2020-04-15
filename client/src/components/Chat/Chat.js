import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./Chat.module.scss";
const socket = io.connect("http://localhost");

function Chat(props) {
  const [socketState, openSocket] = useState(0);
  const [formVal, setVal] = useState();
  const [message, setMessage] = useState("");
  const [val, setValue] = useState(0);
  const [chatBox, setChatBox] = useState([]);
  const [liToRender, setLi] = useState([])

  function sendMessage(e) {
    socket.emit("sendmsg", { message: formVal });
  }

  function socketConnect() {
    socket.on("connect", () => {
      console.log("connected to websocket");
      socket.on("recMessage", function (data) {
        console.log(data)
        liToRender.push(data);
        setChatBox(data)
      });
    });
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
    console.log(liToRender)
  }, [chatBox]);

  return (
    <div className={styles.chat}>
      <h1 className={styles.chatHeader}>Chat</h1>
      <div className={styles.chatContainer}>
        <div className={styles.chatBox}>
          <ol>
            {liToRender.map(item => <li className={styles.message}>{item}</li>)}
          </ol>
        </div>
        <form className={styles.inputContainer}>

          <SearchBar inputText="Message" width="12" type="text" name="message" value={formVal} onChange={e => setVal(e.target.value)} />
          <div className={styles.btn}>
            <Button onClick={(e) => handleButtonSubmit(e)} buttonText="Send" />
          </div>

        </form>
      </div>
    </div>
  );
}

export default Chat;
