import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from "./components/Button/Button";
import Tags from "./components/Tags/Tags";
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Button buttonText="Button"/>
      <Tags/>
    </div>
  );
}

export default App;
