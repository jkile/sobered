import React, { useEffect, useState } from "react";
import io from "socket.io-client";
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
    sendMessage();
  }
  const handleInputChange = (event) => {
    setVal(event.target.value);
  };

  useEffect(() => {
    socketConnect();
  }, []);

  useEffect(() => {
    console.log(liToRender)
  }, [chatBox]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        <ol>
          {liToRender.map(item => <li>{item}</li>)}
        </ol>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.chatInput}
          onChange={(e) => handleInputChange(e)}
        ></input>
        <button onClick={(e) => handleButtonSubmit(e)}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
