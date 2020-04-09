import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from "./components/Button/Button";
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Button buttonText="Button"/>
    </div>
  );
}

export default App;
