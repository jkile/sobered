import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/Button/Button";
import Switch from "./components/toggle/toggle";
import Tags from "./components/Tags/Tags";

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="App">
      <Button />
      <Switch
        isOn={value}
        onColor="#9932CC"
        handleToggle={() => setValue(!value)}
      />
      <Button buttonText="Button" />
      <Tags />
    </div>
  );
}

export default App;
