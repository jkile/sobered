import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Home from "./pages/Home/Home";
import Index from "./pages/Index/Index";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
