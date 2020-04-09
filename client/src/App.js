import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from "./components/Button/Button";
import Tags from "./components/Tags/Tags";


function App() {
  return (
    <div className="App">
      <Button buttonText="Button"/>
      <Tags/>
    </div>
  );
}

export default App;
